<script lang="ts">
  import type { CardsSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Media from '$components/media.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';
  import { getLabelInfo } from '$lib/utils';

  export let block: CardsSectionStoryblok;
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 p-6 text-gray-12 lg:py-12"
  >
    <div class="container mx-auto flex">
      {#if block.title && block.title[0]}
        {@const blok = block.title[0]}
        {@const { title, description, links, size } = blok.title[0]}
        {@const label = getLabelInfo(blok.title[0].label, blok.accent_colour || 'orange')}
        <Title
          {label}
          {title}
          {description}
          buttons={links}
          alignment={blok.alignment || 'center'}
          size={size || 'small'}
        />
      {/if}
      <div class="relative right-20 top-48 inline-flex gap-1 px-container">
        <button class="h-10 w-10 rounded-xl border border-gray-10"
          ><Icon icon="chevron-left" class="text-gray-9" /></button
        ><button class="h-10 w-10 rounded-xl border border-gray-10">
          <Icon icon="chevron-right" class="text-gray-9" />
        </button>
      </div>
    </div>
    <div class="container flex gap-10 overflow-auto px-container">
      {#each block.cards as card, i}
        <div class="flex h-[382px] w-[832px] flex-none rounded-2xl border border-gray-12 bg-white">
          <Media
            media={card.image}
            imageTransformOptions={{ size: [300, 382] }}
            class="rounded-l-2xl"
          />
          <div class="flex flex-col justify-between p-10">
            <p class="text-lg font-medium">{card.content}</p>
            <div class="flex justify-between border border-gray-12">
              <div class="flex-none border border-brand-7">
                <h2 class="font-bold text-2xl">{card.name}</h2>
                <p class="text-lg">{card.designation}</p>
              </div>
              <Media
                media={card.logo}
                imageTransformOptions={{ size: [0, 150] }}
                class="h-full w-44 border border-red-9"
              />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
{/if}
