<script lang="ts">
  import type { ResourcesHeroStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import BackgroundV2 from '$components/resources-hero/background-v2.svelte';

  export let block: ResourcesHeroStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="text-gray-16 relative overflow-hidden">
    <div
      class="container relative mx-auto flex max-h-[400px] flex-col items-start gap-1 px-container pb-[260px] pt-[100px] md:items-center md:gap-5 md:pb-[144px] md:pt-[148px] md:text-center"
    >
      <BackgroundV2 />

      <h1
        class="isolate bg-gradient-purple bg-clip-text pb-2 text-4xl font-semibold leading-tighter text-transparent"
      >
        {block.title}
      </h1>
      <p
        class="isolate w-full max-w-[528px] text-xl font-medium leading-snug tracking-wide opacity-74"
      >
        {block.description}
      </p>
    </div>
  </section>
{/if}
