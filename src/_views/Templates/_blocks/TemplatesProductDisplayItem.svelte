<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Media from '$src/components/media.svelte';
  import type { TemplatesProductDisplayItemStoryblok } from '$src/types/bloks';
  import TemplatesHeading from '../_comps/TemplatesHeading.svelte';
  import TemplatesParah from '../_comps/TemplatesParah.svelte';

  export let block: TemplatesProductDisplayItemStoryblok;
</script>

<div class={cn(['grid max-w-[640px] grid-rows-[auto_1fr] gap-4'], ['lg:gap-5'])}>
  <div class="relative h-auto w-full">
    <Media
      class="h-auto w-full object-cover"
      imageTransformOptions={{ size: [1200, 0] }}
      media={block.media}
    />
  </div>
  <div class="flex flex-col gap-1">
    <TemplatesHeading tag="h2" size="h4" weight="500">
      {block.title}
    </TemplatesHeading>
    <TemplatesParah tag="p">
      {block.description}
    </TemplatesParah>
  </div>
</div>
