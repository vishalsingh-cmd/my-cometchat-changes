<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';

  export let illustration = '';
  export let title = '';
  export let description = '';
  export let link = { label: '', href: '' };
</script>

<div class="w-full max-w-[640px]">
  <img class="mb-6 md:mb-12" src={illustration} alt={title} />
  <div class="max-w-[416px] font-sans text-xl text-gray-12">
    <p class="mb-1 font-semibold leading-tighter md:mb-2">{title}</p>
    <p class="mb-3 font-normal leading-snug tracking-wide opacity-74">{description}</p>
    <GhostButton as="a" href={link.href} variant="highlighted">{link.label}</GhostButton>
  </div>
</div>
