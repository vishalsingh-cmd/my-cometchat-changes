<script lang="ts">
  import Title from '$components/title.svelte';

  import Blur from '$components/homepage/platform/assets/blur.svg';
  import ProductDisplay from '$components//homepage/platform/product-display.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PlatformSectionStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn, getLabelInfo } from '$lib/utils';

  export let block: PlatformSectionStoryblok;

  let gridCols = block.maxColumns
    ? `grid-template-columns: ${Array(Number(block.maxColumns))
        .fill('1fr')
        .reduce((p, s) => s + ' ' + p)}`
    : '';
</script>

{#if block}
  <section
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
    class={cn([block.background === 'white' ? 'white' : 'bg-gray-1', 'text-gray-12'])}
    use:storyblokEditable={block}
  >
    <div
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
    </div>
  </section>
{/if}
