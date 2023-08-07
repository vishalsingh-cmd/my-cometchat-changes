<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { WebhooksSectionStoryblok } from '$types/bloks';

  import Background from '$components/webhooks-section/background.svelte';

  import Title from '$components/title.svelte';

  export let block: WebhooksSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden">
    <div
      class="container relative mx-auto h-[700px] px-container pb-[367px] md:min-h-[620px] lg:pb-[263px]"
    >
      <Background />
      {#if block.title && block.title[0]}
        {@const title = block.title[0]}
        <Title
          class="pl-0 pr-0"
          label={{ content: title.label, color: 'orange' }}
          description={title.description}
          title={title.title}
          buttons={title.links}
        />
      {/if}
    </div>
  </section>
{/if}
