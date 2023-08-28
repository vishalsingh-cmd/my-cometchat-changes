<script lang="ts">
  import type { AuthorStoryblok, TutorialStoryblok } from '$types/bloks';

  import { cn } from '$lib/utils';
  import { formatDateUSMedium } from '$lib/utils/dates';

  import Title from '$components/title.svelte';
  import Media from '$components/media.svelte';
  export let block: TutorialStoryblok;

  const author = block.content.author as unknown as AuthorStoryblok;
  const tags = block.content.technology && block.content.technology.join(', ');
</script>

<section
  class={cn('relative bg-gray-1 text-gray-12', block.content.imported_from_old_site && 'h-auto')}
  data-theme="dark"
>
  {#if block.content.imported_from_old_site}
    <div
      class="container mx-auto flex flex-col gap-12 px-container pb-10 pt-[100px] md:pb-20 md:pt-[148px]"
    >
      <div class="flex flex-col gap-3 md:flex-row md:gap-16">
        <h1 class="flex-1 text-3xl font-semibold leading-tighter">{block.name}</h1>
        <div
          class="flex flex-1 flex-col justify-between gap-4 text-xl leading-snug tracking-wide opacity-74"
        >
          <p class="font-medium">{block.content.seo[0].description}</p>
          <div class="flex items-center gap-3">
            {#if author}
              {@const { name } = author.content}
              {@const { created_at } = block.content}
              <p>
                {name}
                {#if created_at}
                  • {formatDateUSMedium(new Date(created_at))}
                {/if}
              </p>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div class="h-full max-h-[656px] overflow-hidden rounded-3xl">
          <Media media={block.content.cover} class="h-full max-h-[656px] w-full object-cover" />
        </div>
      {/if}
    </div>
  {:else}
    <div
      class="container relative mx-auto grid h-full grid-cols-1 gap-8 overflow-hidden px-container pb-10 pt-[100px] md:pb-20 md:pt-[148px] lg:grid-cols-2"
    >
      <!-- Background Blur -->
      <div
        class={cn(
          'h-[250px] w-[250px]',
          'absolute origin-center transform rounded-1/2',
          '-translate-x-1/2 translate-y-1/2',
          'bottom-1/2 left-1/2',
          'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-8/80 from-0% to-[rgba(20,30,202,0.00)]/0 to-100%',
          'opacity-60',
          'blur-[150px]'
        )}
      />

      <div class="z-10 flex flex-col justify-between gap-8">
        <Title
          label={block.content.technology && { content: tags, color: 'brand' }}
          class="pl-0 pr-0 pt-0 lg:p-0"
          title={block.name}
        />
        <div
          class="flex max-w-[528px] flex-col gap-6 text-xl font-medium leading-snug tracking-wide opacity-74"
        >
          <p>{block.content.seo[0].description}</p>
          <div class="flex items-center gap-3">
            {#if author}
              {@const { name } = author.content}
              {@const { created_at } = block.content}
              <p>
                {name}
                {#if created_at}
                  • {formatDateUSMedium(new Date(created_at))}
                {/if}
              </p>
            {/if}
          </div>
        </div>
      </div>
      {#if block.content.cover}
        <div
          class="border-px z-10 h-full max-h-[580px] min-h-[297px] overflow-hidden rounded-3xl border border-gray-12/[0.04]"
        >
          <Media media={block.content.cover} class="h-full w-full object-cover" />
        </div>
      {/if}
    </div>
  {/if}

  <!-- Bottom Gradient -->
  <div
    class="absolute bottom-0 left-0 h-[100px] w-screen bg-gradient-to-t from-gray-1/100 to-gray-1/0"
  />
</section>
