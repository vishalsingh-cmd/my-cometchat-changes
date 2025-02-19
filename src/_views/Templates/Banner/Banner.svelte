<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import type { templates_bannerStoryblok } from '$src/types/bloks';
  import Brands from './_comps/Brands.svelte';

  export let block: templates_bannerStoryblok;
</script>

<Section
  className={cn([
    'bg-[#141414] relative isolate overflow-hidden',
    'min-h-[320px] flex flex-col justify-center'
  ])}
>
  <Container className="flex flex-col text-center gap-2">
    <h1 class={cn(['font-700 font-inter text-[24px]'], ['lg:text-[40px]'])}>
      {block.title}
    </h1>
    <p class={cn(['font-400 font-inter text-[16px]', 'mx-auto max-w-4xl'], ['lg:text-[20px]'])}>
      {block.description}
    </p>
  </Container>
  <Brands brands={block.brands} />
</Section>
