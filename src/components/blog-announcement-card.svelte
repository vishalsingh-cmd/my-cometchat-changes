<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { BlogAnnouncementStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';

  export let block: BlogAnnouncementStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'relative flex h-auto w-full flex-col gap-3 overflow-clip rounded-2xl bg-white p-8 shadow-md'
    )}
  >
    <h1 class="text-xl font-semibold leading-tight">{block.title}</h1>
    <p class="text-md font-normal">{block.description}</p>
    <Button as="a" block={block.link} class="w-fit">Learn more</Button>
    <img src={block.image} alt="Comet Chat" class="absolute -right-24 top-24 w-96" />
  </div>
{/if}
