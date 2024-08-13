<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import Button from './buttons/button.svelte';

  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import type { ButtonLinkStoryblok, RichtextStoryblok } from '$types/bloks';
  import { resolver } from './rich-text/rich-text-renderer.svelte';
  import { paragraph } from './rich-text/rich-text-store';

  const titleStyle = cva(['w-full', 'flex', 'flex-col', 'px-container'], {
    variants: {
      alignment: {
        left: ['items-start', 'text-left'],
        center: ['md:items-center', 'md:text-center']
      },
      size: {
        small: ['lg:py-12', 'py-12'],
        large: ['pt-12', 'lg:pt-[100px]', 'pb-10', 'lg:pb-16']
      }
    }
  });

  let className: undefined | string = undefined;
  export { className as class };
  export let alignment: VariantProps<typeof titleStyle>['alignment'] = 'left';
  export let label:
    | {
        content: string;
        color: 'orange' | 'brand';
      }
    | undefined = undefined;
  export let title = '';
  export let titleClass: undefined | string = undefined;
  export let description: string | RichtextStoryblok | undefined = undefined;
  export let titleHeadingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  export let buttons: undefined | ButtonLinkStoryblok[] = undefined;
  export let size: 'small' | 'large' = 'large';

  const labelColours = {
    orange: 'text-orange-9',
    brand: 'text-brand-9'
  };
</script>

<div class={cn(titleStyle({ alignment, size }), className)}>
  {#if label?.content}
    <p
      class={`${
        labelColours[label.color]
      } mb-2 max-w-[528px] text-xl font-semibold leading-tighter md:mb-3`}
    >
      {label.content}
    </p>
  {/if}
  {#if title}
    <svelte:element
      this={titleHeadingType}
      class={cn('max-w-[528px] text-3xl font-semibold leading-tighter text-gray-12', titleClass)}
    >
      {title}
    </svelte:element>
  {/if}
  {#if description}
    {#if typeof description != 'string' && description.content}
      {#each description.content as content}
        <p
          class={cn(
            paragraph,
            'mt-4 max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]'
          )}
        >
          {@html resolver.render(content)}
        </p>
      {/each}
    {:else}
      <p
        class="mt-4 max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]"
      >
        {description}
      </p>
    {/if}
  {/if}
  {#if buttons && buttons.length > 0}
    <div class="mt-5 flex gap-2 md:mt-6">
      {#each buttons as button, i}
        {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
        <Button variant={i === 0 ? 'secondary' : 'primary'} as="a" {href} {target} {rel}>
          {button.label}
        </Button>
      {/each}
    </div>
  {/if}
</div>
