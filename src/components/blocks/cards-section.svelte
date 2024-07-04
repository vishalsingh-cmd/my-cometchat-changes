<script lang="ts">
  import type { CardsSectionStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Media from '$components/media.svelte';
  import Icon from '$components/icon/icon.svelte';
  import Title from '$components/title.svelte';
  import { getLabelInfo } from '$lib/utils';
  import { cn } from '$lib/utils';
  import Button from '$components/buttons/button.svelte';
  export let block: CardsSectionStoryblok;
  let horizontalContainer: HTMLDivElement;
  let verticalContainer: HTMLDivElement;
  let noOfCards = block.cards.length;
  let previousCard = 0;
  const scrollCardIntoView = (isNext: boolean, addOnStr = '') => {
    const prevCard = document.getElementById(`testimonial${addOnStr}-card-${previousCard}`);
    prevCard?.classList.add('grayscale');
    prevCard?.classList.add('opacity-50');
    const i = isNext
      ? (previousCard + 1) % noOfCards
      : previousCard == 0
      ? noOfCards - 1
      : previousCard - 1;
    previousCard = i;
    const card = document.getElementById(`testimonial${addOnStr}-card-${i}`);
    card?.classList.remove('grayscale');
    card?.classList.remove('opacity-50');
    const scrollLeft = card?.offsetLeft;
    console.log({ scrollLeft });
    horizontalContainer.scrollTo({ left: scrollLeft - 80, behavior: 'smooth' });
    verticalContainer.scrollTo({ left: scrollLeft - 30, behavior: 'smooth' });
    // card?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };
</script>

{#if block}
  <section
    use:storyblokEditable={block}
    data-theme="light"
    class="bg-brand-3 py-6 text-gray-12 lg:pb-12 lg:pt-0"
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
      <div class="absolute right-20 top-48 hidden gap-1 px-container md:inline-flex">
        <Button
          variant="secondary"
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == 0 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(false)}
          disabled={previousCard == 0}
        >
          <div class="h-5 w-5"><Icon icon="chevron-left" class="text-gray-9" /></div></Button
        ><Button
          variant="secondary"
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == noOfCards - 1 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(true)}
          disabled={previousCard == noOfCards - 1}
        >
          <div class="h-5 w-5"><Icon icon="chevron-right" class="text-gray-9" /></div>
        </Button>
      </div>
    </div>
    <div class="container relative mx-auto pl-container">
      <div
        bind:this={horizontalContainer}
        class="hidden flex-grow-0 gap-10 overflow-hidden md:flex"
      >
        {#each block.cards as card, i}
          <div
            id={`testimonial-card-${i}`}
            class={'flex h-[382px] w-[800px] flex-none rounded-2xl border border-gray-5 bg-white' +
              (i == 0 ? '' : ' opacity-50 grayscale')}
          >
            <Media media={card.image} class="w-[35%] rounded-l-2xl object-cover" />
            <div class="flex flex-col justify-between p-10">
              <p class="text-xl font-medium">{card.content}</p>
              <div class="flex h-[57px] flex-grow-0 justify-between">
                <div class="w-[250px] flex-none">
                  <h2 class="font-bold text-xl">{card.name}</h2>
                  <p class="text-lg opacity-74">{card.designation}</p>
                </div>
                <Media
                  media={card.logo}
                  imageTransformOptions={{ size: [150, 0] }}
                  class="object-contain"
                />
              </div>
            </div>
          </div>
        {/each}
        <div class="w-10" />
      </div>
      <div bind:this={verticalContainer} class="flex flex-grow-0 gap-10 overflow-hidden md:hidden">
        {#each block.cards as card, i}
          <div
            id={`testimonial-m-card-${i}`}
            class={'flex h-[442px] w-[330px] flex-none flex-col rounded-2xl border border-gray-5 bg-white' +
              (i == 0 ? '' : ' grayscale')}
          >
            <Media media={card.image} class="h-[35%] w-full rounded-t-2xl object-cover" />
            <div class="flex flex-col justify-between gap-10 p-5">
              <p class="text-lg font-medium">{card.content}</p>
              <div class="flex h-[50px] flex-grow-0 justify-between">
                <div class="w-[170px] flex-none">
                  <h2 class="font-bold text-xl">{card.name}</h2>
                  <p class="text-lg opacity-74">{card.designation}</p>
                </div>
                <Media media={card.logo} class="w-24 object-contain" />
              </div>
            </div>
          </div>
        {/each}
        <div class="w-10" />
      </div>
      <div class="bottom-0 inline-flex w-full justify-center gap-1 py-1 md:hidden">
        <Button
          variant="secondary"
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == 0 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(false, '-m')}
          disabled={previousCard == 0}
        >
          <div class="h-5 w-5"><Icon icon="chevron-left" class="text-gray-9" /></div></Button
        ><Button
          variant="secondary"
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded-lg hover:border-brand-7',
            previousCard == noOfCards - 1 ? 'opacity-50' : 'border border-gray-7'
          )}
          on:click={() => scrollCardIntoView(true, '-m')}
          disabled={previousCard == noOfCards - 1}
        >
          <div class="h-5 w-5"><Icon icon="chevron-right" class="text-gray-9" /></div>
        </Button>
      </div>
    </div>
  </section>
{/if}
