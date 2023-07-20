<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import type { ISbStoryData } from '@storyblok/js';

  import { string } from '$lib/strings';
  import { formatDate } from '$lib/utils/dates';

  import type { CustomerStoryStoryblok, CustomerStoryblok, IndustryStoryblok } from '$types/bloks';

  import ContentCard from '$components/content-card.svelte';
  import Title from '$components/title.svelte';

  export let block: CustomerStoryStoryblok;
  export let industries: ISbStoryData<IndustryStoryblok>[];

  const parsedItem = (item: StoryblokStory<CustomerStoryblok> | string) => {
    const typedItem = item as StoryblokStory<CustomerStoryblok>;
    const typedCustomer = typedItem.content.customer as StoryblokStory<CustomerStoryblok>;
    const industryId = typedCustomer.content.industry as string;

    const industry = industries.find((industry) => industry.uuid === industryId);

    return {
      title: typedItem.name,
      image: typedItem.content.cover?.filename !== '' ? typedItem.content.cover : undefined,
      tags: industry?.name ? [industry.name] : undefined,
      link: typedItem.full_slug,
      customer: typedCustomer.content,
      author: typedCustomer.name,
      date: formatDate(typedItem.content.date)
    };
  };
</script>

<section class="bg-gray-1 px-container text-gray-12" data-theme="light">
  <Title
    label={{ content: string('customer_stories'), color: 'brand' }}
    title={string('related_stories')}
    class="container mx-auto pl-0 pr-0"
  />
  <div class="container mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-3 md:pb-20">
    {#if block.content.related_items && block.content.related_items.length > 0}
      {#each block.content.related_items as item}
        {@const { title, image, tags, link, customer, author, date } = parsedItem(item)}
        <ContentCard {title} {image} {tags} {link} {customer} {author} {date} />
      {/each}
    {/if}
  </div>
</section>
