<script lang="ts">
  import { string } from '$lib/strings';

  import type { CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import ContentCard from '$components/content-card.svelte';
  import Title from '$components/title.svelte';
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { ISbStoryData } from '@storyblok/js';

  export let block: CustomerStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const parsedItem = (item: StoryblokStory<CustomerStoryblok> | string) => {
    const typedItem = item as StoryblokStory<CustomerStoryblok>;
    const typedCustomer = typedItem.content.customer as StoryblokStory<CustomerStoryblok>;
    const industryId = typedCustomer.content.industry as string;

    const industry = industries.find((industry) => industry.uuid === industryId);

    return {
      title: typedItem.name,
      image: typedItem.content.cover?.filename !== '' ? typedItem.content.cover : undefined,
      tag: industry?.name,
      link: typedItem.full_slug
    };
  };
</script>

<section class="bg-gray-1 px-container text-gray-12" data-theme="light">
  <Title
    label={{ content: string('customer_stories'), color: 'brand' }}
    title={string('related_stories')}
    class="pl-0 pr-0"
  />
  <div class="container mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-3 md:pb-20">
    {#if block.content.related_items && block.content.related_items.length > 0}
      {#each block.content.related_items as item}
        {@const { title, image, tag, link } = parsedItem(item)}
        <ContentCard {title} {image} {tag} {link} />
      {/each}
    {/if}
  </div>
</section>
