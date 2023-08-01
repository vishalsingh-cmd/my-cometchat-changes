<script lang="ts">
  import Divider from '$components/divider.svelte';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { PreFooterStoryblok } from '$types/bloks';
  import Button from '$components/buttons/button.svelte';
  import BigComet from '$components/pre-footer/assets/big-comet.svg';
  import SmallComet from '$components/pre-footer/assets/small-comet.svg';
  import Stars from '$components/pre-footer/assets/stars.svg';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  export let block: PreFooterStoryblok;
</script>

{#if block}
  <section
    data-theme="dark"
    class="relative overflow-hidden bg-gray-1"
    use:storyblokEditable={block}
  >
    <div
      class="flex flex-col items-start justify-center px-5 pb-20 pt-24 sm:items-center xl:px-0 xl:py-36"
    >
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
    <img
      alt=""
      src={BigComet}
      class="absolute -left-24 -top-36 z-10 min-w-[700px] xl:-left-44 xl:-top-52 xl:min-w-[1897px]"
    />
    <img
      alt=""
      src={SmallComet}
      class="absolute -bottom-16 -right-36 z-10 xl:-bottom-2 xl:-right-10"
    />
  </section>
{/if}
