<script lang="ts">
  import InfoItem from '$components/info-item.svelte';
  import Sidebar from '$components/post/sidebar.svelte';
  import Tabs from '$components/tabs/tabs.svelte';
  import Title from '$components/title.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getImageAttributes } from '$lib/storyblok';
  import { cn, getLabelInfo } from '$lib/utils';
  import type { ModerationFeaturesStoryblok } from '$types/bloks';
  import { onDestroy, onMount } from 'svelte';

  export let block: ModerationFeaturesStoryblok;

  let host: HTMLElement;
  let headings: HTMLHeadingElement[] = [];
  let activeHeadingIndex = 0;
  let document = typeof window !== 'undefined' ? window.document : null;
  let windowScroll = 0;

  let activeTab = 0;

  const getAllHeadings = () => {
    if (!document || !host) {
      return;
    }

    headings = Array.from(host.querySelectorAll('span#feature'));
  };

  const onScrollIntoView = (e: CustomEvent) => {
    const heading = e.detail.i as HTMLHeadingElement;

    const headerOffset = 64;

    const top = heading.getBoundingClientRect().top + window.pageYOffset - headerOffset - 16;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const progressForContent = () => {
    if (!document || !host) {
      return;
    }

    headings.forEach((heading: HTMLHeadingElement, i: number) => {
      const headingTop = heading.offsetTop;

      const nextHeadingOffsetTop = i === headings.length - 1 ? 0 : headings[i + 1].offsetTop;

      if (
        (i === headings.length - 1 && windowScroll >= headingTop - 300) ||
        (windowScroll >= headingTop - 100 && windowScroll <= nextHeadingOffsetTop)
      ) {
        activeHeadingIndex = i;
      }
    });
  };

  onMount(() => {
    getAllHeadings();
    progressForContent();

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', progressForContent);
    }
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', progressForContent);
    }
  });
</script>

<svelte:window bind:scrollY={windowScroll} />

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="border-b border-gray-12 border-opacity-8 bg-gray-1 text-gray-12"
  >
    <div class="container mx-auto px-container">
      {#if block.title && block.title[0]}
        {@const title = block.title[0]}
        {@const labelInfo = getLabelInfo(title.label, 'brand')}
        <Title
          class="max-w-[528px] pl-0 pr-0"
          alignment="left"
          label={labelInfo}
          title={title.title}
          description={title.description}
        />
      {/if}

      {#if block.features}
        <div class="flex gap-16 pb-12 lg:mt-12 lg:pb-20" bind:this={host}>
          <aside class="hidden w-[272px] shrink-0 lg:block">
            <Sidebar {headings} {activeHeadingIndex} on:scrollIntoView={onScrollIntoView} />
          </aside>

          <div class="flex flex-col">
            <div class="-mx-container mb-10 bg-gray-1 lg:hidden">
              <Tabs
                class="sm:px-0"
                options={headings.map((h, id) => ({ id, label: h.innerHTML }))}
                {activeTab}
                on:optionSelect={(e) => {
                  activeTab = e.detail.i;
                }}
              />
            </div>
            {#each block.features as feature, i}
              <div
                class={cn(
                  'flex flex-col gap-12 lg:grid lg:auto-rows-min lg:grid-cols-2 lg:gap-x-12 lg:gap-y-20 lg:border-b lg:border-gray-12 lg:border-opacity-8 lg:py-10 lg:first:pt-0 lg:last:border-none lg:last:pb-0',
                  i === 0 && 'lg:pt-0',
                  activeTab !== i && 'hidden lg:grid'
                )}
                use:storyblokEditable={feature}
              >
                <span id="feature" class="visually-hidden">{feature.name}</span>
                {#each feature.sub_features as sub_feature, i}
                  <InfoItem item={sub_feature} class="col-start-1" />

                  {#if feature.images[i]?.filename}
                    {@const { src, alt } = getImageAttributes(feature.images[i], {
                      size: [512, 0]
                    })}
                    <div
                      class={cn(
                        'col-start-2 mt-8 h-80 rounded-3xl border border-gray-5 bg-gray-3 p-6 lg:mt-0 lg:h-auto',
                        feature.images.length === 1 && 'row-span-2'
                      )}
                      style={feature.images.length === 1
                        ? `grid-row: span ${feature.sub_features.length} / span ${feature.sub_features.length}`
                        : undefined}
                    >
                      <div
                        role="img"
                        aria-label={alt}
                        class="h-full w-full bg-contain bg-center bg-no-repeat"
                        style="background-image: url({src});"
                      />
                    </div>
                  {/if}
                {/each}
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </section>
{/if}
