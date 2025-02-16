<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { ConnectedStepsStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import SectionInfo from '$src/_views/Templates/_blocks/SectionInfo.svelte';
  import ConnectedStep from './connected-step.svelte';
  import TemplatesRichtext from '$src/_views/Templates/_comps/TemplatesRichtext.svelte';
  export let block: ConnectedStepsStoryblok;
</script>

<Section>
  <Container
    pxEnabled={false}
    pyEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-8 py-10'])}
  >
    <SectionInfo block={block.info[0]} />

    <div class="flex flex-col">
      {#each block.steps as step}
        <ConnectedStep block={step} />
      {/each}
    </div>

    <TemplatesRichtext block={block.description} />
  </Container>
</Section>
