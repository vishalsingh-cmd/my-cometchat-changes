import {
  getAnchorFromCmsLink,
  getAnchorFromCmsStory,
  sanitizeSlug,
  type Storyblok
} from '$lib/storyblok';
import type { FooterStoryblok, TechnologyStoryblok } from '$types/bloks';
import type { StoryblokLinks } from '$types/cms';
import type { ISbStoryData } from '@storyblok/js';

export const getFooter = async (
  storyblok: Storyblok,
  { version }: { version: 'published' | 'draft' }
) => {
  const res = await storyblok.get('cdn/stories/configuration/footer', {
    version,
    resolve_relations: [
      'footer.subfooter',
      'footer-manual-link-group.links',
      'footer-technology-documentation-link-group.links'
    ]
  });
  const footer = res.data.story as ISbStoryData<FooterStoryblok>;

  const columns = await Promise.all(
    footer.content.columns.map(async (column) => {
      return {
        title: column.title,
        groups: await Promise.all(
          column.groups.map(async (group) => {
            // technologies documentation links (multi-option select)
            if (group.component === 'footer-technology-documentation-link-group') {
              const links = group.links as ISbStoryData<TechnologyStoryblok>[];
              return {
                title: group.title,
                links: links.map((link) => {
                  const documentationLink = link.content.documentation_link[0];
                  return {
                    label: documentationLink.label,
                    ...getAnchorFromCmsLink(documentationLink.link)
                  };
                })
              };
            }

            // automatic folder links
            if (group.component === 'footer-folder-link-group') {
              const res = await storyblok.get('cdn/links', {
                version,
                starts_with: group.folder_path
              });
              const links = res.data.links as StoryblokLinks;

              return {
                title: group.title,
                links: Object.values(links).map((link) => ({
                  label: link.name,
                  href: sanitizeSlug(link.slug),
                  target: undefined,
                  rel: undefined
                }))
              };
            }

            // manual links
            return {
              title: group.title,
              links: group.links.map((link) => {
                return {
                  label: link.name,
                  ...getAnchorFromCmsStory(link)
                };
              })
            };
          })
        )
      };
    })
  );

  return {
    prefooter: {
      title: footer.content.prefooter_title,
      description: footer.content.prefooter_description,
      buttons: footer.content.prefooter_cta
    },
    socials: footer.content.socials.map((social) => ({
      label: social.label,
      icon: social.icon,
      ...getAnchorFromCmsLink(social.link)
    })),
    subfooter: footer.content.subfooter.map((subfooter) => ({
      label: subfooter.name,
      ...getAnchorFromCmsStory(subfooter)
    })),
    columns
  };
};

export type Footer = Awaited<ReturnType<typeof getFooter>>;
