<script lang="ts">
  import type { WebhooksSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { getLabelInfo } from '$lib/utils';

  import Title from '$components/title.svelte';
  import Background from '$components/webhooks-section/background.svelte';

  export let block: WebhooksSectionStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden">
    <div
      class="container relative mx-auto h-[700px] px-container pb-[367px] md:min-h-[620px] lg:pb-[263px]"
    >
      <Background />
      {#if block.title && block.title[0]}
        {@const { label, title, description, links } = block.title[0]}
        {@const labelInfo = getLabelInfo(label, 'orange')}
        <Title class="pl-0 pr-0" label={labelInfo} {description} {title} buttons={links} />
      {/if}
    </div>
    <div
      class="absolute bottom-0 left-0 h-[140px] w-full bg-gradient-to-b from-[rgba(10,9,20,0.00)] to-[#0A0914]"
    />
  </section>
{/if}
