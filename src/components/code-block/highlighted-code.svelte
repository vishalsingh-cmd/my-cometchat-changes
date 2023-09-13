<script lang="ts">
  import { Highlight, LineNumbers } from 'svelte-highlight';

  export let language: string;
  export let code: string;
  import './code.css';

  const languages = {
    javascript: () => import('svelte-highlight/languages/javascript'),
    typescript: () => import('svelte-highlight/languages/typescript'),
    swift: () => import('svelte-highlight/languages/swift'),
    java: () => import('svelte-highlight/languages/java'),
    kotlin: () => import('svelte-highlight/languages/kotlin'),
    php: () => import('svelte-highlight/languages/php'),
    dart: () => import('svelte-highlight/languages/dart'),
    ruby: () => import('svelte-highlight/languages/ruby')
  } as const;

  function isValidLanguage(language: string): language is keyof typeof languages {
    return Object.keys(languages).includes(language);
  }
</script>

{#if isValidLanguage(language)}
  {#await languages[language]() then { default: language }}
    <Highlight {language} {code} let:highlighted>
      <LineNumbers {highlighted} wrapLines />
    </Highlight>
  {/await}
{/if}
