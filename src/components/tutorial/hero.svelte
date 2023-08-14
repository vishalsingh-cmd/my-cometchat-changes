<script lang="ts">
  import type { AuthorStoryblok, TutorialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';

  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';

  export let block: TutorialStoryblok;

  const author = block.content.author as unknown as AuthorStoryblok;
</script>

<section
  class={cn(
    'h-[743px] bg-gray-1 pt-[100px] text-gray-12 md:pb-20 md:pt-[148px]',
    block.content.is_old_post && 'h-auto'
  )}
  data-theme="dark"
>
  {#if block.content.is_old_post}
    <div class="container mx-auto flex flex-col gap-12 px-container pb-8 md:pb-0">
      <div class="flex flex-col gap-3 md:flex-row md:gap-16">
        <h1 class="flex-1 text-3xl font-semibold leading-tighter">{block.name}</h1>
        <div class="flex flex-1 flex-col gap-4 text-xl leading-snug tracking-wide">
          <p class="font-medium opacity-74">{block.content.seo[0].description}</p>
          <div class="flex items-center gap-3">
            {#if author}
              {@const { name } = author}
              <p>
                {name}
              </p>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div class="h-full max-h-[175px] overflow-hidden rounded-3xl object-cover md:max-h-[656px]">
          <Media media={block.content.cover} class="h-full w-full object-cover" />
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="container mx-auto grid h-full grid-cols-1 gap-8 px-container pb-8 md:grid-cols-2 md:pb-0"
    >
      <div class="flex flex-col justify-between">
        <Title
          label={{ content: block.content.technology, color: 'brand' }}
          class="pl-0 pr-0 pt-0 lg:p-0"
          title={block.name}
        />
        <div
          class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide"
        >
          <p class="opacity-74">{block.content.seo[0].description}</p>
          <div class="flex items-center gap-3">
            {#if author}
              {@const { avatar, name, role, company } = author.content}
              <Media media={avatar} class="h-6 w-6 rounded-full" />
              <p>
                {name},
                {#if role}
                  {role},
                {/if}
                {company}
              </p>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div
          class="border-px h-full max-h-[580px] overflow-hidden rounded-3xl border border-gray-12/[0.04] object-cover"
        >
          <Media media={block.content.cover} class="h-full w-full object-cover" />
        </div>
      {/if}
    </div>
  {/if}
</section>
