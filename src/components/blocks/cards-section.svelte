<script lang="ts">
  import type { CardsSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Media from '$components/media.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';
  import { getLabelInfo } from '$lib/utils';
  import { cn } from '$lib/utils';
  export let block: CardsSectionStoryblok;
  let noOfCards = block.cards.length;
  let previousCard = 0;
  const scrollCardIntoView = (isNext: boolean, addOnStr = '') => {
    const prevCard = document.getElementById(`testimonial${addOnStr}-card-${previousCard}`);
    prevCard?.classList.add('grayscale');
    const i = isNext
      ? (previousCard + 1) % noOfCards
      : previousCard == 0
      ? noOfCards - 1
      : previousCard - 1;
    previousCard = i;
    const card = document.getElementById(`testimonial${addOnStr}-card-${i}`);
    card?.classList.remove('grayscale');
    card?.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'start' });
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-gray-1 py-6 text-gray-12 lg:py-12"
  >
    <div class="container relative mx-auto">
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
      <div class="absolute bottom-10 right-20 hidden gap-1 px-container md:inline-flex">
        <button
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == 0 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(false)}
          disabled={previousCard == 0}
        >
          <div class="h-5 w-5"><Icon icon="chevron-left" class="text-gray-9" /></div></button
        ><button
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == noOfCards - 1 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(true)}
          disabled={previousCard == noOfCards - 1}
        >
          <div class="h-5 w-5"><Icon icon="chevron-right" class="text-gray-9" /></div>
        </button>
      </div>
    </div>
    <div class="container relative mx-auto px-container">
      <div class="hidden flex-grow-0 gap-10 overflow-scroll md:flex">
        {#each block.cards as card, i}
          <div
            id={`testimonial-card-${i}`}
            class={'flex h-[382px] w-[800px] flex-none rounded-2xl border border-gray-5 bg-white' +
              (i == 0 ? '' : ' grayscale')}
          >
            <Media
              media={card.image}
              imageTransformOptions={{ size: [0, 382] }}
              class="w-[35%] rounded-l-2xl"
            />
            <div class="flex flex-col justify-between p-10">
              <p class="text-lg font-medium">{card.content}</p>
              <div class="flex h-[57px] flex-grow-0 justify-between">
                <div class="w-[250px] flex-none">
                  <h2 class="font-bold text-xl">{card.name}</h2>
                  <p class="text-lg opacity-74">{card.designation}</p>
                </div>
                <Media media={card.logo} imageTransformOptions={{ size: [150, 0] }} class="w-fit" />
              </div>
            </div>
          </div>
        {/each}
        <div
          id={`testimonial-card-hidden`}
          class="invisible flex h-[382px] w-[832px] flex-none rounded-2xl border border-gray-5 bg-white grayscale"
        >
          <Media
            media={block.cards[0].image}
            imageTransformOptions={{ size: [0, 382] }}
            class="w-[35%] rounded-l-2xl"
          />
          <div class="flex flex-col justify-between p-10">
            <p class="text-lg font-medium">{block.cards[0].content}</p>
            <div class="flex h-[57px] flex-grow-0 justify-between">
              <div class="w-[250px] flex-none">
                <h2 class="font-bold text-xl">{block.cards[0].name}</h2>
                <p class="text-lg opacity-74">{block.cards[0].designation}</p>
              </div>
              <Media
                media={block.cards[0].logo}
                imageTransformOptions={{ size: [150, 0] }}
                class="w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-grow-0 gap-10 overflow-x-scroll md:hidden">
        {#each block.cards as card, i}
          <div
            id={`testimonial-m-card-${i}`}
            class={'flex h-[442px] w-[330px] flex-none flex-col rounded-2xl border border-gray-5 bg-white' +
              (i == 0 ? '' : ' grayscale')}
          >
            <Media
              media={card.image}
              imageTransformOptions={{ size: [0, 382] }}
              class="h-[35%] rounded-t-2xl object-fill"
            />
            <div class="flex flex-col justify-between gap-10 p-5">
              <p class="text-lg font-medium">{card.content}</p>
              <div class="flex h-[50px] flex-grow-0 justify-between">
                <div class="w-[170px] flex-none">
                  <h2 class="font-bold text-xl">{card.name}</h2>
                  <p class="text-lg opacity-74">{card.designation}</p>
                </div>
                <Media media={card.logo} imageTransformOptions={{ size: [110, 0] }} class="w-fit" />
              </div>
            </div>
          </div>
        {/each}
      </div>
      <div class="bottom-0 inline-flex w-full justify-center gap-1 py-1 md:hidden">
        <button
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == 0 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(false, '-m')}
          disabled={previousCard == 0}
        >
          <div class="h-5 w-5"><Icon icon="chevron-left" class="text-gray-9" /></div></button
        ><button
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == noOfCards - 1 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(true, '-m')}
          disabled={previousCard == noOfCards - 1}
        >
          <div class="h-5 w-5"><Icon icon="chevron-right" class="text-gray-9" /></div>
        </button>
      </div>
    </div>
  </section>
{/if}
