<script lang="ts">
  import Title from '$components/title.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { WebhooksSectionStoryblok } from '$types/bloks';
  import Illustrations from '$components/webhooks-section/illustrations.svg';
  import IllustrationsSmall from '$components/webhooks-section/illustrations-small.svg';
  import Stars from '$components/webhooks-section/stars.svg';
  import Blur from '$components/webhooks-section/blur.svg';

  export let block: WebhooksSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    class="h-[632px] overflow-hidden sm:h-[779px] md:h-[800px] xl:h-[620px]"
  >
    <div class="container relative mx-auto h-full px-container">
      {#if block.title?.[0]}
        <Title
          class="pl-0 pr-0"
          label={{ content: block.title?.[0].label, color: 'orange' }}
          description={block.title?.[0].description}
          title={block.title?.[0].title}
          buttons={block.title?.[0].links}
        />
      {/if}
      <div class="xl:top-13 absolute -right-12 bottom-10 hidden min-[425px]:block">
        <img src={Illustrations} alt="" />
      </div>
      <div class="xl:top-13 bottom-15 absolute right-0 block w-full min-[425px]:hidden">
        <img src={IllustrationsSmall} alt="" />
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
