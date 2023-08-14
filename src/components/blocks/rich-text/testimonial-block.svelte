<script lang="ts">
  import Media from '$components/media.svelte';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import type { TestimonialBlockStoryblok } from '$types/bloks';

  export let block: TestimonialBlockStoryblok;
</script>

{#if block}
  <div use:storyblokEditable={block} class="pd:my-12 flex flex-col gap-3 py-6">
    <div
      class="border-px flex flex-col gap-4 rounded-2xl border border-gray-12/[0.04] bg-gray-12/[0.02] p-5 backdrop-blur-[20px]"
      style="transform: translate3d(0, 0, 0);"
    >
      <p class="text-lg font-medium leading-snug tracking-wide">{block.testimonial}</p>
      <div class="flex flex-col gap-[2px] text-md font-semibold leading-tight tracking-wide">
        <p>{block.author_name}</p>
        <p class="opacity-74">{block.author_position}, {block.author_company}</p>
      </div>
    </div>
    {#if block.author_image}
      <Media media={block.author_image} class="w-12 rounded-full" />
    {/if}
  </div>
{/if}
