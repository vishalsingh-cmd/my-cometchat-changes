<script lang="ts">
  import Title from '$components/title.svelte';

  import Blur from '$components/homepage/platform/assets/blur.svg';
  import ProductDisplay from '$components//homepage/platform/product-display.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PlatformSectionStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { getLabelInfo } from '$lib/utils';

  export let block: PlatformSectionStoryblok;
</script>

{#if block}
  <section
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
    class="bg-gray-1 text-gray-12"
    use:storyblokEditable={block}
  >
    <div
      class="relative mx-auto flex w-full max-w-[1440px] flex-col pb-10 max-[1650px]:overflow-hidden md:pb-20"
    >
      <div
        class="absolute right-[-88px] top-[-182px] hidden blur-[400px] md:block"
        style="transform: translate3d(0, 0, 0);"
      >
        <img alt="" src={Blur} />
      </div>

      <div>
        {#if block.title[0]}
          {@const { title, description, links } = block.title[0]}
          {@const label = getLabelInfo(block.title[0].label, 'orange')}
          <Title {label} {title} {description} buttons={links} class="lg:pb-20 lg:pt-20" />
        {/if}

        {#if block.products}
          <div class="flex flex-col justify-center gap-10 px-container lg:flex-row lg:items-end">
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
