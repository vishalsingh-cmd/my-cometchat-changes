<script lang="ts">
  import type { PageStoryblok } from '$types/bloks';
  import Button from '../buttons/button.svelte';
  import { cn } from '$src/_utils/tailwind.utils';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import { onMount } from 'svelte';
  import { hubspotForm } from '$lib/actions/hubspot-form';
  import FormSkeleton from '$components/skeletons/form-skeleton.svelte';

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
    if (!hasModalExpired()) {
      showModal = true;
      document.body.style.overflow = 'hidden';
    }
  });

  function closeModal() {
    localStorage.setItem(MODAL_DISMISS_KEY, Date.now().toString());
    showModal = false;
    document.body.style.overflow = '';
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

  let isLoading = true;
</script>

{#if block}
  {#if showModal}
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      class={cn(
        ['fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'],
        [className]
      )}
    >
      <svelte:element this={as} bind:this={el} on:mousemove={mouseMoveEvent}>
        <div
          class={cn(
            [
              'group relative m-4 max-w-xl p-10 text-center lg:px-20',
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
              class="mx-auto mb-6 flex h-20 items-center justify-center lg:h-[125px] lg:w-[200px]"
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

          {#if block.form && block.form[0]}
            {@const { form_title, api_form_id, api_region, api_portal_id } = block.form[0]}
            <div class="w-full">
              {#if isLoading}
                <FormSkeleton />
              {/if}
              <!-- Hubspot form -->
              <div
                id="hubspot-form"
                use:hubspotForm={{
                  formId: api_form_id,
                  region: api_region ? api_region : undefined,
                  portalId: api_portal_id ? api_portal_id : undefined
                }}
                on:complete={() => {
                  isLoading = false;
                }}
              />
            </div>
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

<style lang="postcss">
  div :global(form) {
    max-width: 100% !important;
    display: flex;
    align-items: flex-start !important;
    flex-direction: column;
    gap: 0px !important;

    & .hs-form-field {
      margin-bottom: 10px !important;
    }

    & .hs-form-field > * {
      margin: 6px 0 !important;
    }

    & fieldset {
      max-width: none !important;
    }

    & .form-columns-1 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    & .form-columns-2 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    & .form-columns-2 .hs-form-field {
      width: 100% !important;
    }

    & .hs_recaptcha .input {
      padding: 0 !important;
      margin-top: 6px !important;
    }

    & .hs_recaptcha {
      margin-bottom: 0px !important;
    }

    & label:not(.hs-error-msg) {
      display: none;
    }

    & .hs-error-msgs {
      margin-top: 16px;
    }

    & .hs-error-msgs label {
      margin-bottom: 0px;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 104%; /* 17.92px */
      letter-spacing: 0.08px;
      opacity: 0.54;
    }

    & .input {
      margin: 0 !important;
      padding: 13px 16px;

      display: flex;
      align-items: center;

      border-radius: 14px;
      border: 1px solid rgba(250, 250, 255, 0.1) !important;
      background: rgba(250, 250, 255, 0.02) !important;
      color: var(--color-gray-12) !important;

      transition: all 0.2s ease-in-out;

      &:hover {
        border-color: hsla(250, 62%, 58%, 0.3);
      }

      &:active {
        border-color: hsla(250, 62%, 58%, 0.6);
      }

      &:focus-within {
        border-color: hsla(250, 62%, 58%, 0.4);

        box-shadow: 0px 0px 0px 4px hsla(250, 62%, 58%, 0.3);
      }

      & input {
        background-color: transparent;

        width: 100%;
        margin-right: 0px;

        outline: none;

        font-size: 16px;
        font-weight: 640;
        line-height: 112%;
        letter-spacing: 0.08px;
        color: var(--color-gray-12) !important;

        &::placeholder {
          opacity: 0.64;
        }
      }
    }

    & .hs-form-field {
      width: 100%;
      max-width: none !important;
      color: var(--color-gray-12) !important;
    }

    & .hs-input {
      width: 100% !important;
      background: #191821;
    }

    & textarea {
      width: 100%;
      height: 140px;
      min-height: 140px;
      resize: none;

      background-color: transparent;

      width: 100%;
      margin-right: 0px;

      outline: none;

      font-size: 16px;
      font-weight: 640;
      line-height: 112%;
      letter-spacing: 0.08px;

      &::placeholder {
        opacity: 0.64;
      }
    }

    & .hs_submit {
      display: flex;
      align-self: center;
      margin-top: 18px !important;
    }

    & .hs-button {
      padding: 12px 16px;

      background-color: hsl(var(--color-brand-9));
      border-radius: 12px;

      font-size: 14px;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.28px;

      color: #fcfcfe;
    }

    & .hs-form-booleancheckbox-display {
      display: grid !important;
      grid-template-columns: auto 1fr;
      align-items: center;

      & .hs-input {
        width: 16px !important;
        height: 16px;
      }
    }
  }
</style>
