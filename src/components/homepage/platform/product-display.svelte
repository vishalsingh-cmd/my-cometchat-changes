<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import Media from '$components/media.svelte';
  import type { MultilinkStoryblok, AssetStoryblok } from '$types/bloks';

  export let illustration: AssetStoryblok;
  export let title = '';
  export let description = '';
  export let link: MultilinkStoryblok;
</script>

<div class="w-full max-w-[640px]">
  <div class="mb-6 h-full w-full md:mb-12">
    <Media media={illustration} />
  </div>
  <div class="max-w-[416px] font-sans text-xl text-gray-12">
    <h3 class="mb-1 font-semibold leading-tighter md:mb-2">{title}</h3>
    <p class="mb-3 font-medium leading-snug tracking-wide opacity-74">{description}</p>
    <GhostButton as="a" href={link.href} target={link.target} rel={link.rel} variant="highlighted">
      {link.label}
    </GhostButton>
  </div>
</div>
