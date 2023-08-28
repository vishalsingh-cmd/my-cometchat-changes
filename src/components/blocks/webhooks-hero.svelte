<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';

  import type { WebhooksHeroStoryblok } from '$types/bloks';

  import Background from '$components/webhooks-hero/background.svelte';

  import Media from '$components/media.svelte';
  import Title from '$components/title.svelte';

  export let block: WebhooksHeroStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="dark"
    class="h-[730px] overflow-hidden bg-gray-1 text-gray-12"
  >
    <div class="container relative mx-auto h-full w-full overflow-x-visible">
      <Background />

      <div class="isolate z-10 mt-[52px] lg:ml-[112px] lg:mt-0">
        {#if block.title && block.title[0]}
          {@const { title, description, links } = block.title[0]}
          {@const label = getLabelInfo(block.title[0].label, 'brand')}
          <Title
            {label}
            {title}
            {description}
            buttons={links}
            alignment="left"
            class="lg:pt-[148px]"
          />
        {/if}
      </div>
      {#if block.illustration}
        <div class="isolate z-10 md:absolute md:-right-40 md:top-[30px] md:w-[1000px]">
          <Media media={block.illustration} />
        </div>
      {/if}
    </div>
  </section>
{/if}
