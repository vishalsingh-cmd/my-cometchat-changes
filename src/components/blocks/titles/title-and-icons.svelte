<script lang="ts">
  import { cn } from '$lib/utils';
  import type { TitleAndIconsStoryblok } from '$types/bloks';
  export let block: TitleAndIconsStoryblok;
</script>

<div class="flex flex-col gap-3">
  <div
    class={cn(['font-[700] text-black'], {
      ['text-h1']: block.titleSize === 'h1',
      ['text-h2']: block.titleSize === 'h2',
      ['text-h3']: block.titleSize === 'h3',
      ['text-h4']: block.titleSize === 'h4',
      ['text-h5']: block.titleSize === 'h5'
    })}
  >
    {block.title}
  </div>
  <div class="flex items-center gap-4">
    {#each block.icons as icon}
      <img src={icon.filename} alt="icon" />
    {/each}
  </div>
</div>
