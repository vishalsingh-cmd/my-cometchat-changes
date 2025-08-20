<script lang="ts">
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
  import type { CoreFeaturesStoryblok } from '$src/types/bloks';
  import Link from '../buttons/link.svelte';

  export let block: CoreFeaturesStoryblok | undefined = undefined;

  let activeImage = block?.features?.[0]?.image?.filename || '';
  let fading = false;

  // Intersection Observer
  function observeFeature(node: HTMLElement, image: string) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fading = true;
          setTimeout(() => {
            activeImage = image;
            fading = false;
          }, 300);
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(node);

    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
</script>

{#if block}
  <Section>
    <Container pyEnabled={false}>
      <div class="relative font-sans text-white">
        <section class="relative mx-auto flex justify-center">
          <div class="relative flex justify-center">
            <!-- LEFT CONTENT -->
            <div class="max-w-[588px]">
              <div
                class="sticky top-0 z-20 mb-6 flex flex-col bg-background-vertical px-0 py-[64px] shadow-lg"
              >
                <div class="text-xl font-medium text-brand-9">{block.title}</div>
                <div class="text-3xl font-semibold leading-tighter text-white">
                  {@html block.subtitle}
                </div>
              </div>

              <!-- Feature Sections -->
              <div class="flex flex-col items-start gap-3 self-stretch">
                {#each block.features ?? [] as feature, index}
                  <div use:observeFeature={feature.image?.filename ?? ''}>
                    <div class="flex max-w-[548px] flex-col items-start gap-4 self-stretch">
                      {#if feature.heading}
                        <h3 class="z-0 text-xl font-semibold leading-tighter text-brand-9">
                          {feature.heading}
                        </h3>
                      {/if}
                      {#if feature.subheading}
                        <p
                          class="text-sans text-2xl font-semibold leading-snug tracking-[0.09px] text-gray-12"
                        >
                          {feature.subheading}
                        </p>
                      {/if}
                      <div class="flex flex-col items-start gap-3 self-stretch">
                        {#if feature.subheading2}
                          <p
                            class="text-sans text-lg font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                          >
                            {feature.subheading2}
                          </p>
                        {/if}
                        {#if feature.description}
                          <p
                            class="text-sans self-stretch font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                          >
                            {feature.description}
                          </p>
                        {/if}
                        {#if feature.listheading}
                          <p
                            class="text-sans text-lg font-medium leading-snug tracking-[0.09px] text-brand-9"
                          >
                            {feature.listheading}
                          </p>
                        {/if}
                      </div>
                      <!-- Items as TextStoryblok -->
                      <ul class="text-base grid list-inside grid-cols-1 gap-[12px] text-gray-11">
                        {#each feature.items ?? [] as item}
                          <li class="font-medium text-gray-12">
                            <div class="flex items-start gap-[8px]">
                              <img
                                src="/agent_lp_images/bullet_icon.png"
                                alt=""
                                class="inline-block"
                              />
                              <div class="leading-snug tracking-[0.09px] opacity-74">
                                {item.value?.content[0].content[0].text}
                              </div>
                            </div>
                          </li>
                        {/each}
                      </ul>
                      {#if feature.link_text}
                        <Link
                          variant="secondary"
                          class={`text-md leading-snug text-brand-9 ${
                            index === (block.features?.length ?? 0) - 1 ? 'mb-[200px]' : ''
                          }`}
                          href={feature.footer?.cached_url?.replace(/^pages\//, '')}
                        >
                          {feature.link_text}
                        </Link>
                      {/if}
                    </div>

                    <img
                      src={feature.image?.filename}
                      alt={feature.image?.alt}
                      class="mt-[32px] flex aspect-square shrink-0 lg:hidden"
                    />

                    {#if index != (block.features?.length ?? 0) - 1}
                      <div class="my-[100px] w-full space-y-[100px] border-b border-gray-5" />
                    {/if}
                  </div>
                {/each}
              </div>
            </div>

            <!-- RIGHT IMAGE -->
            <div class="sticky top-0 hidden h-screen flex-col lg:flex">
              <img
                src={activeImage}
                alt="Agent UI"
                class={`my-auto w-[640px] transition-opacity duration-500 ${
                  fading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>
        </section>
      </div>
    </Container>
  </Section>
{/if}
