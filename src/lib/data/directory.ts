import type { BlogPostStoryblok, CustomerStoryStoryblok, TutorialStoryblok } from '$types/bloks';

import { formatDate } from '$lib/utils/dates';

export const RESULTS_PER_PAGE = 12;

export type Panel = {
  type:
    | 'category'
    | 'tutorial_type'
    | 'industries'
    | 'integration_tool'
    | 'products'
    | 'platforms'
    | 'features'
    | 'languages'
    | 'frameworks';
  title: string;
  tags: { name: string; value: string }[];
  selectedTags: string[];
};

export const parseItem = (
  item: CustomerStoryStoryblok | BlogPostStoryblok | TutorialStoryblok,
  content_type: 'customer-story' | 'blog-post' | 'tutorial'
) => {
  const getTags = () => {
    switch (content_type) {
      case 'customer-story':
        return [item.content.industry];
      case 'blog-post':
        return [item.content.category];
      case 'tutorial': {
        const tags = [];

        if (item.content.industries) {
          tags.push(...item.content.industries);
        }

        if (item.content.tutorial_type) {
          tags.push(item.content.tutorial_type);
        }

        if (item.content.integration_tool) {
          tags.push(item.content.integration_tool);
        }

        if (item.content.product) {
          tags.push(...item.content.product);
        }

        if (item.content.platform) {
          tags.push(...item.content.platform);
        }

        if (item.content.features) {
          tags.push(...item.content.features);
        }

        if (item.content.language) {
          tags.push(...item.content.language);
        }

        if (item.content.framework) {
          tags.push(...item.content.framework);
        }

        return tags;
      }
    }
  };

  return {
    image:
      item.content.cover !== undefined && item.content.cover.filename !== ''
        ? item.content.cover
        : undefined,
    title: item.name,
    tags: getTags(),
    link: item.full_slug as string,
    customer: content_type === 'customer-story' ? item.content.customer.content : undefined,
    author: item.content.author ? item.content.author.name : '',
    date: formatDate(item.created_at ? new Date(item.created_at) : new Date())
  };
};

export const cleanFilters = (panels: Panel[]) => {
  const cleanPanels = panels.map((panel) => {
    panel.selectedTags = [];

    return {
      ...panel,
      selectedTags: []
    };
  });

  return cleanPanels;
};

export const getPanel = (panels: Panel[], type: string) => {
  return panels.filter((panel) => {
    return panel.type === type;
  })[0];
};
