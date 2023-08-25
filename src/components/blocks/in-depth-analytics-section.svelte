<script lang="ts">
  import type { InDepthAnalyticsSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { getLabelInfo } from '$lib/utils';

  import Title from '$components/title.svelte';
  import Illustration from '$components/chat-and-messaging/in-depth-analytics/assets/illustration.svg';
  import Background from '$components/chat-and-messaging/in-depth-analytics/background.svelte';

  export let block: InDepthAnalyticsSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden px-container">
    <div class="container relative mx-auto h-[575px] overflow-visible md:h-[738px]">
      <Background />
      <img
        src={Illustration}
        alt=""
        class="absolute bottom-0 w-[1000px] max-w-none -translate-x-1/2 md:bottom-10 md:right-[29px] md:w-[1486px] md:-translate-x-0"
      />
      {#if block.header && block.header[0]}
        {@const { label, description, title, links } = block.header[0]}
        {@const labelInfo = getLabelInfo(label, 'brand')}
        <div class="flex justify-center">
          <Title
            label={labelInfo}
            {description}
            {title}
            buttons={links}
            class="max-w-[528px] pl-0 pr-0"
          />
        </div>
      {/if}
    </div>
  </section>
{/if}
