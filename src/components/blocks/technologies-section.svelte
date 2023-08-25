<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import Blur from '$components/technologies/assets/blur.svg';
  import Icon from '$components/icon/icon.svelte';
  import Link from '$components/buttons/link.svelte';
  import Title from '$components/title.svelte';

  import { cn, getLabelInfo } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getAnchorFromCmsLink } from '$lib/storyblok';

  import type { TechnologiesSectionStoryblok, TechnologyStoryblok } from '$types/bloks';

  export let block: TechnologiesSectionStoryblok;

  const technologies = (block.technologies as StoryblokStory<TechnologyStoryblok>[]).map(
    (technology) => {
      const documentationInfo = technology.content.documentation_link[0];

      return {
        label: documentationInfo.label,
        link: getAnchorFromCmsLink(documentationInfo.link),
        icon: documentationInfo.icon as string
      };
    }
  );
</script>

{#if block}
  <section
    data-theme="light"
    class="relative overflow-hidden bg-gray-1 px-container pb-8"
    use:storyblokEditable={block}
  >
    <img
      alt=""
      src={Blur}
      class="absolute right-[-90px] top-[-24px] h-[245px] w-[245px] md:right-[-106px] md:top-[-95px] md:h-[447px] md:w-[447px]"
    />
    <div class="mx-auto max-w-content">
      {#if block.header && block.header.length > 0}
        {@const { label, title, links } = block.header[0]}
        {@const labelInfo = getLabelInfo(label, 'brand')}
        <Title alignment="center" class="pl-0 pr-0" label={labelInfo} {title} buttons={links} />
      {/if}
      <div
        class="relative grid grid-cols-2 gap-px before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-[#DCDCE0] before:to-[#FAFAFF00] before:to-80% md:grid-cols-4 md:grid-rows-[104px_88px_104px]"
      >
        {#each technologies as technology, i}
          {@const { href, target, rel } = technology.link}
          <div class={cn('isolate z-10 bg-gray-1 text-gray-12/[0.84]')}>
            <Link
              {href}
              {target}
              {rel}
              class={cn(
                'inline-flex h-full w-full flex-row items-center gap-1.5 p-5 md:px-8',
                (i === 0 || i === 4 || i === 8) && 'md:pl-12',
                (i === 3 || i === 7 || i === 11) && 'md:pr-12'
              )}
            >
              <Icon icon={technology.icon} class="flex" />
              {technology.label}
            </Link>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
