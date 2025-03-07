<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import type { standardLinkStoryblok } from '$src/types/bloks';

  export let className = '';
  export let link: standardLinkStoryblok;

  const navLink = tv({
    base: [
      'relative w-full',
      'font-sans font-semibold text-[#FFFFFF] text-[14px] whitespace-nowrap',
      'flex items-center gap-1 py-6',
      'border-b border-b-[#FAFAFF] border-opacity-5 last-of-type:border-none',
      'transition-colors duration-300',
      'group-hover/navitem:text-[#8C7CE0]'
    ]
  });

  const { href, target } = getAnchorFromCmsLink(link);
</script>

<a class={navLink({ class: className })} {href} {target}>
  <slot />
</a>
