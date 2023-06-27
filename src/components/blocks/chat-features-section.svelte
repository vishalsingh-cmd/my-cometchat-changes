<script lang="ts">
  import Illustrations from '$components/chat-and-messaging/chat-features/Illustrations.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getImageAttributes } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { ChatFeaturesSectionStoryblok } from '$types/bloks';

  export let block: ChatFeaturesSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden px-container">
    <div class="container relative mx-auto flex flex-col md:pt-[80px] lg:gap-[102px]">
      {#each block.items as item, i}
        {@const { src, alt, width, height } = getImageAttributes(item.illustration)}
        <div
          class={cn(
            'max-w-1216 mx-auto flex w-full flex-col justify-between gap-4 overflow-x-visible lg:flex-row',
            i % 2 !== 0 && 'lg:flex-row-reverse'
          )}
        >
          <Title
            class={cn('max-w-[416px] pl-0 pr-0', i % 2 !== 0 ? 'lg:ml-0' : 'lg:ml-[112px]')}
            alignment="left"
            label={{ content: item.label, color: i % 2 !== 0 ? 'brand' : 'orange' }}
            title={item.title}
            description={item.description}
          />
          <img {src} {alt} {width} {height} />
        </div>
      {/each}
      <Illustrations />
    </div>
  </section>
{/if}
