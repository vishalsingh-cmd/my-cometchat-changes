<script lang="ts">
  import HeadingLatest from '$src/_comps/typography/HeadingLatest.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';

  import StepChip from './StepChip.svelte';

  export let content;

  let className: undefined | string = undefined;
  export { className as class };
</script>

<div class={cn(['p-6 lg:p-10'], className)}>
  <StepChip>{content.step}</StepChip>
  <div class="mt-6 flex max-w-[464px] flex-col gap-4">
    <HeadingLatest as="h4" varient="h3">{content.title}</HeadingLatest>
    <ParahLates class="lg:text-[18px]">{content.des}</ParahLates>
    <GhostButton as="a" variant="highlighted" href={content.link} class="w-max"
      >{content.label}</GhostButton
    >
  </div>
</div>
