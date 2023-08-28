<script lang="ts">
  import Illustration1 from '$components/chat-and-messaging/chat-features/assets/illustration1.svg';
  import Illustration2 from '$components/chat-and-messaging/chat-features/assets/illustration2.svg';
  import Media from '$components/media.svelte';
  import Title from '$components/title.svelte';

  import { cn } from '$lib/utils';
  import { getLabelInfo } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { ChatFeaturesSectionStoryblok } from '$types/bloks';

  export let block: ChatFeaturesSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden">
    <div class="container relative mx-auto flex flex-col md:pt-[80px] lg:gap-[102px]">
      {#each block.items as item, i}
        {@const { title, description, illustration } = item}
        {@const label = getLabelInfo(item.label, i % 2 !== 0 ? 'brand' : 'orange')}
        <div
          class={cn(
            'relative mx-auto flex w-full flex-col gap-4 overflow-x-visible md:gap-[88px] lg:flex-row',
            i % 2 !== 0 && 'lg:flex-row-reverse',
            i === 1 && 'md:gap-28'
          )}
        >
          <Title
            class={cn(
              'max-w-[528px] lg:pl-0 lg:pr-0',
              i % 2 !== 0 ? 'lg:ml-0 lg:mr-20' : 'lg:ml-[120px]'
            )}
            alignment="left"
            {label}
            {title}
            {description}
          />
          {#if i === 1}
            <img
              src={Illustration1}
              alt=""
              class="absolute left-[-300px] top-[170px] w-[1000px] max-w-none md:left-[-550px] md:top-[100px] md:w-[1877px] lg:top-[-400px]"
            />
          {/if}
          <div class={cn('w-full max-w-[528px]', i === 1 && 'mt-[70px] max-w-[1070px] lg:mt-0')}>
            <Media media={illustration} />
          </div>
        </div>
      {/each}
      <img
        src={Illustration2}
        alt=""
        class="absolute bottom-[-170px] right-[-150px] hidden w-[400px] lg:block"
      />
    </div>
  </section>
{/if}
