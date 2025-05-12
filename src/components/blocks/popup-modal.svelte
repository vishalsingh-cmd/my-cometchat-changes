<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import Button from '../buttons/button.svelte';
  import GhostButton from '../buttons/ghost-button.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import { onMount } from 'svelte';
  import Link from '../buttons/link.svelte';

  export let block: PageStoryblok;
  export let className = '';
  export let as: string = 'div';

  let showModal: boolean = false;

  const MODAL_DISMISS_KEY = 'demo_modal_dismissed_at';
  const EXPIRY_IN_DAYS = 14;

  function hasModalExpired(): boolean {
    const dismissedAt = localStorage.getItem(MODAL_DISMISS_KEY);
    if (!dismissedAt) return false;

    const expiryTime = new Date(parseInt(dismissedAt));
    expiryTime.setDate(expiryTime.getDate() + EXPIRY_IN_DAYS);

    return new Date() < expiryTime;
  }

  onMount(() => {
    showModal = !hasModalExpired();
  });

  function closeModal() {
    localStorage.setItem(MODAL_DISMISS_KEY, Date.now().toString());
    showModal = false;
  }

  let position = { x: 0, y: 0 };
  let el: HTMLDivElement;
  function mouseMoveEvent(e: MouseEvent) {
    const rect = el.getBoundingClientRect();
    position = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }
</script>

{#if block}
  {#if showModal}
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      class={cn(
        ['fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'],
        [className]
      )}
    >
      <svelte:element this={as} bind:this={el} on:mousemove={mouseMoveEvent}>
        <div
          class={cn(
            [
              'group relative m-4 max-w-xl p-10 text-center',
              'rounded-xl border border-[#2B2B34] bg-[#14131D]',
              'shadow-lg shadow-brand-4',
              'hover:border-[#3F337A]',
              'transition-colors duration-300'
            ],
            [className]
          )}
        >
          {#if block.Image}
            <div
              class="mx-auto mb-6 flex h-20 items-center justify-center lg:h-[172px] lg:w-[275px]"
            >
              <img src={block.Image} alt="Comet Chat" class="h-full" />
            </div>
          {/if}
          {#if block.title}
            <h2 class={cn(['mb-2 text-xl', 'lg:text-[22px]'], [className])}>
              {block.title}
            </h2>
          {/if}

          {#if block.cta}
            <p
              class={cn(
                ['mb-6 text-sm text-[#FAFAFF] lg:mb-8', 'tracking-wide lg:text-[18px]'],
                [className]
              )}
            >
              {block.brief}
            </p>
          {/if}

          {#if block.cta}
            <div class="space-y-5">
              {#each block.cta as button}
                {@const { href, target, rel } = getAnchorFromCmsLink(button.link)}
                <Button variant={button.variant} as="a" {href} {rel} on:click={closeModal}>
                  {button.label}
                </Button>
              {/each}
              {#if block.cta}
                <button
                  class="text-gray-400 w-full text-sm underline hover:text-white"
                  on:click={closeModal}
                >
                  {block.close_text}
                </button>
              {/if}
            </div>
          {/if}

          <div
            class="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={`background: radial-gradient(100px circle at ${position.x}px ${position.y}px, hsl(var(--color-brand-7) / 0.3), hsl(var(--color-brand-7) / 0))`}
          />
        </div>
      </svelte:element>
    </div>
  {/if}
{/if}
