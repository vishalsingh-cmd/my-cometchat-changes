<script lang="ts">
  import Blur from '$components/technologies/assets/blur.svg';
  import Icon from '$components/icon/icon.svelte';
  import Link from '$components/buttons/link.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { sanitizeSlug } from '$lib/storyblok';
  import { cn } from '$lib/utils';
  import type { TechnologiesSectionStoryblok, TechnologyStoryblok } from '$types/bloks';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  export let block: TechnologiesSectionStoryblok;

  const links = block.header[0].links
    ? block.header[0].links.map((link) => ({
        label: link.label,
        link: sanitizeSlug(link.link?.cached_url)
      }))
    : undefined;

  const technologies = (block.technologies as StoryblokStory<TechnologyStoryblok>[]).map(
    (technology) => {
      const documentationInfo = technology.content.documentation_link[0];

      return {
        label: documentationInfo.label,
        link: sanitizeSlug(documentationInfo.link.cached_url),
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
      <Title
        alignment="center"
        label={{ content: block.header[0].label, color: 'brand' }}
        title={block.header[0].title}
        buttons={links}
      />
      <div
        class="relative grid grid-cols-2 grid-rows-3 gap-px before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-[#DCDCE0] before:to-[#FAFAFF00] before:to-80% md:grid-cols-4"
      >
        {#each technologies as technology, i}
          <div
            class={cn(
              'isolate z-10 flex flex-row items-center gap-1.5 bg-gray-1 p-5 text-gray-10 md:p-8',
              i < 4 && 'md:pt-12',
              i > 7 && 'md:pb-12',
              (i === 0 || i === 4 || i === 8) && 'md:pl-12',
              (i === 3 || i === 7 || i === 11) && 'md:pr-12'
            )}
          >
            <Icon icon={technology.icon} class="flex" />
            <Link href={technology.link}>{technology.label}</Link>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
