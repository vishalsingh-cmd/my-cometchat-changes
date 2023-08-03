<script lang="ts">
  import type { ResourcesHeroStoryblok } from '$types/bloks';

  import Background from '$components/resources-hero/background.svelte';

  export let block: ResourcesHeroStoryblok;
</script>

{#if block}
  <section class=" overflow-hidden bg-gray-1 text-gray-12">
    <div
      class="container relative mx-auto flex flex-col items-start gap-3 px-container pb-[306px] pt-[100px] md:items-center md:gap-5 md:pb-[144px] md:pt-[148px] md:text-center"
    >
      <Background />

      <h1 class="isolate text-4xl font-semibold leading-tighter">{block.title}</h1>
      <p
        class="isolate w-full max-w-[528px] text-xl font-medium leading-snug tracking-wide opacity-74"
      >
        {block.description}
      </p>
    </div>
  </section>
{/if}
