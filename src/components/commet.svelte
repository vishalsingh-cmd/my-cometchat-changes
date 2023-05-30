<script lang="ts">
  import { cva } from 'class-variance-authority';
  import { twMerge } from 'tailwind-merge';

  const spinner = cva(
    `
    relative

  animate-spin
    w-5
    h-5
    `
  );

  let className: undefined | string = undefined;
  export { className as class };
</script>

<div
  aria-label="loading"
  role="progressbar"
  class={twMerge(spinner(), 'body', className)}
  {...$$restProps}
/>
<div class="sun animate-spin">
  <div class="dot bg-[#ffffff]" />
</div>

<style>
  .body {
    background: conic-gradient(rgba(255, 255, 255, 0) 80%, white);
    clip-path: circle(50%);
    mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0) 9px, black 9px);
  }

  .body:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    opacity: 0.14;
  }

  .dot {
    position: absolute;
    top: -0.5px;
    left: 9px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }

  .dot:before {
    content: '';
    position: absolute;
    top: -3.5px;
    left: -3.5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
    opacity: 0.5;
    filter: blur(4px);
  }

  .sun {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
</style>
