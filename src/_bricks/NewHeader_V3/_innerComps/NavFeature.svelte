<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import Icon from '$src/components/icon/icon.svelte';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  // import NewChip from '../_comps/NewChip.svelte';
  import type { NavFeatureProps } from '../newHeader.types';

  export let className = '';
  export let iconWrapClassName = '';
  export let iconClassName = '';
  export let infoClassName = '';
  export let titleClassName = '';

  export let block: NavFeatureProps;

  export let variant: 'default' | 'minimal' = 'default';
  export let isDeveloper = false;

  const navFeature = tv({
    slots: {
      base: [
        'group/navFeature relative isolate w-full',
        'font-sans font-semibold',
        'grid grid-cols-[auto_1fr] gap-4'
      ],
      iconWrap: ['flex items-center justify-center', 'transition-colors duration-300'],
      iconTV: [
        'text-[#646465]',
        'transition-colors duration-300',

        '[&_path]:fill-[url(#nav-feature-icon-gradient)]',
        '[&_path]:opacity-100' // Ensure opacity is 100 to see the gradient
      ],
      info: ['flex flex-col gap-1.5'],
      title: [
        'font-sans',

        // Typography — EXACT as spec
        'text-[14px]', // Size: 14px
        'font-[600]', // Weight: 600 (Medium)
        /*Changed leading to 20px (leading-5) from 1.06 */
        'leading-[1.06]', // Line-height: 106%
        'tracking-[0]', // Letter spacing: 0%

        // Color & interaction
        'text-[#FAFAFF] text-opacity-90',
        /*Removed opacity-75 to make it fully opaque */
        'transition-colors duration-300'
      ],
      description: [
        'font-sans',

        // Typography — EXACT spec
        'text-[12px]', // Size: 12px
        'font-[500]', // Weight: 500 (Medium)
        'leading-[1.2]', // Line height: 120%
        'tracking-[0.005em]', // Letter spacing: 0.5%

        // Color
        'text-[#FAFAFF] text-opacity-50'
      ]
    },
    variants: {
      variant: {
        default: {
          /*Added p-2, rounded-[12px]. Removed hover effects. */
          base: [
            'items-center',
            'rounded-[12px]',
            'transition-colors',
            'duration-300',
            // Hover state via pseudo-element to prevent layout shift
            'before:absolute',
            'before:-inset-2',
            'before:rounded-[12px]',
            'before:bg-transparent',
            'before:transition-colors',
            'before:duration-300',
            'hover:before:bg-[#FAFAFF0F]',
            'before:-z-10'
          ],
          iconWrap: [
            'h-[44px] w-[44px] rounded-[8px]',
            'border border-[#FAFAFF1F]',
            'bg-gradient-to-b from-[rgba(250,250,255,0)] to-[rgba(250,250,255,0.06)]'
          ],
          iconTV: [
            'w-[24px] h-[24px]',
            '[&_path]:fill-[url(#nav-feature-icon-resources-purple-gradient)]',
            '[&_path]:opacity-100'
          ]
        },
        minimal: {
          /* Added rounded-[10px] */
          base: [
            'items-center',
            'rounded-[10px]',
            'transition-colors',
            'duration-300',
            // Hover state
            'before:absolute',
            'before:-inset-2',
            'before:rounded-[10px]',
            'before:bg-transparent',
            'before:transition-colors',
            'before:duration-300',
            'hover:before:bg-[#FAFAFF0F]',
            'before:-z-10'
          ],
          iconWrap: ['h-auto w-auto border-none bg-transparent', 'p-0 rounded-none'],
          iconTV: [
            'w-[20px] h-[20px]',
            '[&_path]:fill-[url(#nav-feature-icon-minimal-gradient)]',
            '[&_path]:opacity-100'
          ], // 20x20px + Gradient for minimal
          info: ['justify-end'], // Vertical alignment Bottom
          title: [
            'font-[600]', // Weight 600
            'text-[14px]', // Size 14px
            'leading-[1.06]', // Line height 106%
            'tracking-[0]', // Letter spacing 0%
            'opacity-75'
          ]
        }
      },
      isDeveloper: {
        true: {
          // base: ['p-2', 'hover:bg-[#FAFAFF]/[0.06]'], // Padding 8px, Hover BG 6%
          iconWrap: [
            'w-[44px] h-[44px] flex justify-center items-center', // Ensure 44x44 and centering
            'border border-[#FAFAFF]/[0.12] rounded-[8px]', // explicit border and radius
            'bg-gradient-to-b from-[rgba(250,250,255,0)] to-[rgba(250,250,255,0.06)]'
          ],
          iconTV: [
            'w-[24px] h-[24px]',
            '[&_path]:!fill-[url(#nav-feature-icon-developer-gradient)]',
            '[&_path]:opacity-100'
          ]
        }
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  });

  const { base, iconWrap, iconTV, info, title, description } = navFeature({ variant, isDeveloper });
  const { href, target } = getAnchorFromCmsLink(block.link);
</script>

<a href={href || ''} {target} class={base({ class: className })} {...$$restProps}>
  <div class={iconWrap({ class: iconWrapClassName })}>
    <Icon icon={block.icon} class={iconTV({ class: iconClassName })} />
  </div>
  <div class={info({ class: infoClassName })}>
    <h4 class={title({ class: titleClassName })}>
      {block.title}
      <!-- {#if block.isNew}
        <NewChip />
      {/if} -->
    </h4>
    {#if variant === 'default' && block.description}
      <p class={description()}>
        {block.description}
      </p>
    {/if}
  </div>
</a>
