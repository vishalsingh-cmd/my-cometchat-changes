<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavFeaturesProps } from '../newHeader.types';
  import NavFeaturePost from '../_innerComps/NavFeaturePost.svelte';
  import NavFeature from '../_innerComps/NavFeature.svelte';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';

  export let className = '';
  export let featuresClassName = '';
  export let titleClassName = '';
  export let block: NavFeaturesProps;

  export let featureVariant: 'default' | 'minimal' = 'default';
  export let forceTwoColumns = false;
  export let iconClassName = '';

  const navFeatures = tv({
    base: ['flex flex-col', 'px-6 w-full', 'py-0'],
    variants: {
      featureVariant: {
        /*Reduced gap to 12px (gap-3) for Left Column (default), kept 16px (gap-4) for Right Column (minimal) */
        default: ['gap-5 xl:gap-3'],
        minimal: ['gap-4']
      },
      forceTwoColumns: {
        true: ['px-0']
      }
    },
    defaultVariants: {
      featureVariant: 'default'
    }
  });

  const features = tv({
    base: ['grid grid-cols-1 gap-x-6'],
    variants: {
      columns: {
        auto: ['xl:grid-cols-1'],
        '1': ['xl:grid-cols-1'],
        '2': ['xl:grid-cols-1'], // Forced 1 by default
        '3': ['xl:grid-cols-1'] // Forced 1 by default
      },
      forceTwoColumns: {
        true: ['xl:grid-cols-2', 'gap-y-6 xl:gap-y-3', 'gap-x-4']
      },
      featureVariant: {
        /*Reduced vertical gap to 12px (gap-y-3) for Left Column */
        default: ['gap-y-3'],
        minimal: ['gap-y-4']
      }
    },
    defaultVariants: {
      columns: '1',
      featureVariant: 'default'
    }
  });
</script>

<NavSection className={navFeatures({ class: className, featureVariant, forceTwoColumns })}>
  {#if block.title}
    <NavTitle variant={featureVariant} className={titleClassName}>{block.title}</NavTitle>
  {/if}

  <div
    class={features({
      class: featuresClassName,
      featureVariant,
      forceTwoColumns,
      columns: block.columns
    })}
  >
    {#each block.features as feature}
      {#if feature.component === 'nav-feature-post'}
        <NavFeaturePost block={feature} />
      {:else}
        <NavFeature
          block={feature}
          variant={featureVariant}
          isDeveloper={forceTwoColumns}
          {iconClassName}
        />
      {/if}
    {/each}
  </div>
</NavSection>
