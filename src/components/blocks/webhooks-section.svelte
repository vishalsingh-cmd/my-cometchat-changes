<script lang="ts">
  import Title from '$components/title.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { WebhooksSectionStoryblok } from '$types/bloks';
  import Illustrations from '$components/webhooks-section/illustrations.svg';
  import Stars from '$components/webhooks-section/stars.svg';
  import Blur from '$components/webhooks-section/blur.svg';

  export let block: WebhooksSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="h-[679px] overflow-hidden sm:h-[779px] xl:h-[620px]"
  >
    <div class="container relative mx-auto h-full px-container pt-12 xl:pt-[100px]">
      {#if block.title?.[0]}
        <Title
          class="p-0"
          label={{ content: block.title?.[0].label, color: 'orange' }}
          description={block.title?.[0].description}
          title={block.title?.[0].title}
          buttons={block.title?.[0].links}
        />
      {/if}
      <div class="xl:top-13 absolute -right-12 bottom-10 min-w-[515.113px]">
        <img src={Illustrations} alt="" />
      </div>
      <div class="absolute -bottom-10 right-0 hidden h-full w-full xl:block">
        <img src={Stars} alt="" class="" />
      </div>
      <div class="absolute -bottom-[400px] -right-[600px] opacity-40 md:-bottom-[500px]">
        <img src={Blur} alt="" />
      </div>
    </div>
  </section>
{/if}
