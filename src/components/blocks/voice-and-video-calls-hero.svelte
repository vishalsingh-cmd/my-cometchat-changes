<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { VoiceAndVideoCallsHeroStoryblok } from '$types/bloks';

  import HeroHeader from './hero-header.svelte';
  import ImageTitleDescriptionTagsItem from './image-title-description-tags-item.svelte';

  export let block: VoiceAndVideoCallsHeroStoryblok;
</script>

{#if block}
  <section class="px-container" use:storyblokEditable={block}>
    <div
      class="mx-auto flex max-w-content flex-col gap-[143px] pt-[160px] lg:flex-row lg:justify-center"
    >
      <div class="max-w-[436px]">
        {#if block.header && block.header[0]}
          {@const header = block.header[0]}
          <HeroHeader block={header} class="max-w-[430px]" />
        {/if}

        <!-- 2nd item - Visible on desktop and tablet to have a masonry effect -->
        {#if block.items && block.items[1]}
          <div class="mt-[209px] hidden md:block">
            <ImageTitleDescriptionTagsItem block={block.items[1]} />
          </div>
        {/if}
      </div>

      {#if block.items}
        <div class="max-w-[436px]">
          {#each block.items as item, i}
            {@const stylingArrays = [
              'md:mt-[55px]',
              'md:hidden',
              'md:mt-[220px] transform lg:translate-x-[53px]'
            ]}
            <div class={stylingArrays[i]}>
              <ImageTitleDescriptionTagsItem block={item} />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </section>
{/if}
