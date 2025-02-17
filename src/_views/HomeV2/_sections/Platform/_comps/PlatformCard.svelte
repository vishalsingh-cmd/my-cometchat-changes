<script lang="ts">
  import { tv, cn } from '$src/_utils/tailwind.utils';
  import { onMount } from 'svelte';
  import GhostButton from '$src/components/buttons/ghost-button.svelte';
  import Media from '$src/components/media.svelte';
  import type { Platform_cardStoryblok } from '$src/types/bloks';
  import { getAnchorFromCmsLink } from '$src/lib/storyblok';
  export let baseClassName = '';
  export let containerClassName = '';
  export let infoClassName = '';
  export let titleClassName = '';
  export let desClassName = '';
  export let imageWrapClassName = '';
  export let imageClassName = '';

  const platformCard = tv({
    slots: {
      platformCard__base: ['relative isolate h-full', 'p-[1px] grid grid-cols-1 overflow-hidden'],
      platformCard__container: [
        'flex flex-col h-full min-h-0',
        'bg-[#0A0914] rounded-2xl',
        'lg:rounded-3xl'
      ],
      platformCard__info: ['flex flex-col gap-4 px-4 pt-4 pb-6', 'lg:p-8'],
      platformCard__title: ['font-sans text-[18px] font-semibold text-[#FAFAFF]', 'lg:text-[24px]'],
      platformCard__des: ['font-sans text-[18px] font-semibold text-[#FAFAFF] opacity-74'],
      platformCard__imageWrap: ['flex h-full w-full'],
      platformCard__image: ['w-full object-contain']
    }
  });
  const {
    platformCard__base,
    platformCard__container,
    platformCard__info,
    platformCard__title,
    platformCard__des,
    platformCard__imageWrap,
    platformCard__image
  } = platformCard();

  /* -------------------------------- animation ------------------------------- */
  let card: HTMLDivElement;
  let gradient: HTMLDivElement;
  let bounds: DOMRect;

  onMount(() => {
    updateBounds();
    window.addEventListener('scroll', updateBounds);
    window.addEventListener('resize', updateBounds);

    return () => {
      window.removeEventListener('scroll', updateBounds);
      window.removeEventListener('resize', updateBounds);
    };
  });

  function updateBounds() {
    bounds = card.getBoundingClientRect();
  }

  function handlePointerMove(event: PointerEvent) {
    if (!bounds) updateBounds();

    const rect = bounds;
    const x = event.pageX - (rect.left + window.scrollX);
    const y = event.pageY - (rect.top + window.scrollY);

    gradient.style.opacity = '1';
    gradient.style.background = `
      radial-gradient(
        600px circle at ${x}px ${y}px,
        rgba(250, 250, 255, 0.08),
        rgba(250, 250, 255, 0) 40%
      )
    `;
  }

  export let block: Platform_cardStoryblok;
</script>

<div
  class={platformCard__base({ class: baseClassName })}
  bind:this={card}
  on:pointermove={handlePointerMove}
>
  <div class={platformCard__container({ class: containerClassName })}>
    <div class={platformCard__info({ class: infoClassName })}>
      <Media media={block.icon} />
      <img src={block.icon.filename} alt={block.icon.alt} class="w-12 lg:w-16" />
      <h3 class={platformCard__title({ class: titleClassName })}>{block.title}</h3>
      <p class={platformCard__des({ class: desClassName })}>
        {block.description}
      </p>
      {#if block.link}
        {@const link = block.link[0]}
        {@const { href, target, rel } = getAnchorFromCmsLink(link.link)}
        <GhostButton variant="highlighted" class="w-max" {href} as="a" {target} {rel}>
          {link.label}
        </GhostButton>
      {/if}
    </div>

    <div class={platformCard__imageWrap({ class: imageWrapClassName })}>
      <Media media={block.image} class={platformCard__image({ class: imageClassName })} />
    </div>
  </div>

  <div
    class={cn(
      [
        'absolute inset-0 -z-[1] h-full w-full rounded-2xl',
        'bg-[radial-gradient(53.51%_100%_at_53.51%_0%,_rgba(250,_250,_255,_0.3)_0%,_rgba(250,_250,_255,_0.1)_100%)]'
      ],
      ['lg:rounded-3xl']
    )}
  />

  <div
    bind:this={gradient}
    class="pointer-events-none absolute inset-0 h-full w-full rounded-2xl transition-[background] duration-300 lg:rounded-3xl"
  />
</div>
