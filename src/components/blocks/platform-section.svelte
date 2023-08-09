<script lang="ts">
  import Title from '$components/title.svelte';

  import Blur from '$components/homepage/platform/assets/blur.svg';
  import ProductDisplay from '$components//homepage/platform/product-display.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PlatformSectionStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: PlatformSectionStoryblok;

  const getLabelInfo = (label: string | undefined) => {
    if (!label) {
      return undefined;
    }

    return {
      content: label,
      color: 'orange' as 'orange' | 'brand'
    };
  };
</script>

{#if block}
  <section
    data-theme={block.theme === 'light' ? 'light' : 'dark'}
    class="bg-gray-1 text-gray-12"
    use:storyblokEditable={block}
  >
    <div
      class="relative mx-auto w-full max-w-[1440px] pb-12 max-[1650px]:overflow-hidden md:grid md:grid-cols-2 md:gap-8 md:pt-[35px]"
    >
      <div
        class="absolute right-[-88px] top-[-182px] hidden blur-[400px] md:block"
        style="transform: translate3d(0, 0, 0);"
      >
        <img alt="" src={Blur} />
      </div>
      <div>
        {#if block.title[0]}
          {@const { label, title, description, links } = block.title[0]}
          {@const labelInfo = getLabelInfo(label)}
          <Title label={labelInfo} {title} {description} buttons={links} />
        {/if}
        {#if block.products[0]}
          {@const link =
            block.products[0].link && block.products[0].link[0]
              ? getAnchorFromCmsLink(block.products[0].link[0].link)
              : undefined}
          <div class="px-5 md:pl-16">
            <ProductDisplay
              illustration={block.products[0].image.filename}
              title={block.products[0].title}
              description={block.products[0].description}
              link={{
                ...link,
                label:
                  block.products[0].link &&
                  block.products[0].link[0] &&
                  block.products[0].link[0].label
                    ? block.products[0].link[0].label
                    : ''
              }}
            />
          </div>
        {/if}
      </div>
      {#if block.products[1]}
        {@const link =
          block.products[1].link && block.products[1].link[0]
            ? getAnchorFromCmsLink(block.products[1].link[0].link)
            : undefined}
        <div class="mt-10 px-5 md:mt-[180px] md:pr-16">
          <ProductDisplay
            illustration={block.products[1].image.filename}
            title={block.products[1].title}
            description={block.products[1].description}
            link={{
              ...link,
              label:
                block.products[1].link &&
                block.products[1].link[0] &&
                block.products[1].link[0].label
                  ? block.products[1].link[0].label
                  : ''
            }}
          />
        </div>
      {/if}
    </div>
  </section>
{/if}
