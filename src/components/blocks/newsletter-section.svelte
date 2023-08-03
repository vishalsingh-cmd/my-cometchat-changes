<script lang="ts">
  import { onMount } from 'svelte';

  import type { NewsletterSectionStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';

  import Background from '$components/newsletter-section/background.svelte';

  export let block: NewsletterSectionStoryblok;

  function loadHubSpotForm() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = '//js.hsforms.net/forms/embed/v2.js';

      script.onload = resolve;
      script.onerror = reject;

      document.body.appendChild(script);
    });
  }

  onMount(async () => {
    try {
      await loadHubSpotForm();
      // Create the HubSpot form
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '8969037',
        formId: '891daf5d-708d-434b-9800-9d93c809cd06',
        target: '#hubspot-form'
      });
    } catch (error) {
      console.error('Error loading HubSpot form:', error);
    }
  });
</script>

{#if block}
  <section
    data-theme="light"
    class={cn(
      'bg-gray-1 py-5 text-gray-12  md:py-6',
      block.is_highlight && 'pb-10 md:pb-20 md:pt-8'
    )}
  >
    <div class="container mx-auto px-container">
      <div
        class={cn(
          'relative flex flex-col gap-3 overflow-hidden rounded-[32px] border border-gray-12/[0.04] bg-gray-12/[0.03] p-5 px-container backdrop-blur-[20px] md:gap-5 md:p-8',
          block.is_highlight && 'gap-5 md:gap-8 md:p-12'
        )}
      >
        <Background />
        <div class="isoalte">
          {#if block.is_highlight && block.label !== ''}
            <p
              data-theme="dark"
              class="mb-2 text-xl font-semibold leading-tighter text-brand-9 md:mb-3"
            >
              {block.label}
            </p>
          {/if}
          <p
            data-theme={block.is_highlight ? 'dark' : 'light'}
            class={cn(
              'max-w-[528px] text-2xl font-semibold leading-tighter text-gray-12',
              block.is_highlight && 'text-3xl text-gray-1 '
            )}
          >
            {block.title}
          </p>
        </div>
        <div class="isolate" id="hubspot-form" />
      </div>
    </div>
  </section>
{/if}

<style lang="postcss">
  :global(form) {
    max-width: 450px;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 12px;

    & label {
      display: none;
    }

    & .hs-email {
      max-width: 340px;
      width: 100%;

      & .input {
        padding: 0px 16px;

        height: 44px;

        display: flex;
        align-items: cente;

        background-color: hsla(246, 21%, 9%, 0.02);
        border-radius: 14px;
        border: 1px solid hsla(246, 21%, 9%, 0.1);

        & input {
          background-color: transparent;

          width: 100%;

          outline: none;

          font-size: 16px;
          font-weight: 640;
          line-height: 112%;
          letter-spacing: 0.08px;

          color: #14131d;

          &::placeholder {
            opacity: 0.64;
          }
        }
      }
    }

    & .hs-button {
      padding: 12px 16px;

      background-color: #6852d6;
      border-radius: 12px;

      font-size: 14px;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 0.28px;

      color: #fcfcfe;
    }
  }
</style>
