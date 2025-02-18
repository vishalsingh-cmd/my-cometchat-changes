<script lang="ts">
  import { cn } from '$src/_utils/tailwind.utils';
  import Media from '$src/components/media.svelte';
  import { onMount } from 'svelte';
  import TemplatesHeading from '../_comps/TemplatesHeading.svelte';
  import TemplatesParah from '../_comps/TemplatesParah.svelte';
  import { createTemplateContext } from './templateContext';
  import RelatedTemplateSkeleton from './RelatedTemplateSkeleton.svelte';
  import { sanitizeSlug } from '$src/lib/storyblok';

  export let uuid: string;

  const { template, actions } = createTemplateContext(uuid);
  onMount(() => {
    actions.fetchTemplate();
  });

  $: seo = $template.data?.story?.content?.seo[0];
</script>

{#if $template.isLoading}
  <RelatedTemplateSkeleton />
{:else if $template.data && $template.data?.story?.full_slug && seo && seo.title && seo.description && seo.og_image}
  <a
    href={sanitizeSlug($template.data.story.full_slug)}
    target="_blank"
    class={cn(['group/relateCard grid max-w-[341px] grid-rows-[auto_1fr] gap-4'], ['lg:gap-5'])}
  >
    <div class="relative h-auto w-full">
      <Media
        class="h-auto w-full object-cover"
        imageTransformOptions={{ size: [1200, 0] }}
        media={seo.og_image}
      />
      <div
        class={cn([
          'absolute inset-0',
          'flex items-center justify-center',
          'rounded-[14px] bg-[#141414] bg-opacity-20 backdrop-blur-[10px]',
          'transition-all duration-300',
          'opacity-0 group-hover/relateCard:opacity-100'
        ])}
      >
        <button
          class={cn([
            'bg-white font-inter font-[500] text-[#141414]',
            'h-[40px] w-[160px] rounded-[8px]'
          ])}
        >
          View More
        </button>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <TemplatesHeading className="line-clamp-1" tag="h3" size="h4" weight="500">
        {seo.title}
      </TemplatesHeading>
    </div>
  </a>
{/if}
