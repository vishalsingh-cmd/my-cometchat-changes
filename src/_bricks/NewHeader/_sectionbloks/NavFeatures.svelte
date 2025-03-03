<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import type { NavFeaturesProps } from '../newHeader.types';
  import NavFeature from '../_innerComps/NavFeature.svelte';
  import NavSection from '../_innerComps/NavSection.svelte';
  import NavTitle from '../_innerComps/NavTitle.svelte';

  export let className = '';
  export let featuresClassName = '';
  export let block: NavFeaturesProps;

  const navFeatures = tv({
    base: ['flex flex-col gap-6', 'px-6']
  });

  const features = tv({
    base: ['grid grid-cols gap-x-6 gap-y-8'],
    variants: {
      columns: {
        auto: ['lg:grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]'],
        '1': ['lg:grid-cols-1'],
        '2': ['lg:grid-cols-2'],
        '3': ['lg:grid-cols-3']
      }
    },
    defaultVariants: {
      columns: block.columns
    }
  });
</script>

<NavSection className={navFeatures({ class: className })}>
  {#if block.title}
    <NavTitle>{block.title}</NavTitle>
  {/if}

  <div class={features({ class: featuresClassName })}>
    {#each block.features as feature}
      <NavFeature block={feature} />
    {/each}
  </div>
</NavSection>
