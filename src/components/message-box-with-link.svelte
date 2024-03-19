<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { MessageBoxWithLinkStoryblok } from '$types/bloks';
  import Button from './buttons/button.svelte';

  export let block: MessageBoxWithLinkStoryblok;
</script>

<div
  id="message-box-with-link"
  use:storyblokEditable={block}
  class={cn('relative flex w-full flex-col gap-2 rounded-xl', 'border border-brand-4')}
>
  <!-- add border to the left -->
  <div class="absolute left-0 top-0 h-full w-2 rounded-l-xl bg-brand-9" />
  <!-- add colored smudge from the left to the right -->
  <div
    class="absolute left-0 top-0 h-full w-12 rounded-l-xl bg-gradient-to-r from-brand-9/30 to-transparent"
  />
  <div class="ml-3 p-4">
    <div class="text-lg-richtext font-semibold text-brand-9">{block.title}</div>
    <p class="w-full whitespace-pre-line">{block.message}</p>
    {#if block.cta}
      <div class="mt-3 flex gap-3">
        {#each block.cta as button}
          {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
          <Button variant={'primary'} as="a" {href} {target} {rel}>
            {button.label}
          </Button>
        {/each}
      </div>
    {/if}
  </div>
</div>
