<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { industries } from '$lib/stores/industries';

  import type {
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    CustomerStoryblok,
    IndustryStoryblok,
    RelatedStoriesSectionStoryblok
  } from '$types/bloks';

  import ContentCard from '$components/content-card.svelte';
  import Title from '$components/title.svelte';

  import { formatDate } from '$lib/utils/dates';

  export let block: RelatedStoriesSectionStoryblok;

  const parsedItem = (
    item: StoryblokStory<CustomerStoryStoryblok> | StoryblokStory<BlogPostStoryblok> | string
  ) => {
    const typedItem = item as StoryblokStory<CustomerStoryStoryblok>;
    const typedCustomer = typedItem.content.customer as StoryblokStory<CustomerStoryblok>;
    const industryId = typedCustomer.content.industry as string;

    const industry = $industries.find(
      (industry: IndustryStoryblok) => industry.uuid === industryId
    ) as unknown as IndustryStoryblok;

    return {
      title: typedItem.name,
      image: typedItem.content.cover?.filename !== '' ? typedItem.content.cover : undefined,
      tags: industry?.content.short_name ? [industry.content.short_name] : undefined,
      link: typedItem.full_slug,
      customer: typedCustomer.content,
      author: typedCustomer.name,
      date: formatDate(typedItem.content.date)
    };
  };
</script>

{#if block}
  <section class="bg-gray-1 px-container text-gray-12" data-theme="light">
    {#if block.header && block.header.length > 0}
      {@const header = block.header[0]}
      <Title
        label={{ content: header.label, color: 'brand' }}
        title={header.title}
        class="container mx-auto pl-0 pr-0"
      />
    {/if}
    <div class="container mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-3 md:pb-20">
      {#if block.items && block.items.length > 0}
        {#each block.items as item}
          {@const { title, image, tags, link, customer, author, date } = parsedItem(item)}
          <ContentCard {title} {image} {tags} {link} {customer} {author} {date} />
        {/each}
      {/if}
    </div>
  </section>
{/if}
