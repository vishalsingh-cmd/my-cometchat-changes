<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import type { HeroHeaderStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  import Button from '$components/buttons/button.svelte';
  import { paragraph } from '$components/rich-text/rich-text-store';
  import { resolver } from '$components/rich-text/rich-text-renderer.svelte';

  const heroHeader = cva([''], {
    variants: {
      variant: {
        primary: ['max-w-[528px]'],
        secondary: ['max-w-[545px]']
      }
    }
  });

  const title = cva(['font-semibold', 'leading-tighter', 'text-gray-12', 'text-opacity-[.54]'], {
    variants: {
      variant: {
        primary: ['text-4xl'],
        secondary: ['text-3xl']
      }
    }
  });

  const buttons = cva(['flex', 'gap-3'], {
    variants: {
      variant: {
        primary: ['mt-6', 'md:mt-10'],
        secondary: ['mt-5', 'md:mt-8']
      }
    }
  });

  let className: undefined | string = undefined;
  export { className as class };
  export let block: HeroHeaderStoryblok;
  export let variant: undefined | VariantProps<typeof heroHeader>['variant'] = 'primary';
</script>

{#if block}
  <div use:storyblokEditable={block} class={cn(heroHeader({ variant }), className)}>
    {#if block.title && block.title.content && block.title.content[0].content}
      <h1 class={cn(title({ variant }))}>
        {#each block.title.content[0].content as part}
          {#if part.marks && part.marks.some((mark) => mark.type === 'italic')}
            <span class="text-gray-12 text-opacity-100">{part.text}</span>
          {:else if part.text === ' '}
            <br />
          {:else}
            {part.text}
          {/if}
        {/each}
      </h1>
    {/if}
    {#if block.description}
      {#if typeof block.description != 'string' && block.description.content}
        {#each block.description.content as content}
          <p
            class={cn(
              paragraph,
              'mt-3 text-xl font-medium leading-snug tracking-wide text-gray-12/74 md:mt-5'
            )}
          >
            {@html resolver.render(content)}
          </p>
        {/each}
      {:else}
        <p class="mt-3 text-xl font-medium leading-snug tracking-wide text-gray-12/74 md:mt-5">
          {block.description}
        </p>
      {/if}
    {/if}
    {#if block.links.length > 0}
      <div class={cn(buttons({ variant }))}>
        {#each block.links as link}
          {@const { href, rel, target } = getAnchorFromCmsLink(link.link)}
          <Button variant={link.variant} as="a" {href} {rel} {target}>
            {link.label}
          </Button>
        {/each}
      </div>
    {/if}
  </div>
{/if}
