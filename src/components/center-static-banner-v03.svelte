<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { CenterStaticBannerV02Storyblok } from '$types/bloks';
  import Button from './buttons/button.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  export let block: CenterStaticBannerV02Storyblok;
</script>

{#if block}
  <section use:storyblokEditable={block} data-theme={block.theme} class="bg-gray-1 text-gray-12">
    <div class="container mx-auto flex justify-center px-container py-6">
      <div
        class="relative h-[300px] rounded-3xl p-4 sm:h-[230px] sm:w-[861px] md:p-8 xl:w-[1200]"
        style="background-image: url({block.bg
          .filename}); background-repeat: no-repeat; background-position:center; background-size: 100% 100%;"
      >
        <h3 class="w-[280px] text-[26px] font-semibold sm:w-[320px] md:w-[540px] md:text-[30px]">
          {block.title}
        </h3>
        <p
          class="w-[300px] text-lg opacity-74 sm:w-[480px] md:w-[665px] md:py-3 md:text-lg-richtext"
        >
          {block.description}
        </p>
        {#if block.cta[0]}
          {@const { href, target, rel } = getAnchorFromCmsLink(block.cta[0].link)}
          <Button
            class="absolute bottom-4 opacity-90 md:bottom-6"
            variant={block.cta[0].variant}
            as="a"
            {href}
            {target}
            {rel}>{block.cta[0].label}</Button
          >
        {/if}
      </div>
    </div>
  </section>
{/if}
