<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import type { TemplatesPlatformSectionStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import TemplatesProductDisplayItem from './TemplatesProductDisplayItem.svelte';
  import TemplatesHeading from '../_comps/TemplatesHeading.svelte';
  import TemplatesParah from '../_comps/TemplatesParah.svelte';

  export let block: TemplatesPlatformSectionStoryblok;

  const productsColumns = tv({
    base: ['grid grid-cols-1 justify-center gap-10', 'sm:grid-cols-2 sm:gap-8'],
    variants: {
      maxColumns: {
        auto: ['lg:grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]'],
        '1': ['lg:grid-cols-1'],
        '2': ['lg:grid-cols-2'],
        '3': ['lg:grid-cols-3'],
        '4': ['lg:grid-cols-4'],
        '5': ['lg:grid-cols-5']
      }
    },

    defaultVariants: {
      maxColumns: block.productsColumns
    }
  });
</script>

{#if block}
  <Section>
    <Container
      pxEnabled={false}
      pyEnabled={false}
      expand="full"
      className="flex flex-col gap-8 py-10"
    >
      <div class={cn(['flex flex-wrap justify-between gap-2'])}>
        <div class="flex flex-col gap-1">
          <TemplatesHeading tag="h2" size="h2" weight="700">
            {block.title}
          </TemplatesHeading>

          {#if block.description}
            <TemplatesParah tag="p" size="medium" weight="400">
              {block.description}
            </TemplatesParah>
          {/if}
        </div>
      </div>

      <div class={productsColumns()}>
        {#each block.products as productBlock}
          <TemplatesProductDisplayItem block={productBlock} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}
