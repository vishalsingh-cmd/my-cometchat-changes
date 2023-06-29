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
  <section use:storyblokEditable={block} class=" relative overflow-hidden">
    <div
      class=" container relative mx-auto flex flex-col justify-between px-container pb-5 pt-[100px] xl:flex-row"
    >
      {#if block.title?.[0]}
        <Title
          class="min-w-fit p-0"
          label={{ content: block.title?.[0].label, color: 'orange' }}
          description={block.title?.[0].description}
          title={block.title?.[0].title}
          buttons={block.title?.[0].links}
        />
      {/if}

      <div
        class="mt-6 h-[310px] w-full self-end md:mt-0 md:w-[700px] md:-translate-y-32 xl:h-[524px] xl:w-[800px] xl:-translate-y-10"
      >
        <img src={Illustrations} alt="" />
      </div>
      <div class="absolute -bottom-10 right-0 hidden h-full w-full xl:block">
        <img src={Stars} alt="" class="" />
      </div>
      <div class="absolute -bottom-[400px] -right-[600px] min-w-[1117px] opacity-54">
        <img src={Blur} alt="" />
      </div>
    </div>
  </section>
{/if}
