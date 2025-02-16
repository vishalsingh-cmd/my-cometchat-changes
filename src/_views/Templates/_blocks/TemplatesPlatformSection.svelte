<script lang="ts">
  import type { TemplatesPlatformSectionStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SectionInfo from './SectionInfo.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import TemplatesProductDisplayItem from './TemplatesProductDisplayItem.svelte';

  export let block: TemplatesPlatformSectionStoryblok;
</script>

{#if block}
  <Section>
    <Container
      pxEnabled={false}
      pyEnabled={false}
      expand="full"
      className="flex flex-col gap-8 py-10"
    >
      <SectionInfo block={block.info[0]} />
      <div
        class={cn(
          ['grid-cols grid justify-center gap-10'],
          ['sm:grid-cols-2 sm:gap-8'],
          ['lg:grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]']
        )}
      >
        {#each block.products as productBlock}
          <TemplatesProductDisplayItem block={productBlock} />
        {/each}
      </div>
    </Container>
  </Section>
{/if}

<!-- <div
class="relative mx-auto flex w-full max-w-[1440px] flex-col pb-10 max-[1650px]:overflow-hidden md:pb-20"
>
{#if block.background !== 'white'}
  <div
    class="absolute right-[-88px] top-[-182px] hidden blur-[400px] md:block"
    style="transform: translate3d(0, 0, 0);"
  >
    <img alt="" src={Blur} />
  </div>
{/if}

<div>
  {#if block.title[0]}
    {@const { title, description, links, size } = block.title[0]}
    {@const label = getLabelInfo(block.title[0].label, 'orange')}
    <Title {label} {title} {description} buttons={links} {size} />
  {/if}

  {#if block.products}
    <div
      class={cn(
        ['grid-cols grid justify-center gap-10 px-container'],
        ['sm:grid-cols-2'],
        ['lg:grid-cols-[repeat(auto-fill,_minmax(300px,1fr))]']
      )}
      style={`${gridCols}`}
    >
      {#each block.products as product}
        {@const link =
          product.link && product.link[0]
            ? getAnchorFromCmsLink(product.link[0].link)
            : undefined}
        <ProductDisplay
          illustration={product.image}
          title={product.title}
          description={product.description}
          link={{
            ...link,
            label:
              product.link && product.link[0] && product.link[0].label
                ? product.link[0].label
                : ''
          }}
        />
      {/each}
    </div>
  {/if}
</div>
</div> -->
