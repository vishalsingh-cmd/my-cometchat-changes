<script lang="ts">
  import type { HeroFormStoryblok } from '$types/bloks';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { hubspotForm } from '$lib/actions/hubspot-form';

  import Background from '$components/hero-form//background.svelte';
  import FormSkeleton from '$components/skeletons/form-skeleton.svelte';

  export let block: HeroFormStoryblok;
  let isLoading = true;
</script>

{#if block}
  <section use:storyblokEditable={block} class="relative overflow-hidden">
    <div
      class="relative mx-auto flex max-w-content flex-col gap-8 px-container pb-20 pt-[100px] lg:flex-row lg:gap-20 lg:pt-[132px]"
    >
      <div class="z-20 flex flex-col gap-3 lg:gap-5 lg:pl-[80px] lg:pt-14">
        {#if block.title}
          <h1 class="max-w-[528px] text-3xl font-semibold leading-tighter text-gray-12">
            {block.title}
          </h1>
        {/if}
        {#if block.description}
          <p
            class="max-w-[528px] text-xl font-medium leading-snug tracking-wide text-gray-12 opacity-[0.74]"
          >
            {block.description}
          </p>
        {/if}
      </div>

      {#if block.form && block.form[0]}
        {@const { form_title, api_form_id, api_region, api_portal_id } = block.form[0]}
        <div
          class="relative z-20 w-full rounded-3xl border border-gray-12/[0.04] bg-gray-12/8 p-5 backdrop-blur-[50px] lg:w-[528px] lg:p-8"
        >
          <h2 class="mb-[18px] text-2xl/tighter font-semibold text-gray-12 lg:mb-[26px]">
            {form_title}
          </h2>

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

      <Background />
    </div>

    <!-- Bottom Gradient -->
    <div
      class="absolute bottom-0 left-0 z-10 h-[100px] w-full bg-gradient-to-t from-gray-1/100 to-transparent lg:h-[400px]"
    />
  </section>
{/if}

<style lang="postcss">
  section :global(form) {
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

    & label {
      display: block !important;
      font-size: 16px;
      font-style: normal;
      font-weight: 640;
      line-height: 112%; /* 17.92px */
      letter-spacing: 0.08px;
      opacity: 0.74;
      color: var(--color-gray-12) !important;
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

    & .hs-email {
      width: 100%;
      max-width: none !important;
      color: var(--color-gray-12) !important;
    }

    & .hs-input {
      width: 100% !important;
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
      align-self: flex-start;
      margin-top: 24px !important;
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
  }
</style>
