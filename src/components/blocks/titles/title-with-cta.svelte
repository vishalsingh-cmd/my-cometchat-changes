<script lang="ts">
  import Button from '$components/buttons/button.svelte';
  import { cn } from '$lib/utils';
  import type { TitleWithCTAStoryblok } from '$types/bloks';
  export let block: TitleWithCTAStoryblok;
</script>

<div
  class={cn(
    ['flex flex-wrap items-center justify-between gap-4'],
    ['bg-white px-container pb-4 pt-10']
  )}
>
  <h1 class="text-h1 font-[700] leading-tight text-black">
    {block.title}
  </h1>

  <Button variant={'primary'} as="a" href={block.cta[0].link?.url} canHaveGlow={false}>
    {block.cta[0].label}
  </Button>
</div>
