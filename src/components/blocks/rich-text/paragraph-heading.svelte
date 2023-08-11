<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { cn } from '$lib/utils';

  import type { ParagraphHeadingStoryblok } from '$types/bloks';

  export let block: ParagraphHeadingStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn('pb-2.5 pt-5 font-semibold leading-tighter md:pb-3 md:pt-10', block.label && 'pt-6')}
  >
    {#if block.label}
      <p class="mb-2 text-xl text-brand-9">{block.label}</p>
    {/if}
    <h2 class="text-2xl text-gray-12">{block.heading}</h2>
  </div>
{/if}
