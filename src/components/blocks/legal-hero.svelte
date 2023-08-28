<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { LegalHeroStoryblok } from '$types/bloks';

  import Background from '$components/legal-hero/background.svelte';

  export let block: LegalHeroStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    class="h-[254px] overflow-hidden bg-gray-1 text-gray-12 md:h-[452px]"
    use:storyblokEditable={block}
  >
    <div
      class="container relative mx-auto flex h-full flex-col items-center px-container pt-[132px] md:justify-center md:pt-0"
    >
      <Background />

      {#if block.title}
        <h1 class="isolate z-10 text-4xl font-semibold leading-tighter">{block.title}</h1>
      {/if}
    </div>
  </section>
{/if}
