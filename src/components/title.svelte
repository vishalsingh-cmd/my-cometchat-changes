<script lang="ts">
  import { cva, type VariantProps } from 'class-variance-authority';

  import Button from './buttons/button.svelte';

  import { cn } from '$lib/utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import type { MultilinkStoryblok } from '$types/bloks';

  const titleStyle = cva(
    [
      'w-full',
      'flex',
      'flex-col',
      'px-5',
      'lg:px-16',
      'pt-12',
      'lg:pt-[100px]',
      'pb-10',
      'lg:pb-16'
    ],
    {
      variants: {
        alignment: {
          left: ['items-start', 'text-left'],
          center: ['md:items-center', 'md:text-center']
        }
      }
    }
  );

  let className: undefined | string = undefined;
  export { className as class };
  export let alignment: VariantProps<typeof titleStyle>['alignment'] = 'left';
  export let label: {
    content: string;
    color: 'orange' | 'brand';
  };
  export let title = '';
  export let titleClass: undefined | string = undefined;
  export let description = '';
  export let titleHeadingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h2';
  export let buttons: undefined | MultilinkStoryblok[] = undefined;

  const labelColours = {
    orange: 'text-orange-9',
    brand: 'text-brand-9'
  };
</script>

<div class={cn(titleStyle({ alignment }), className)}>
  <p
    class={`${labelColours[label.color]} mb-3 max-w-[528px] text-xl font-semibold leading-tighter`}
  >
    {label.content}
  </p>
  <svelte:element
    this={titleHeadingType}
    class={cn('max-w-[528px] text-2xl font-semibold leading-tighter text-gray-12', titleClass)}
  >
    {title}
  </svelte:element>
  <p
    class="mt-4 max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]"
  >
    {description}
  </p>
  {#if buttons && buttons.length > 0}
    <div class="mt-6 flex gap-2">
      {#each buttons as button, i}
        {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
        <Button variant={i === 0 ? 'secondary' : 'primary'} as="a" {href} {target} {rel}>
          {button.label}
        </Button>
      {/each}
    </div>
  {/if}
</div>
