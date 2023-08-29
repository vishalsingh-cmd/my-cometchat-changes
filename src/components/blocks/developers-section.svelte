<script lang="ts">
  import CodeBlock from '$components/code-block/code-block.svelte';
  import Comet from '$components/code-block/assets/comet.svg';

  import Media from '$components/media.svelte';
  import Stars from '$components/stars.svelte';
  import Title from '$components/title.svelte';

  import { cn } from '$lib/utils';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import { getLabelInfo } from '$lib/utils';
  import { getImageAttributes } from '$lib/storyblok';

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
  <section use:storyblokEditable={block} class="relative overflow-hidden">
    <div class="relative mx-auto max-w-content">
      <img
        src={Comet}
        alt=""
        class="absolute -bottom-[60px] right-[-117px] h-[400px] w-[400px] lg:-bottom-[20px]"
      />

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
          <CodeBlock
            class="h-[500px] w-full self-start"
            snippets={parsedCodeBlocks}
            on:languageSelect={onLanguageSelect}
            {selectedLanguageIndex}
          />
          {#if parsedCodeBlocks[selectedLanguageIndex].image}
            {@const { width, height } = getImageAttributes(
              parsedCodeBlocks[selectedLanguageIndex].image
            )}
            {@const widthNumber = Number(width)}
            {@const heightNumber = Number(height)}
            <div
              class="mb-12 mt-5 h-[300px] overflow-hidden rounded-3xl border border-solid border-gray-5 bg-gray-2/60 backdrop-blur-[100px] md:h-[500px] md:max-h-[500px] lg:mb-0 lg:mt-0"
            >
              <Media
                imageTransformOptions={{ size: [1000, 0] }}
                media={parsedCodeBlocks[selectedLanguageIndex].image}
                class={cn(
                  widthNumber > heightNumber &&
                    'ml-8 mt-8 h-[350px] max-h-none max-w-max md:ml-12 md:mt-12  md:h-[500px]',
                  widthNumber < heightNumber &&
                    'mx-auto mt-8 max-h-max w-[220px] max-w-none md:mt-12 md:w-[300px]'
                )}
              />
            </div>
          {/if}
        </div>
      {/if}
    </div>

    <!-- Bottom Gradient -->
    <div
      class="absolute bottom-0 left-0 h-[50px] w-screen bg-gradient-to-t from-gray-1/100 to-gray-1/0 lg:h-[100px]"
    />
  </section>
{/if}
