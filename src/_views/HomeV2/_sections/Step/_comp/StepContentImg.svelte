<script lang="ts">
  let Content;
  export { Content as img };
  let className: undefined | string = undefined;
  export { className as class };
</script>

<div class={className}>
  <img src={Content.src} alt={Content.alt} />
</div>
