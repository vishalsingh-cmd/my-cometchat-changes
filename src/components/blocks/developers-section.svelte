<script lang="ts">
  import CodeBlock from '$components/code-block/code-block.svelte';
  import Comet from '$components/code-block/assets/comet.svg';

  import Media from '$components/media.svelte';
  import Stars from '$components/stars.svelte';
  import Title from '$components/title.svelte';

  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';

  import type { DevelopersSectionStoryblok } from '$types/bloks';

  export let block: DevelopersSectionStoryblok;

  const parsedCodeBlocks =
    block.code_blocks && block.code_blocks.length > 0
      ? block.code_blocks.map((codeBlock) => {
          return {
            code: codeBlock.code_snippet_to_show,
            codeToCopy: codeBlock.code_snippet_to_copy,
            language: codeBlock.code_snippet_language,
            label: codeBlock.language_name,
            image: codeBlock.illustration
          };
        })
      : undefined;

  const onLanguageSelect = (e: CustomEvent) => {
    selectedLanguageIndex = e.detail.i;
  };

  let selectedLanguageIndex = 0;
</script>

{#if block}
  <section use:storyblokEditable={block} class="overflow-x-clip">
    <div class="relative mx-auto max-w-content">
      <div
        class="absolute right-[-100px] top-[400px] w-full max-w-[365px] rotate-[115.13deg] transform"
      >
        <Stars amount={20} backgroundColours={['bg-gray-10']} />
      </div>
      <div class="absolute left-0 top-[45px] h-[268px] w-full overflow-hidden">
        <Stars amount={40} backgroundColours={['bg-brand-9', 'bg-orange-8', 'bg-brand-7']} />
      </div>
      {#if block.header && block.header[0]}
        {@const labelInfo = getLabelInfo(block.header[0].label, 'orange')}
        <Title
          label={labelInfo}
          title={block.header[0].title}
          description={block.header[0].description}
          buttons={block.header[0].links}
        />
      {/if}
      {#if parsedCodeBlocks && parsedCodeBlocks.length > 0}
        <div
          class="relative flex flex-col px-container md:pt-8 lg:grid lg:grid-cols-[minmax(100px,752px)_528px] lg:gap-8 lg:pb-[100px]"
        >
          <img
            src={Comet}
            alt=""
            class="absolute bottom-[-230px] right-[-117px] h-[651px] w-[651px] lg:top-[60px]"
          />

          <CodeBlock
            class="h-[500px] w-full self-start"
            snippets={parsedCodeBlocks}
            on:languageSelect={onLanguageSelect}
            {selectedLanguageIndex}
          />
          {#if parsedCodeBlocks[selectedLanguageIndex].image}
            <div
              class="mb-12 mt-5 flex h-[500px] w-full justify-center overflow-hidden rounded-3xl border border-solid border-gray-5 bg-gray-2/60 backdrop-blur-[100px] lg:mb-0 lg:mt-0"
              style="transform: translate3d(0, 0, 0);"
            >
              <Media
                media={parsedCodeBlocks[selectedLanguageIndex].image}
                class="mt-8 h-[500px] px-12 md:mt-12"
              />
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </section>
{/if}
