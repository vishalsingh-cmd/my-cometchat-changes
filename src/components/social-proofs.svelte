<script lang="ts">
  import { getImageAttributes } from '$lib/storyblok';
  import type { CustomerStoryblok, SocialProofsStoryblok } from '$types/bloks';
  import { storyblokEditable } from '$lib/actions/storyblok-editable';
  import type { StoryblokStory } from 'storyblok-generate-ts';

  export let block: SocialProofsStoryblok;
  const customers = block.customers as StoryblokStory<CustomerStoryblok>[];
</script>

{#if block}
  <section
    data-theme="dark"
    use:storyblokEditable={block}
    class="flex flex-col items-center justify-center gap-8 bg-gray-1 pb-20 pt-16"
  >
    <h1 class="text-lg tracking-wide text-gray-12 opacity-54">{block.title}</h1>
    {#if customers}
      <div class="no-scrollbar flex gap-10 self-center overflow-x-scroll px-8 opacity-50">
        {#each customers as customer}
          <img alt="" src={getImageAttributes(customer.content.logo).src} class="max-h-6" />
        {/each}
      </div>
    {/if}
  </section>
{/if}

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
</style>
