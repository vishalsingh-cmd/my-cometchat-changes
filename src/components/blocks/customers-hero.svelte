<script lang="ts">
  import type { CustomersHeroStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import SocialProofs from './social-proofs.svelte';

  import Background from '$components/customers/hero/background.svelte';

  export let block: CustomersHeroStoryblok;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden bg-gray-1 text-gray-12">
    <div
      class="relative mx-auto flex px-container pb-[258px] pt-[180px] md:justify-center md:pb-[242px] md:pt-[316px]"
    >
      <h1
        class="isolate z-10 max-w-[736px] text-left text-4xl font-semibold leading-tighter md:text-center"
      >
        {block.title}
      </h1>
      <Background />
    </div>
    {#if block.customers && block.customers.length > 0}
      <SocialProofs block={block.customers[0]} />
    {/if}
  </section>
{/if}
