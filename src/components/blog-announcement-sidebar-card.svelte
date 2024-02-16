<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { BlogAnnouncementSidebarStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import Button from './buttons/button.svelte';

  export let block: BlogAnnouncementSidebarStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[80px] flex h-fit max-w-[272px] flex-col gap-3 space-y-3 overflow-clip rounded-3xl bg-white p-6 text-black shadow-lg md:block'
    )}
  >
    <h1 class="text-xl font-semibold leading-tight">{block.title}</h1>
    <p class="text-md font-normal">{block.description}</p>
    <Button as="a" block={block.link} class="w-fit">Learn more</Button>
    <img src={block.image} alt="Comet Chat" class="absolute -right-16 top-48 w-96" />
  </div>
{/if}
