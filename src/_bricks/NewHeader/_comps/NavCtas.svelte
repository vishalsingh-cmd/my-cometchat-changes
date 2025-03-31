<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import Button from '$src/components/buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { ButtonLinkStoryblok, LinkStoryblok } from '$src/types/bloks';
  import { getNewHeaderContext } from '../_context/newHader.context';

  export let className = '';
  export let ctas: Array<LinkStoryblok | ButtonLinkStoryblok>;
  const { actions } = getNewHeaderContext();
  const navCtas = tv({
    base: [
      '-z-[1]',
      'flex items-center justify-center gap-4',
      'mt-auto py-6',
      'xl:py-[unset] xl:mt-[unset]'
    ]
  });

  const handleOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      actions.hidePanel();
      actions.deactivateNav();
    }
  };
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
        on:click={handleOnClick}
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
        on:click={handleOnClick}
        class="w-full max-w-[200px] xl:hidden">Log in</Button
      >
    {:else}
      {@const { href, target } = getAnchorFromCmsLink(cta.link)}
      <Button as="a" {href} {target} class="w-full max-w-[200px]" on:click={handleOnClick}>
        {cta.label}
      </Button>
    {/if}
  {/each}
</div>
