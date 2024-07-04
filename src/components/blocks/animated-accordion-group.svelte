<script lang="ts">
  import type { AccordianItemStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Icon from '$components/icon/icon.svelte';
  import Accordion from '$components/accordion.svelte';
  import AccordionGroup from '$components/accordion-group.svelte';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import Media from '$components/media.svelte';
  import { typeIcon } from '$lib/storyblok';

  export let block: AccordianItemStoryblok[];
  const dispatch = createEventDispatcher();
  let intervalId: ReturnType<typeof setInterval>;
  let activeIndex = 0;
  let expandedAtLg = null;
  let isLg: boolean;
  let observedElement: HTMLElement;
  $: expandedAtLg = isLg ? block[activeIndex]._uid : null;
  function updateExpanded() {
    isLg = window?.innerWidth >= 1024;
  }

  function resetInterval() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % block.length;
      dispatch('switch', activeIndex);
    }, 10000);
  }
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resetInterval();
          } else {
            clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateExpanded);
      updateExpanded();
    }
    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateExpanded);
    }
    clearInterval(intervalId);
  });
</script>

{#if block}
  <section
    bind:this={observedElement}
    use:storyblokEditable={block}
    data-theme="light"
    class="overflow-hidden bg-gray-1"
  >
    <div class="relative flex w-full flex-col items-center lg:py-12">
      <!-- Gradient -->
      <div
        class="absolute -bottom-[200px] -left-[100px] h-[400px] w-[600px] -rotate-45 opacity-30 blur-[230px] lg:opacity-100"
        style="transform: translate3d(0, 0, 0);"
      />

      {#if block.length >= 2}
        <div class="flex w-full flex-col flex-wrap gap-10 text-gray-12 lg:gap-0 lg:pl-8">
          <AccordionGroup expanded={expandedAtLg}>
            {#each block as accordion, i}
              {@const { icon, title, brief, detail, _uid, media } = accordion}
              <Accordion
                neverCollapse={expandedAtLg ? false : true}
                on:click={() => {
                  activeIndex = i;
                  dispatch('switch', activeIndex);
                  resetInterval();
                }}
                expanded={expandedAtLg == undefined ? true : false}
                id={_uid}
                class={cn(
                  'relative block text-lg backdrop-blur-[20px] transition-[height] duration-[1s] ease-smooth lg:border-l-[1.5px] lg:px-2 lg:py-5 lg:text-xl',
                  activeIndex === i
                    ? 'lg:border-brand-9 lg:after:absolute lg:after:-left-[2px] lg:after:top-0 lg:after:h-1 lg:after:w-1 lg:after:-translate-x-[0.5px] lg:after:rounded-full lg:after:bg-brand-9 lg:after:shadow-[0_0_8px_8px_hsl(var(--color-brand-9)/0.05)]'
                    : 'lg:border-gray-7 '
                )}
              >
                <div slot="header" let:expanded let:attributes let:onClick>
                  <button
                    {...attributes}
                    class="-mb-2 grid w-full grid-cols-12 items-center gap-4 lg:mb-0"
                    on:click={onClick}
                  >
                    {#if icon}
                      {@const typedIcon = typeIcon(icon)}
                      <div
                        class={cn(
                          'relative top-2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-9/10 text-brand-9 lg:static lg:ml-3'
                        )}
                      >
                        <Icon size="xs" icon={typedIcon} />
                      </div>
                    {/if}
                    <p
                      class={cn(
                        'col-start-2 col-end-12 ml-4 text-left text-xl font-semibold lg:ml-3 lg:leading-snug',
                        expanded ? 'text-brand-9 opacity-100' : 'opacity-50'
                      )}
                    >
                      {title}
                    </p>
                  </button>
                </div>
                <div class="ml-4 grid grid-cols-12 gap-5 lg:ml-3">
                  <div class="col-span-10 col-start-2">
                    <p class="py-2 leading-none">{brief}</p>
                    <p class="font-medium leading-tight tracking-wide opacity-74 lg:leading-snug">
                      {detail}
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-4 lg:hidden">
                  <div class="col-span-10 col-start-2">
                    <Media
                      imageTransformOptions={{ size: [1200, 0] }}
                      {media}
                      class="object-cover"
                    />
                  </div>
                </div>
              </Accordion>
            {/each}
          </AccordionGroup>
        </div>
      {/if}
    </div>
  </section>
{/if}

<style>
  /* CSS for Highlighter Dot */
  .highlighter-dot::before {
    content: '';
    top: 0px; /* Adjust based on the desired position */
    left: 0;
    height: 100px; /* Dot size */
    width: 100px; /* Dot size */
    background-color: red; /* Dot color */
    /* border-radius: 50%;  */
    /* box-shadow: 0 0 8px var(--color-brand-9);  */
  }
</style>
