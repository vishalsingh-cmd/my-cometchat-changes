<script lang="ts">
  export let maus: string[];
  $: console.log('pricing-range-sliderV2', maus);
</script>

<input type="range" min="0" max="100" value="50" />
