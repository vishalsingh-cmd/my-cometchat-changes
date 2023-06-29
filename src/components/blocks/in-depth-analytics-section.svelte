<script lang="ts">
  import Background from '$components/chat-and-messaging/in-depth-analytics/background.svelte';
  import Illustration from '$components/chat-and-messaging/in-depth-analytics/assets/illustration.svg';
  import Title from '$components/title.svelte';

  import type { InDepthAnalyticsSectionStoryblok } from '$types/bloks';

  export let block: InDepthAnalyticsSectionStoryblok;
</script>

{#if block}
  <section class="overflow-hidden px-container">
    <div class="container relative mx-auto overflow-visible">
      <Background />
      {#if block.header && block.header[0]}
        {@const { label, description, title, links } = block.header[0]}
        <div class="flex justify-center">
          <Title
            label={{ content: label, color: 'brand' }}
            {description}
            {title}
            buttons={links}
            class="max-w-[528px] pl-0 pr-0"
          />
        </div>
      {/if}
      <img
        src={Illustration}
        alt=""
        class="relative right-0 mb-10 mt-[30px] w-[800px] max-w-none md:right-[29px] md:w-[1486px]"
      />
    </div>
  </section>
{/if}
