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
  {#await languages[language]()}
    <div role="status" data-theme="dark" class="animate-pulse space-y-2.5 bg-gray-2 p-5">
      <div class="flex w-full flex-col space-y-2">
        {#each Array(code.split('\n').length) as line}
          {@const lineWidth = Math.min(Math.max(Math.round(Math.random() * 100), 20), 80)}
          <div
            data-theme="dark"
            class="h-2.5 w-[--width] rounded-full bg-gray-12/8"
            style:--width="{lineWidth}%"
          />
        {/each}
      </div>
    </div>
  {:then { default: language }}
    <Highlight {language} {code} let:highlighted>
      <LineNumbers {highlighted} wrapLines />
    </Highlight>
  {/await}
{/if}
