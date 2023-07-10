<script lang="ts">
  export let amount = 40;
  export let backgroundColours: string[] = [];

  const stars = [...Array(amount).keys()].map(() => {
    return {
      colour: backgroundColours[Math.floor(Math.random() * backgroundColours.length)],
      vertical: Math.floor(Math.random() * 600) + 'px',
      horizontal: Math.floor(Math.random() * 400) + 'px'
    };
  });
</script>

{#each stars as star, i}
  <div
    class="absolute h-0.5 w-0.5 rounded-full {star.colour}"
    style={`top: ${star.vertical}; ${
      i % 2 === 0 ? 'left:' + star.horizontal : 'right:' + star.horizontal
    }`}
  />
{/each}
