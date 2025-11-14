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
      attrs.href = attrs.href.replace(STORYBLOK_PAGES_PREFIX, '');
    }

    if (attrs.anchor) {
      attrs.href = `${attrs.href}#${attrs.anchor}`;
      delete attrs.anchor;
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
  import cloneDeep from 'clone-deep';
  import type { HTMLAttributes } from 'svelte/elements';
  import { RichTextResolver, type ISbRichtext, RichTextSchema } from '@storyblok/js';

  import { STORYBLOK_PAGES_PREFIX } from '$lib/constants';

  import Heading from '$components/rich-text-v2/heading.svelte';
  import Paragraph from '$components/rich-text-v2/paragraph.svelte';
  import CodeBlock from '$components/rich-text-v2/code-block.svelte';
  import UnorderedList from '$components/rich-text-v2/unordered-list.svelte';
  import OrderedList from '$components/rich-text-v2/ordered-list.svelte';
  // import RichTextDynamicBlock from '$components/blocks/rich-text/rich-text-dynamic-block.svelte';
  import RichTextDynamicBlockV2 from '$components/blocks/rich-text-v2/rich-text-dynamic-block.svelte';
  import Media from '$components/media.svelte';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    doc: ISbRichtext;
  };

  export let doc: $$Props['doc'];

  const map = {
    heading: Heading,
    ordered_list: OrderedList,
    bullet_list: UnorderedList,
    paragraph: Paragraph,
    code_block: CodeBlock
  };

  const isBlok = doc.type === 'blok';
  const component = doc.type && doc.type in map ? map[doc.type as keyof typeof map] : null;
  if (doc.content && doc.content[0].type == 'image') {
    doc.content[0].attrs.filename = doc.content[0].attrs.src;
  }
</script>

{#if doc.content && doc.content[0].type == 'image'}
  <Media media={doc.content[0].attrs} enableZoom={true} />
{:else if component}
  <svelte:component this={component} content={doc} {...$$restProps} />
{/if}

{#if isBlok}
  {#each doc.attrs.body as b}
    <RichTextDynamicBlockV2 block={b} />
  {/each}
{/if}
