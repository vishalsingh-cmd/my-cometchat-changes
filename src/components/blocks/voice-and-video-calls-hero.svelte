<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { VoiceAndVideoCallsHeroStoryblok } from '$types/bloks';

  import HeroHeader from './hero-header.svelte';
  import ImageTitleDescriptionTagsItem from './image-title-description-tags-item.svelte';
  import Background from '$components/voice-and-video-calls/hero/background.svelte';
  import SocialProofs from '$components/blocks/social-proofs.svelte';

  export let block: VoiceAndVideoCallsHeroStoryblok;
</script>

{#if block}
  <section class="overflow-hidden" use:storyblokEditable={block}>
    <section class="px-container">
      <div
        class="relative mx-auto flex max-w-content flex-col gap-16 pb-16 pt-[160px] lg:flex-row lg:justify-center lg:gap-[143px]"
      >
        <!-- Background Elements -->
        <Background />

        <!-- Content -->
        <div>
          {#if block.header && block.header[0]}
            {@const header = block.header[0]}
            <div class="l">
              <HeroHeader variant="secondary" block={header} />
            </div>
          {/if}

          <!-- 2nd item - Visible on desktop to have a masonry effect -->
          {#if block.items && block.items[1]}
            <div class="hidden w-full max-w-[528px] lg:mt-[209px] lg:block">
              <ImageTitleDescriptionTagsItem block={block.items[1]} />
            </div>
          {/if}
        </div>

        {#if block.items}
          <div>
            {#each block.items as item, i}
              {@const stylingArrays = [
                'lg:mt-[55px] flex justify-end lg:block w-full',
                'mt-16 lg:mt-auto lg:hidden w-full',
                'mt-16 lg:mt-[220px] transform lg:translate-x-[53px] flex justify-end lg:block w-full'
              ]}
              <div class={stylingArrays[i]}>
                <ImageTitleDescriptionTagsItem block={item} class="max-w-[436px]" />
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </section>
    {#if block.customers}
      <SocialProofs block={block.customers[0]} />
    {/if}
  </section>
{/if}
