<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { HomeStepStoryblok } from '$src/types/bloks';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import StepChip from './StepChip.svelte';

  export let block: HomeStepStoryblok;
  export let className = '';
</script>

<div class={cn(['p-6 lg:p-10'], className)}>
  {#if block.label}
    <StepChip>{block.label}</StepChip>
  {/if}

  <div class="mt-6 flex max-w-[464px] flex-col gap-4">
    <HeadingLatest as="h4" varient="h3">{block.title}</HeadingLatest>

    {#if block.description}
      <ParahLates class="lg:text-[18px]">{block.description}</ParahLates>
    {/if}

    {#if block.link[0]}
      {@const { href } = getAnchorFromCmsLink(block.link[0].link)}
      <GhostButton as="a" variant="highlighted" {href} target="_blank" class="w-max">
        {block.link[0].label}
      </GhostButton>
    {/if}
  </div>
</div>
