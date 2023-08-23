import type { BlogPostStoryblok, CustomerStoryStoryblok, TutorialStoryblok } from '$types/bloks';

import { formatDate } from '$lib/utils/dates';

export const RESULTS_PER_PAGE = 12;

export type Panel = {
  type:
    | 'category'
    | 'technology'
    | 'tutorial_type'
    | 'industries'
    | 'integration_tool'
    | 'industry';
  title: string;
  tags: string[];
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
      case 'tutorial':
        return [
          item.content.tutorial_type,
          ...item.content.technology,
          item.content.integration_tool,
          ...item.content.industries
        ];
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
    date: formatDate(new Date(item.created_at))
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
