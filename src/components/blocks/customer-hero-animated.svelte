<script lang="ts">
  import type { CustomersHeroAnimatedStoryblok } from '$types/bloks';

  export let block: CustomersHeroAnimatedStoryblok;
</script>

{#if block}
  <section class="relative z-10 mt-[68px] flex h-[750px] flex-col items-center justify-center">
    <h1 class="absolute z-10 flex flex-col items-center justify-center gap-[10px]">
      <span class="font-sans text-[58px] font-medium leading-tighter">
        {block.title1}
      </span>
      <span
        class=" bg-gradient-purple bg-clip-text pb-2 font-sans text-[58px] font-medium leading-tighter text-transparent"
      >
        {block.title2}
      </span>
    </h1>

    {#if block.background?.filename}
      <video class="absolute top-0 z-0 h-full w-full object-cover" autoplay muted loop playsinline>
        <source src={block.background.filename} type="video/mp4" />
      </video>
    {/if}
  </section>
{/if}
