<script lang="ts" context="module">
  export const schema = cloneDeep(RichTextSchema);

  // Fix links href to sanitize url
  schema.marks.link = (node) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const { story, uuid, linktype = 'url', ...attrs } = node.attrs;
    attrs.class = 'link';

    if (linktype === 'email') {
      attrs.href = `mailto:${attrs.href}`;
    }

    if (attrs.href && linktype === 'story') {
      if (attrs.href.startsWith('/pages/')) attrs.href = '/' + attrs.href.replace('/pages/', '');
      if (attrs.href.startsWith('pages/')) attrs.href = '/' + attrs.href.replace('pages/', '');
    }

    if (attrs.custom) {
      for (const key in attrs.custom) {
        attrs[key] = attrs.custom[key];
      }
      delete attrs.custom;
    }

    return {
      tag: [{ tag: 'a', attrs: attrs }]
    };
  };

  export const resolver = new RichTextResolver(schema);
</script>

<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { RichTextResolver, RichTextSchema, type ISbRichtext } from '@storyblok/js';

  import { cn } from '$lib/utils';
  import { STORYBLOK_PAGES_PREFIX } from '$lib/constants';
  import cloneDeep from 'clone-deep';

  export let content: ISbRichtext;

  const paragraph = cva([
    'font-normal',
    'text-gray-1 [&_span]:!text-gray-1 ',
    'leading-[1.25]',
    'tracking-[0.09px]',

    '[&_a]:text-[#836aff]',
    '[&_a:hover]:text-brand-10',

    '[&_img]:my-6',
    '[&_img]:md:my-10',
    '[&_img]:rounded-[20px]'
  ]);
</script>

{#if content.content}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <p class={cn(paragraph(), 'text-lg-richtext')}>{@html resolver.render(content)}</p>
{/if}
