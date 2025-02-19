<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import type { ConnectedStepsStoryblok } from '$types/bloks';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  import ConnectedStep from './connected-step.svelte';
  import TemplatesRichtext from '$src/_views/Templates/_comps/TemplatesRichtext.svelte';
  import TemplatesHeading from '$src/_views/Templates/_comps/TemplatesHeading.svelte';
  import TemplatesParah from '$src/_views/Templates/_comps/TemplatesParah.svelte';
  export let block: ConnectedStepsStoryblok;
</script>

<Section>
  <Container
    pxEnabled={false}
    pyEnabled={false}
    expand="full"
    className={cn(['flex flex-col gap-8 py-10'])}
  >
    <div class={cn(['flex flex-wrap justify-between gap-2'])}>
      <div class="flex flex-col gap-1">
        <TemplatesHeading tag="h2" size="h2" weight="700">
          {block.title}
        </TemplatesHeading>

        {#if block.description}
          <TemplatesParah tag="p" size="medium" weight="400">
            {block.description}
          </TemplatesParah>
        {/if}
      </div>
    </div>

    <div class="flex flex-col">
      {#each block.steps as step}
        <ConnectedStep block={step} />
      {/each}
    </div>

    <TemplatesRichtext block={block.richDescription} />
  </Container>
</Section>
