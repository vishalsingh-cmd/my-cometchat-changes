<script lang="ts">
  import Title from '$components/title.svelte';

  import Blur from '$components/homepage/platform/assets/blur.svg';
  import ProductDisplay from '$components//homepage/platform/product-display.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { PlatformSectionStoryblok } from '$types/bloks';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: PlatformSectionStoryblok;
</script>

{#if block}
  <section data-theme="light" class="bg-gray-1" use:storyblokEditable={block}>
    <div
      class="relative mx-auto w-full max-w-[1440px] pb-12 max-[1650px]:overflow-hidden md:grid md:grid-cols-2 md:gap-8 md:pt-[35px]"
    >
      <div class="absolute right-[-88px] top-[-182px] hidden blur-[400px] md:block">
        <img alt="" src={Blur} />
      </div>
      <div>
        {#if block.title[0]}
          <Title
            label={{ color: 'orange', content: block.title[0].label }}
            title={block.title[0].title}
          />
        {/if}
        {#if block.products[0]}
          {@const link = getAnchorFromCmsLink(block.products[0].link)}
          <div class="px-5 md:mt-6 md:pl-16">
            <ProductDisplay
              illustration={block.products[0].image.filename}
              title={block.products[0].title}
              description={block.products[0].description}
              link={{ ...link, label: block.products[0].link[0].label ?? '' }}
            />
          </div>
        {/if}
      </div>
      {#if block.products[0]}
        {@const link = getAnchorFromCmsLink(block.products[1].link)}
        <div class="mt-10 px-5 md:mt-[146px] md:pr-16">
          <ProductDisplay
            illustration={block.products[1].image.filename}
            title={block.products[1].title}
            description={block.products[1].description}
            link={{ ...link, label: block.products[1].link[0].label ?? '' }}
          />
        </div>
      {/if}
    </div>
  </section>
{/if}
