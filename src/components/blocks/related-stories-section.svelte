<script lang="ts">
  import type { ISbStoryData } from '@storyblok/js';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import { industries } from '$lib/stores/industries';

  import { getLabelInfo } from '$lib/utils';
  import { formatDate } from '$lib/utils/dates';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    CustomerStoryblok,
    IndustryStoryblok,
    RelatedStoriesSectionStoryblok,
    TutorialStoryblok
  } from '$types/bloks';

  import ContentCard from '$components/content-card.svelte';
  import Title from '$components/title.svelte';

  export let block: RelatedStoriesSectionStoryblok;

  const parsedItem = (
    item:
      | StoryblokStory<CustomerStoryStoryblok>
      | StoryblokStory<BlogPostStoryblok>
      | StoryblokStory<TutorialStoryblok>
      | string
  ) => {
    const typedItem = item as StoryblokStory<CustomerStoryStoryblok>;
    const typedCustomer = typedItem.content.customer
      ? (typedItem.content.customer as StoryblokStory<CustomerStoryblok>)
      : undefined;
    const industryId = typedCustomer ? (typedCustomer.content.industry as string) : '';

    const industry = $industries.find(
      (industry: ISbStoryData<IndustryStoryblok>) => industry.uuid === industryId
    ) as unknown as IndustryStoryblok;

    const tags = () => {
      switch (typedItem.content.component as string) {
        case 'blog-post':
          return [typedItem.content.category];
        case 'tutorial':
          return typedItem.content.technology;
        case 'customer-story':
          return [industry.content.short_name];
        default:
          return undefined;
      }
    };

    return {
      title: typedItem.name,
      image: typedItem.content.cover?.filename !== '' ? typedItem.content.cover : undefined,
      tags: tags(),
      link: typedItem.full_slug,
      customer: typedCustomer ? typedCustomer.content.name : undefined,
      author: typedItem.content.author
        ? (typedItem.content.author as StoryblokStory<AuthorStoryblok>).name
        : undefined,
      date: formatDate(typedItem.content.date)
    };
  };
</script>

{#if block}
  <section class="bg-gray-1 px-container text-gray-12" data-theme="light">
    {#if block.header && block.header.length > 0}
      {@const { label, title, description, links } = block.header[0]}
      {@const labelInfo = getLabelInfo(label, 'brand')}
      {@const titleAlignment = block.title_alignment === 'center' ? 'center' : 'left'}
      <Title
        label={labelInfo}
        {title}
        {description}
        buttons={links}
        class="container mx-auto pl-0 pr-0"
        alignment={titleAlignment}
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
