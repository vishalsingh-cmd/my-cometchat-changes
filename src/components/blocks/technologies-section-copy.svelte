<!-- This block is used while we don't publish the `Technologies` on Storyblok -->
<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import Blur from '$components/technologies/assets/blur.svg';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';

  import type { TechnologiesSectionCopyStoryblok } from '$types/bloks';

  export let block: TechnologiesSectionCopyStoryblok;
</script>

{#if block}
  <section
    data-theme="light"
    class="relative overflow-hidden bg-gray-1 px-container pb-8"
    use:storyblokEditable={block}
  >
    <img
      alt=""
      src={Blur}
      class="absolute right-[-90px] top-[-24px] h-[245px] w-[245px] md:right-[-106px] md:top-[-95px] md:h-[447px] md:w-[447px]"
    />
    <div class="mx-auto max-w-content">
      <Title
        alignment="center"
        class="pl-0 pr-0"
        label={{ content: block.header[0].label, color: 'brand' }}
        title={block.header[0].title}
        buttons={block.header[0].links}
      />
      <div
        class="relative grid grid-cols-2 gap-px before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-[#DCDCE0] before:to-[#FAFAFF00] before:to-80% md:grid-cols-4 md:grid-rows-[104px_88px_104px]"
      >
        {#each block.technologies as technology, i}
          <div class={cn('isolate z-10 bg-gray-1 text-gray-10')}>
            <div
              class={cn(
                ' p-5 md:px-8',
                ' h-full w-full',
                'inline-flex flex-row items-center gap-1.5',
                'rounded',
                'text-gray-12',
                '[&>i]:opacity-74',
                'text-sm',
                'leading-normal',
                'tracking-widest',
                'font-semibold',
                'hover:text-brand-9',
                'active:text-brand-10',
                'outline-brand-7/0',
                'focus-within:outline-1',
                'focus-within:outline-brand-7/100',
                (i === 0 || i === 4 || i === 8) && 'md:pl-12',
                (i === 3 || i === 7 || i === 11) && 'md:pr-12'
              )}
            >
              <Icon icon={technology.icon.toString()} class="flex" />
              {technology.name}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
