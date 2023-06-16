<script lang="ts">
  import type { StoryblokStory } from 'storyblok-generate-ts';

  import CodeBlock from '$components/code-block/code-block.svelte';
  import Comet from '$components/code-block/assets/comet.svg';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { DevelopersSectionStoryblok, TechnologyStoryblok } from '$types/bloks';
  import { getImageAttributes } from '$lib/storyblok';

  export let block: DevelopersSectionStoryblok;

  const parsedCodeBlocks = (block.code_blocks as StoryblokStory<TechnologyStoryblok>[])
    .filter(
      (codeBlock) =>
        codeBlock.content.code_snippet &&
        codeBlock.content.short_name &&
        codeBlock.content.copy_code_snippet &&
        codeBlock.content.code_snippet_language
    )
    .map((codeBlock) => {
      return {
        code: codeBlock.content.code_snippet as string,
        codeToCopy: codeBlock.content.copy_code_snippet as string,
        language: codeBlock.content.code_snippet_language as string,
        label: codeBlock.content.short_name as string,
        image: codeBlock.content.screenshot
      };
    });

  const onLanguageSelect = (e: CustomEvent) => {
    selectedLanguageIndex = e.detail.i;
  };

  let selectedLanguageIndex = 0;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-hidden">
    <div class="mx-auto max-w-content">
      {#if block.header[0]}
        <Title
          label={{ content: block.header[0].label, color: 'orange' }}
          title={block.header[0].title}
          description={block.header[0].description}
          buttons={block.header[0].links}
        />
      {/if}
      {#if parsedCodeBlocks.length > 0}
        <div
          class="relative flex flex-col px-container pt-8 lg:grid lg:grid-cols-[minmax(100px,752px)_528px] lg:gap-8 lg:pb-[100px]"
        >
          <img
            src={Comet}
            alt=""
            class="absolute bottom-[-230px] right-[-117px] h-[651px] w-[651px] lg:top-[200px]"
          />
          <CodeBlock
            class="-ml-5 w-screen self-start md:ml-0 md:w-full"
            snippets={parsedCodeBlocks}
            on:languageSelect={onLanguageSelect}
            {selectedLanguageIndex}
          />
          {#if parsedCodeBlocks[selectedLanguageIndex].image}
            {@const { src, alt, width, height } = getImageAttributes(
              parsedCodeBlocks[selectedLanguageIndex].image,
              { size: [1000, 0] }
            )}
            <div
              class="mb-12 mt-5 flex h-[480px] w-full justify-center rounded-3xl border border-solid border-gray-5 bg-gray-2/60 backdrop-blur-[100px] lg:mb-0 lg:mt-0"
            >
              <img {src} {alt} {width} {height} class="mt-12" />
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </section>
{/if}
