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
    {#if block.title && block.title.length > 0}
      <div class="text-lg-richtext font-semibold text-brand-9">{block.title}</div>
    {:else}
      <div class="text-lg-richtext font-semibold text-brand-9">Important</div>
    {/if}

    {#if block.message && block.message.length > 0}
      <p class="w-full whitespace-pre-line font-medium">{block.message}</p>
    {:else}
      <p class="w-full whitespace-pre-line font-medium">
        This tutorial is outdated. We're currently working on an updated version. In the meantime,
        for instructions on building a chat app using CometChat, please visit our documentation.
      </p>
    {/if}

    {#if block.cta}
      <div class="mt-3 flex gap-3">
        {#each block.cta as button}
          {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}

          {#if href && href.length > 0 && target && target.length > 0 && rel && rel.length > 0}
            <Button variant={'primary'} as="a" {href} {target} {rel}>
              {button.label}
            </Button>
          {:else}
            <Button variant={'primary'} href={'https://cometchat.com/docs/home'}
              >See our docs</Button
            >
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>
