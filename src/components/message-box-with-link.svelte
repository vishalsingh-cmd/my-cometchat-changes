<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { MessageBoxWithLinkStoryblok } from '$types/bloks';
  import Button from './buttons/button.svelte';
  import Icon from './icon/icon.svelte';

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

  <div class="w-fit items-center justify-center rounded-full bg-brand-5 p-2">
    <Icon icon="triangle-warning" size="sm" class="h-6 w-6 text-brand-9" />
  </div>

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

    {#if block.cta?.length > 0}
      <div class="mt-3 flex gap-3">
        {#each block.cta as button}
          {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
          <Button variant={'primary'} as="a" {href} {target} {rel}>
            {button.label}
          </Button>
        {/each}
      </div>
    {:else}
      <div class="mt-3 flex gap-3">
        <Button
          variant={'primary'}
          href={'https://cometchat.com/docs/home'}
          as="a"
          target="_blank"
          rel="noopener noreferrer">See our docs</Button
        >
      </div>
    {/if}
  </div>
</div>
