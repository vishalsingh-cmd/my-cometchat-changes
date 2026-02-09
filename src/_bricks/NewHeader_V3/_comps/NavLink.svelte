<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { MultilinkStoryblok } from '$src/types/bloks';
  import { getNewHeaderContext } from '../_context/newHader.context';

  export let className = '';
  export let link: MultilinkStoryblok;
  export let isLast = false;
  const { actions } = getNewHeaderContext();

  const navLink = tv({
    base: [
      'relative w-full',
      'font-sans font-semibold text-[#FAFAFF] text-[14px] leading-[1.4] tracking-[0.02em] whitespace-nowrap',
      'flex items-center gap-1 py-6',
      'transition-colors duration-300',
      'group-hover/navitem:text-[#8C7CE0]'
    ],
    variants: {
      isLast: {
        true: 'border-none',
        false: 'border-b border-b-[#FAFAFF] border-opacity-5 xl:border-none'
      }
    },
    defaultVariants: {
      isLast: false
    }
  });

  const handleOnClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.closest('a')) {
      actions.hidePanel();
      actions.deactivateNav();
    }
  };

  const { href, target } = getAnchorFromCmsLink(link);
</script>

<a class={navLink({ class: className, isLast })} {href} {target} on:click={handleOnClick}>
  <slot />
</a>
