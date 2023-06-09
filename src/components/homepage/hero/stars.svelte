<script lang="ts">
  export let amount = 20;
  export let backgroundColours: string[] = [];

  const stars = [...Array(amount).keys()];
</script>

{#each stars as star}
  {@const randomColour = backgroundColours[Math.floor(Math.random() * backgroundColours.length)]}
  {@const randomTop = Math.floor(Math.random() * 600) + 'px'}
  {@const randomLeft = Math.floor(Math.random() * 400) + 'px'}
  {@const randomRight = Math.floor(Math.random() * 400) + 'px'}
  <div
    id={star.toString()}
    class="absolute h-0.5 w-0.5 rounded-full {randomColour}"
    style="top: {randomTop}; left: {randomLeft}"
  />
  <div
    id={star.toString()}
    class="absolute h-0.5 w-0.5 rounded-full {randomColour}"
    style="top: {randomTop}; right: {randomRight}"
  />
{/each}
