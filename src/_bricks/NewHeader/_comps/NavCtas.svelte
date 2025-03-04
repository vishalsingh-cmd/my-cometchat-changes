<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { ButtonLinkStoryblok, LinkStoryblok } from '$src/types/bloks';

  export let className = '';
  export let ctas: Array<LinkStoryblok | ButtonLinkStoryblok>;
  const navCtas = tv({
    base: [
      '-z-[1]',
      'flex items-center justify-center gap-4',
      'mt-auto py-6',
      'xl:py-[unset] xl:mt-[unset]'
    ]
  });
</script>

<div class={navCtas({ class: className })}>
  {#each ctas as cta}
    {#if cta.component === 'link'}
      {@const { href, target } = getAnchorFromCmsLink(cta.link)}
      <a
        class={cn(
          [
            'hidden',
            'whitespace-nowrap text-sm font-semibold tracking-widest',
            'transition-colors duration-300',
            'text-white hover:text-brand-9'
          ],
          ['xl:block']
        )}
        {href}
        {target}
      >
        {cta.label}
      </a>

      <Button
        variant="secondary"
        as="a"
        {href}
        target="_blank"
        class="w-full max-w-[200px] xl:hidden">Log in</Button
      >
    {:else}
      {@const { href, target } = getAnchorFromCmsLink(cta.link)}
      <Button as="a" {href} {target} class="w-full max-w-[200px]">
        {cta.label}
      </Button>
    {/if}
  {/each}
</div>
