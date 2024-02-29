<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { RelatedBlogsLinkBlockStoryblok } from '$types/bloks';
  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import Link from './buttons/link.svelte';

  export let block: RelatedBlogsLinkBlockStoryblok;
</script>

{#if block}
  <div
    use:storyblokEditable={block}
    class={cn(
      'wrap sticky top-[400px]  hidden h-fit w-full max-w-[272px] flex-col gap-3 space-y-3 overflow-clip  rounded-3xl p-6 text-black md:block'
    )}
  >
    <h3 class="w-full text-start text-xl font-semibold leading-tight">{block.heading}</h3>

    {#if block}
      <div class="flex flex-col">
        {#each block.blogs as item, i}
          {@const { href, target, rel } = getAnchorFromCmsLink(item.link)}

          <Link
            {href}
            {target}
            {rel}
            class="w-full text-lg-richtext font-medium text-brand-10 hover:underline"
          >
            {item.name}
          </Link>
        {/each}
      </div>
    {/if}
  </div>
{/if}
