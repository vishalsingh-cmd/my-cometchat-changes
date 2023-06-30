<script lang="ts">
  import Illustration1 from '$components/chat-and-messaging/chat-features/assets/illustration1.svg';
  import Illustration2 from '$components/chat-and-messaging/chat-features/assets/illustration2.svg';
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
            'max-w-1216 relative mx-auto flex w-full flex-col justify-between gap-4 overflow-x-visible lg:flex-row',
            i % 2 !== 0 && 'lg:flex-row-reverse',
            i === 1 && 'md:gap-10'
          )}
        >
          <Title
            class={cn('max-w-[416px] pl-0 pr-0', i % 2 !== 0 ? 'lg:ml-0' : 'lg:ml-[112px]')}
            alignment="left"
            label={{ content: item.label, color: i % 2 !== 0 ? 'brand' : 'orange' }}
            title={item.title}
            description={item.description}
          />
          {#if i === 1}
            <img
              src={Illustration1}
              alt=""
              class="absolute left-[-240px] top-[180px] w-[837px] max-w-none md:left-[-600px] md:top-[100px] md:w-[1877px] lg:top-[-400px]"
            />
          {/if}
          <img {src} {alt} {width} {height} class={cn('', i === 1 && 'mt-[70px] lg:mt-0')} />
        </div>
      {/each}
      <img
        src={Illustration2}
        alt=""
        class="absolute bottom-[-80px] right-[-155px] hidden w-[210px] lg:block"
      />
    </div>
  </section>
{/if}
