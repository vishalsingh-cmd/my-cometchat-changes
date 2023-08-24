<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';

  import { getLabelInfo } from '$lib/utils';
  import { formatDate } from '$lib/utils/dates';

  import type {
    AuthorStoryblok,
    BlogPostStoryblok,
    CustomerStoryStoryblok,
    CustomerStoryblok,
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

    const tags = () => {
      switch (typedItem.content.component as string) {
        case 'blog-post':
          return [typedItem.content.category];
        case 'tutorial':
          return typedItem.content.technology;
        case 'customer-story':
          return [typedItem.content.industry];
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
  <section
    use:storyblokEditable={block}
    class="bg-gray-1 px-container text-gray-12"
    data-theme="light"
  >
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
    <div class="container relative mx-auto grid grid-cols-1 gap-8 pb-12 md:grid-cols-3 md:pb-20">
      <div
        class="absolute -left-[196px] -top-[86px] h-[408px] w-[408px] rounded-full opacity-20 blur"
      />
      {#if block.items && block.items.length > 0}
        {#each block.items as item}
          {@const { title, image, tags, link, customer, author, date } = parsedItem(item)}
          <ContentCard
            {title}
            {image}
            {tags}
            {link}
            {customer}
            {author}
            {date}
            badgeSize="medium"
          />
        {/each}
      {/if}
    </div>
  </section>
{/if}

<style>
  .blur {
    background: linear-gradient(290deg, #fcb8a8 0%, #b968a4 48.44%, #756cf6 100%);
    filter: blur(150px);
  }
</style>
