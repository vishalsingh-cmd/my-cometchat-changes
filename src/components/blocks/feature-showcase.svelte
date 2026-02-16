<script lang="ts">
  import type { FeatureShowcaseStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import Section from '$src/_comps/layouts/Section.svelte';
  import Container from '$src/_comps/layouts/Container.svelte';
  // import Icon from '$components/icon/icon.svelte';

  import { onMount } from 'svelte';
  import { getImageSrc } from '$lib/image-helper';

  export let block: FeatureShowcaseStoryblok;
  let cardRefs: HTMLDivElement[] = [];
  let pendingScrollIndex: number | null = null;

  let selectedIndex = -1;
  const updateSelectedIndex = () => {
    selectedIndex = window.innerWidth < 1024 ? -1 : 0;
  };

  onMount(() => {
    updateSelectedIndex();
    window.addEventListener('resize', updateSelectedIndex);

    return () => window.removeEventListener('resize', updateSelectedIndex);
  });
  let openMobileIndex: number | null = 0;

  function selectFeature(index: number) {
    selectedIndex = index;
  }
  function toggleMobileFeature(index: number) {
    // If clicking the same card, just close it
    if (openMobileIndex === index) {
      openMobileIndex = null;
      return;
    }

    // We are switching cards
    pendingScrollIndex = index;
    openMobileIndex = index;
  }

  $: selectedFeature = block.features?.[selectedIndex];
</script>

{#if block}
  <Section>
    <Container>
      <!-- Mobile View (Accordion) -->
      <div class="flex flex-col gap-4 lg:hidden" use:storyblokEditable={block}>
        {#each block.features ?? [] as feature, index}
          <div
            bind:this={cardRefs[index]}
            class={`${
              openMobileIndex === index ? 'cardSelected' : 'card'
            } rounded-2xl border border-gray-12/10`}
          >
            <!-- Feature Title Button -->
            <button
              on:click={() => toggleMobileFeature(index)}
              class={`group relative flex w-full items-start gap-3 px-3 py-4 text-left transition-all duration-300 ${
                openMobileIndex === index ? 'border-brand-9' : ''
              }`}
            >
              <!-- Icon -->
              <div class="relative flex h-[20px] flex-shrink-0 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="15"
                  viewBox="0 0 27 20"
                  fill="currentColor"
                  class={`mt-1 transition-colors duration-300 ${
                    openMobileIndex === index ? 'text-brand-9' : 'text-gray-12/40'
                  }`}
                >
                  <path
                    d="M4.43066 2.95392C4.43066 3.36176 4.76128 3.69238 5.16913 3.69238H7.38459C7.79243 3.69238 8.12305 4.023 8.12305 4.43084V6.6463C8.12305 7.05415 8.45367 7.38477 8.86151 7.38477H11.077C11.4848 7.38477 11.8154 7.71539 11.8154 8.12323V11.077C11.8154 11.4848 11.4848 11.8154 11.077 11.8154H8.86151C8.45367 11.8154 8.12305 12.1461 8.12305 12.5539V14.7694C8.12305 15.1772 7.79243 15.5078 7.38459 15.5078H5.16913C4.76128 15.5078 4.43066 15.8384 4.43066 16.2463V18.4617C4.43066 18.8696 4.10004 19.2002 3.6922 19.2002H0.738462C0.33062 19.2002 0 18.8696 0 18.4617V15.508C0 15.1002 0.33062 14.7695 0.738462 14.7695H2.95392C3.36176 14.7695 3.69238 14.4389 3.69238 14.0311V11.8156C3.69238 11.4078 4.023 11.0771 4.43084 11.0771H6.6463C7.05415 11.0771 7.38477 10.7465 7.38477 10.3387V8.86151C7.38477 8.45367 7.05415 8.12305 6.6463 8.12305H4.43084C4.023 8.12305 3.69238 7.79243 3.69238 7.38459V5.16913C3.69238 4.76128 3.36176 4.43066 2.95392 4.43066H0.738462C0.33062 4.43066 0 4.10004 0 3.6922V0.738462C0 0.33062 0.33062 0 0.738462 0H3.6922C4.10004 0 4.43066 0.33062 4.43066 0.738462V2.95392Z"
                  />
                  <path
                    d="M19.2002 2.95392C19.2002 3.36176 19.5308 3.69238 19.9387 3.69238H22.1541C22.562 3.69238 22.8926 4.023 22.8926 4.43084V6.6463C22.8926 7.05415 23.2232 7.38477 23.631 7.38477H25.8465C26.2543 7.38477 26.585 7.71539 26.585 8.12323V11.077C26.585 11.4848 26.2543 11.8154 25.8465 11.8154H23.631C23.2232 11.8154 22.8926 12.1461 22.8926 12.5539V14.7694C22.8926 15.1772 22.562 15.5078 22.1541 15.5078H19.9387C19.5308 15.5078 19.2002 15.8384 19.2002 16.2463V18.4617C19.2002 18.8696 18.8696 19.2002 18.4617 19.2002H15.508C15.1002 19.2002 14.7695 18.8696 14.7695 18.4617V15.508C14.7695 15.1002 15.1002 14.7695 15.508 14.7695H17.7235C18.1313 14.7695 18.4619 14.4389 18.4619 14.0311V11.8156C18.4619 11.4078 18.7925 11.0771 19.2004 11.0771H21.4158C21.8237 11.0771 22.1543 10.7465 22.1543 10.3387V8.86151C22.1543 8.45367 21.8237 8.12305 21.4158 8.12305H19.2004C18.7925 8.12305 18.4619 7.79243 18.4619 7.38459V5.16913C18.4619 4.76128 18.1313 4.43066 17.7235 4.43066H15.508C15.1002 4.43066 14.7695 4.10004 14.7695 3.6922V0.738462C14.7695 0.33062 15.1002 0 15.508 0H18.4617C18.8696 0 19.2002 0.33062 19.2002 0.738462V2.95392Z"
                  />
                </svg>
              </div>

              <!-- Title -->
              <div class="flex-1">
                <p
                  class={`text-base leading-relaxed transition-colors duration-300 ${
                    openMobileIndex === index
                      ? 'font-semibold text-brand-9'
                      : 'font-medium text-gray-12 opacity-60'
                  }`}
                >
                  {feature.title}
                </p>
              </div>

              <!-- Chevron indicator -->
              <!-- <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class={`transition-transform duration-300 ${
                    openMobileIndex === index ? 'rotate-180' : ''
                  } ${openMobileIndex === index ? 'text-brand-9' : 'text-gray-12/40'}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div> -->
            </button>

            <!-- Expandable Content -->
            <div
              class="accordion-content"
              class:open={openMobileIndex === index}
              on:transitionend={() => {
                if (openMobileIndex === index && pendingScrollIndex === index) {
                  cardRefs[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                  pendingScrollIndex = null;
                }
              }}
            >
              <div class="overflow-hidden">
                <div class="accordion-inner px-3 pb-4">
                  <!-- Image -->
                  {#if feature.mobileImage}
                    <div class="relative mb-4 mt-2 overflow-hidden rounded-lg">
                      <img
                        src={getImageSrc(feature, 'mobileImage')}
                        alt={feature.title}
                        class="h-full w-full object-cover"
                      />
                    </div>
                  {/if}

                  <!-- Description -->
                  {#if feature.description}
                    <p class="leading-relaxed text-md tracking-[0.09px] text-gray-12 opacity-74">
                      {feature.description}
                    </p>
                  {/if}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Desktop View (Side-by-side) -->
      <div class="hidden lg:grid lg:grid-cols-2 lg:gap-4" use:storyblokEditable={block}>
        <!-- Content Display - positioned based on text_first -->
        <div
          class={`relative flex flex-col gap-6 ${block.text_first ? 'lg:order-2' : 'lg:order-1'}`}
        >
          {#if selectedFeature}
            <!-- Image -->
            {#key selectedIndex}
              <div class="relative overflow-hidden rounded-lg">
                <img
                  src={getImageSrc(selectedFeature, 'image')}
                  alt={selectedFeature.title}
                  class="h-full w-full object-cover lg:min-h-[464px]"
                />
              </div>
            {/key}

            <!-- Description -->
            {#if selectedFeature.description}
              <div
                class="animate-in fade-in slide-in-from-bottom-2 duration-500"
                style="animation-delay: 100ms;"
              >
                <p
                  class="leading-relaxed text-center text-lg font-semibold leading-tight text-gray-12 opacity-74"
                >
                  {selectedFeature.description}
                </p>
              </div>
            {/if}
          {/if}
        </div>

        <!-- Feature List -->
        <div
          class={`relative flex flex-col gap-4 ${
            block.text_first ? 'lg:order-1' : 'lg:order-2 lg:items-end'
          }`}
        >
          <div class="relative flex flex-col gap-8">
            <div class="absolute left-0 top-0 z-[1] h-full w-[1px] bg-gray-12/10" />
            {#each block.features ?? [] as feature, index}
              <button
                on:click={() => selectFeature(index)}
                class={`group relative flex h-[40px] items-center gap-4 border-l text-left transition-all duration-300 ${
                  selectedIndex === index ? 'border-brand-9' : 'border-transparent'
                } px-4`}
              >
                {#if selectedIndex === index}
                  <div
                    class="pointer-events-none absolute left-0 h-full w-[60px] bg-gradient-to-l from-[#6852D600] to-[#6852D633]"
                  />
                {/if}

                <!-- Icon -->
                <div class="relative flex h-[40px] flex-shrink-0 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="20"
                    viewBox="0 0 27 20"
                    fill="currentColor"
                    class={`transition-colors duration-300 ${
                      selectedIndex === index ? 'text-brand-9' : 'text-gray-12/40'
                    }`}
                  >
                    <path
                      d="M4.43066 2.95392C4.43066 3.36176 4.76128 3.69238 5.16913 3.69238H7.38459C7.79243 3.69238 8.12305 4.023 8.12305 4.43084V6.6463C8.12305 7.05415 8.45367 7.38477 8.86151 7.38477H11.077C11.4848 7.38477 11.8154 7.71539 11.8154 8.12323V11.077C11.8154 11.4848 11.4848 11.8154 11.077 11.8154H8.86151C8.45367 11.8154 8.12305 12.1461 8.12305 12.5539V14.7694C8.12305 15.1772 7.79243 15.5078 7.38459 15.5078H5.16913C4.76128 15.5078 4.43066 15.8384 4.43066 16.2463V18.4617C4.43066 18.8696 4.10004 19.2002 3.6922 19.2002H0.738462C0.33062 19.2002 0 18.8696 0 18.4617V15.508C0 15.1002 0.33062 14.7695 0.738462 14.7695H2.95392C3.36176 14.7695 3.69238 14.4389 3.69238 14.0311V11.8156C3.69238 11.4078 4.023 11.0771 4.43084 11.0771H6.6463C7.05415 11.0771 7.38477 10.7465 7.38477 10.3387V8.86151C7.38477 8.45367 7.05415 8.12305 6.6463 8.12305H4.43084C4.023 8.12305 3.69238 7.79243 3.69238 7.38459V5.16913C3.69238 4.76128 3.36176 4.43066 2.95392 4.43066H0.738462C0.33062 4.43066 0 4.10004 0 3.6922V0.738462C0 0.33062 0.33062 0 0.738462 0H3.6922C4.10004 0 4.43066 0.33062 4.43066 0.738462V2.95392Z"
                    />
                    <path
                      d="M19.2002 2.95392C19.2002 3.36176 19.5308 3.69238 19.9387 3.69238H22.1541C22.562 3.69238 22.8926 4.023 22.8926 4.43084V6.6463C22.8926 7.05415 23.2232 7.38477 23.631 7.38477H25.8465C26.2543 7.38477 26.585 7.71539 26.585 8.12323V11.077C26.585 11.4848 26.2543 11.8154 25.8465 11.8154H23.631C23.2232 11.8154 22.8926 12.1461 22.8926 12.5539V14.7694C22.8926 15.1772 22.562 15.5078 22.1541 15.5078H19.9387C19.5308 15.5078 19.2002 15.8384 19.2002 16.2463V18.4617C19.2002 18.8696 18.8696 19.2002 18.4617 19.2002H15.508C15.1002 19.2002 14.7695 18.8696 14.7695 18.4617V15.508C14.7695 15.1002 15.1002 14.7695 15.508 14.7695H17.7235C18.1313 14.7695 18.4619 14.4389 18.4619 14.0311V11.8156C18.4619 11.4078 18.7925 11.0771 19.2004 11.0771H21.4158C21.8237 11.0771 22.1543 10.7465 22.1543 10.3387V8.86151C22.1543 8.45367 21.8237 8.12305 21.4158 8.12305H19.2004C18.7925 8.12305 18.4619 7.79243 18.4619 7.38459V5.16913C18.4619 4.76128 18.1313 4.43066 17.7235 4.43066H15.508C15.1002 4.43066 14.7695 4.10004 14.7695 3.6922V0.738462C14.7695 0.33062 15.1002 0 15.508 0H18.4617C18.8696 0 19.2002 0.33062 19.2002 0.738462V2.95392Z"
                    />
                  </svg>
                </div>

                <!-- Title -->
                <div class="flex-1">
                  <p
                    class={`leading-relaxed text-[22px] transition-colors duration-300 ${
                      selectedIndex === index
                        ? 'font-[600] text-brand-9'
                        : 'font-[640] text-gray-12 opacity-40 group-hover:text-gray-12'
                    }`}
                  >
                    {feature.title}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        </div>
      </div>
    </Container>
  </Section>
{/if}

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in-from-bottom {
    from {
      transform: translateY(16px);
    }
    to {
      transform: translateY(0);
    }
  }

  .animate-in {
    animation: fade-in 0.5s ease-out, slide-in-from-bottom 0.5s ease-out;
  }

  .card {
    border-radius: 16px;
    border: 1px solid rgba(250, 250, 255, 0.3);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .cardSelected {
    border-radius: 16px;
    border: 1px solid rgba(250, 250, 255, 0.3);
    background: linear-gradient(180deg, rgba(104, 82, 214, 0.1) 0%, rgba(10, 9, 20, 0) 100%);
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .accordion-content.open {
    grid-template-rows: 1fr;
  }

  .accordion-inner {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
      transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .accordion-content.open .accordion-inner {
    opacity: 1;
    transform: translateY(0);
  }
</style>
