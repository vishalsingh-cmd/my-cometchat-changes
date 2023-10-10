<script lang="ts">
  import type { CustomersHeroStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import SocialProofs from './social-proofs.svelte';

  import Background from '$components/customers/hero/background.svelte';

  export let block: CustomersHeroStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden bg-gray-1 text-gray-12">
    <div
      class="container relative mx-auto flex px-container pb-[48px] pt-[100px] md:justify-center md:pb-[120px] md:pt-[148px]"
    >
      <h1
        class="isolate z-10 max-w-[736px] text-left text-4xl font-semibold leading-tighter md:text-center"
      >
        {block.title}
      </h1>
      <Background />
    </div>
    <!-- Bottom Gradient -->
    <div
      class="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-gray-1/100 to-transparent lg:h-[100px]"
    />
  </section>
  {#if block.customers && block.customers.length > 0}
    <SocialProofs block={block.customers[0]} />
  {/if}
{/if}
