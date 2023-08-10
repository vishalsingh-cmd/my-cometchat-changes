<script lang="ts">
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';
  import { cn } from '$lib/utils';

  import type { TechnologyHeroStoryblok } from '$types/bloks';
  import Button from '$components/buttons/button.svelte';
  import Icon from '$components/icon/icon.svelte';
  import SocialProofs from './social-proofs.svelte';
  import Background from '$components/technology-hero/background.svelte';

  export let block: TechnologyHeroStoryblok;
</script>

{#if block}
  <section class="overflow-hidden" use:storyblokEditable={block}>
    {#if block.title[0]}
      <section
        class="container relative mx-auto flex h-full justify-center px-container pb-20 pt-[103px] md:pt-[148px]"
      >
        <Background />
        <div class={cn('isolate z-10 w-full max-w-[528px]')}>
          {#if block.title[0].label}
            <div class="flex items-center gap-1.5 text-gray-12">
              {#if block.title[0].label_icon}
                <Icon icon={block.title[0].label_icon.toString()} class="flex" size="md" />
              {/if}
              <p class="text-md/tight font-semibold leading-tight opacity-[0.84]">
                {block.title[0].label}
              </p>
            </div>
          {/if}

          {#if block.title[0].title}
            <h1 class="mb-3 mt-3 text-3xl font-semibold leading-tighter md:mb-5">
              {block.title[0].title}
            </h1>
          {/if}
          {#if block.title[0].description}
            <p class="mb-5 text-xl font-medium leading-snug tracking-wide opacity-74 md:mb-8">
              {block.title[0].description}
            </p>
          {/if}
          {#if block.title[0].links && block.title[0].links?.length > 0}
            <div class="'mt-5 flex gap-3 md:mt-8">
              {#each block.title[0].links as link}
                {@const { href, rel, target } = getAnchorFromCmsLink(link.link)}
                <Button variant={link.variant} as="a" {href} {rel} {target}>
                  {link.label}
                </Button>
              {/each}
            </div>
          {/if}
        </div>
      </section>
    {/if}

    {#if block.customers}
      <SocialProofs block={block.customers[0]} />
    {/if}
  </section>
{/if}
