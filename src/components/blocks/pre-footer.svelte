<script lang="ts">
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { PreFooterStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Button from '$components/buttons/button.svelte';
  import Stars from '$components/pre-footer/assets/stars.svg';
  import Ellipse from '$components/pre-footer/assets/ellipse.svg';
  import BigComet from '$components/pre-footer/assets/big-comet.svg';
  import SmallComet from '$components/pre-footer/assets/small-comet.svg';

  export let block: PreFooterStoryblok;
</script>

{#if block}
  <section data-theme="dark" class="overflow-hidden" use:storyblokEditable={block}>
    <div class="container relative mx-auto bg-gray-1 px-container">
      <div class="flex flex-col items-start justify-center pb-20 pt-24 sm:items-center xl:py-36">
        <div class="flex flex-col items-start sm:items-center">
          <p class="z-20 text-3xl text-gray-12">{block.title}</p>
          <p
            class="z-20 mt-1 max-w-md whitespace-pre-line text-xl leading-tight text-gray-12 opacity-70 sm:text-center"
          >
            {block.description}
          </p>
        </div>
        {#if block.call_to_action}
          <div class="z-20 mt-8 flex gap-3 text-gray-12">
            {#each block.call_to_action as button}
              {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
              <Button as="a" {href} {target} {rel} variant={button.variant}>{button.label}</Button>
            {/each}
          </div>
        {/if}
      </div>

      <img alt="" src={Stars} class="absolute inset-2 z-10" />
      <img alt="" src={Ellipse} class="absolute top-0 w-full" />
      <img
        alt=""
        src={BigComet}
        class="absolute -left-[100px] -top-[120px] h-[250px] w-[250px] lg:-left-[200px] lg:-top-[200px] lg:h-[550px] lg:w-[550px]"
      />
      <img
        alt=""
        src={SmallComet}
        class="absolute -bottom-36 -right-[200px] z-10 h-[420px] w-[420px] lg:-bottom-32 lg:-right-[100px] lg:h-[500px] lg:w-[500px]"
      />
    </div>
  </section>
{/if}
