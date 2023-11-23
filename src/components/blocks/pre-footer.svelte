<script lang="ts">
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import type { PreFooterStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import Button from '$components/buttons/button.svelte';
  import Background from '$components/pre-footer/background.svelte';

  export let block: PreFooterStoryblok;
</script>

{#if block}
  <section data-theme="dark" class="isolate overflow-hidden" use:storyblokEditable={block}>
    <div class="container relative mx-auto bg-gray-1 px-container">
      <div class="flex flex-col items-start justify-center pb-20 pt-24 sm:items-center xl:py-36">
        <div class="flex flex-col items-start sm:items-center">
          {#if block.title && block.title !== ''}
            <p class="z-20 text-3xl leading-tighter text-gray-12">{block.title}</p>
          {/if}
          {#if block.description && block.description !== ''}
            <p
              class="z-20 mt-1 max-w-md whitespace-pre-line text-xl leading-snug text-gray-12 opacity-70 sm:text-center"
            >
              {block.description}
            </p>
          {/if}
        </div>
        {#if block.call_to_action && block.call_to_action.length > 0}
          <div class="z-20 mt-8 flex gap-3 text-gray-12">
            {#each block.call_to_action as button}
              {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
              <Button as="a" {href} {target} {rel} variant={button.variant}>{button.label}</Button>
            {/each}
          </div>
        {/if}
      </div>

      <Background />
    </div>
  </section>
{/if}
