<script lang="ts">
  import { createEventDispatcher, afterUpdate } from 'svelte';
  import clsx from 'clsx';
  import Prism from 'prismjs';

  import 'prism-svelte';
  import 'prismjs/plugins/line-highlight/prism-line-highlight';
  import 'prismjs/plugins/line-numbers/prism-line-numbers';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-elixir';
  import 'prismjs/components/prism-bash';

  import { cn } from '$lib/utils';

  import GhostButton from '../buttons/ghost-button.svelte';

  import Icon from '../icon/icon.svelte';

  const dispatch = createEventDispatcher();

  let className: string | undefined = undefined;
  export { className as class };

  export let snippets: { code: string; codeToCopy: string; language: string; label: string }[];

  export let lineNumbers = true;
  export let lineNumbersStartAt = 1;
  export let lineHighlight: string | undefined = undefined;
  export let selectedLanguageIndex = 0;

  let el: HTMLPreElement;

  afterUpdate(() => {
    Prism.highlightAllUnder(el);
  });
</script>

<!-- eslint-disable svelte/no-at-html-tags -->

<div
  data-theme="dark"
  class={cn('rounded-3xl border border-solid border-gray-5 bg-gray-1 lg:bg-gray-2/60', className)}
>
  <div class="flex overflow-x-auto shadow-[inset_0_-1px_0_0] shadow-gray-5">
    {#each snippets as { label }, i}
      <button
        on:click={() => {
          dispatch('languageSelect', {
            i: i
          });
        }}
        class={cn(
          'relative flex h-[50px] items-center px-5 text-md font-semibold',
          i === selectedLanguageIndex ? 'text-gray-12' : 'text-gray-12/60',
          'border-b border-solid hover:text-gray-12/100',
          i === selectedLanguageIndex
            ? 'border-brand-9 hover:border-solid'
            : 'border-gray-5 hover:border-solid',
          i === selectedLanguageIndex ? 'border-solid border-brand-9' : 'border-solid border-gray-5'
        )}
      >
        {label}
      </button>
    {/each}
  </div>
  {#each snippets as snippet, i}
    {#if i === selectedLanguageIndex}
      {@const { code, language } = snippet}
      <pre
        tabindex="-1"
        bind:this={el}
        data-line={lineHighlight}
        class={clsx({ 'line-numbers': lineNumbers }, className)}
        data-start={lineNumbersStartAt}
        {...$$restProps}>
  <code class="language-{language}"
          >{@html Prism.highlight(code, Prism.languages[language], language)}</code
        >
</pre>
    {/if}
  {/each}
  <div class="border-t border-gray-5 p-5">
    <GhostButton
      on:click={() => navigator.clipboard.writeText(snippets[selectedLanguageIndex].codeToCopy)}
    >
      Copy code
      <Icon icon="copy-01" size="sm" />
    </GhostButton>
  </div>
</div>

<style lang="postcss">
  /* Generated with http://k88hudson.github.io/syntax-highlighting-theme-generator/www */
  pre,
  code {
    --codeblock-padding: 16px;
    --codeblock-color: hsla(240, 100%, 99%, 1);
    --codeblock-color-variable: hsla(223, 100%, 73%, 1);
    --codeblock-color-function: hsla(20, 100%, 78%, 1);
    --codeblock-color-keyword: hsla(20, 100%, 78%, 1);
    --codeblock-color-operator: hsl(48deg 80% 95% / 0.9);
    --codeblock-color-string: hsla(223, 100%, 73%, 1)l
    --codeblock-color-property: hsla(223, 100%, 73%, 1);
    --codeblock-color-punctuation: hsl(48deg 80% 95% / 0.5);
    --codeblock-color-comment: hsla(223, 100%, 73%, 1);
    --codeblock-color-line-number: hsla(240, 2%, 57%, 1);

    font-family: theme('fontFamily.mono');
    font-size: theme('fontSize.sm');
    line-height: theme('lineHeight.normal');
    text-shadow: none;

    color: var(--codeblock-color);

    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    tab-size: 4;
    hyphens: none;
  }

  @media (--md) {
    pre {
      --codeblock-padding: 24px;
    }
  }

  @media (--lg) {
    pre {
      --codeblock-padding: 32px;
    }
  }

  pre {
    padding: var(--codeblock-padding);
    overflow: auto;
  }

  /* tokens */
  pre :global(.namespace) {
    opacity: 0.7;
  }

  pre :global(.token.comment),
  pre :global(.token.prolog),
  pre :global(.token.doctype),
  pre :global(.token.cdata) {
    color: var(--codeblock-color-comment);
  }

  pre :global(.token.punctuation) {
    color: var(--codeblock-color-punctuation);
  }

  pre :global(.token.property),
  pre :global(.token.tag),
  pre :global(.token.boolean),
  pre :global(.token.number),
  pre :global(.token.constant),
  pre :global(.token.symbol),
  pre :global(.token.deleted) {
    color: var(--codeblock-color-property);
  }

  pre :global(.token.selector),
  pre :global(.token.attr-name),
  pre :global(.token.string),
  pre :global(.token.char),
  pre :global(.token.builtin),
  pre :global(.token.inserted) {
    color: var(--codeblock-color-string);
  }

  pre :global(.token.operator),
  pre :global(.token.entity),
  pre :global(.token.url),
  pre :global(.language-css .token.string),
  pre :global(.style .token.string) {
    color: var(--codeblock-color-operator);
    background: transparent;
  }

  pre :global(.token.atrule),
  pre :global(.token.attr-value),
  pre :global(.token.keyword) {
    color: var(--codeblock-color-keyword);
  }

  pre :global(.token.function) {
    color: var(--codeblock-color-function);
  }

  pre :global(.token.regex),
  pre :global(.token.important),
  pre :global(.token.variable) {
    color: var(--codeblock-color-variable);
  }

  pre :global(.token.important),
  pre :global(.token.bold) {
    font-weight: bold;
  }

  pre :global(.token.italic) {
    font-style: italic;
  }

  pre :global(.token.entity) {
    cursor: help;
  }

  /* Line numbers */
  pre.line-numbers {
    --codeblock-numbers-width: 3em;
    --codeblock-numbers-padding: 0.8em;
    --codeblock-numbers-width-padding: calc(
      var(--codeblock-numbers-width) + var(--codeblock-numbers-padding)
    );

    position: relative;
    padding-left: var(--codeblock-numbers-width-padding);
    counter-reset: linenumber;
  }

  pre.line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  pre.line-numbers :global(.line-numbers-rows) {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: calc(var(--codeblock-numbers-width-padding) * -1);
    width: var(--codeblock-numbers-width);
    letter-spacing: -1px;

    user-select: none;
  }

  pre.line-numbers :global(.line-numbers-rows > span) {
    display: block;
    counter-increment: linenumber;
  }

  pre.line-numbers :global(.line-numbers-rows > span:before) {
    color: var(--codeblock-color-line-number);
    content: counter(linenumber);
    display: block;
    padding-right: var(--codeblock-numbers-padding);
    text-align: right;
  }

  /* Line highlight */
  pre[data-line] {
    position: relative;
  }

  pre[data-line] code {
    z-index: 1;
  }

  pre[data-line] :global(.line-highlight) {
    margin-top: var(--codeblock-padding);

    position: absolute;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: inset 4px 0 0 rgba(255, 255, 255, 0.2);
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }
</style>
