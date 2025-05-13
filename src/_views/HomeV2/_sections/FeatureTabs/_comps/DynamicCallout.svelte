<script>
  import { tv } from '$src/_utils/tailwind.utils';
  export let text = '';
  export let icon = '';
  export let className = '';
  export let visible = false;

  let show = false;
  let el;
  let wrapperEl;
  let timeout;

  $: if (visible) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (wrapperEl) {
        const fullWidth = 600;
        wrapperEl.style.maxWidth = fullWidth + 'px';
      }
      show = true;
    }, 1000);
  } else {
    clearTimeout(timeout);
    show = false;
    if (wrapperEl) {
      wrapperEl.style.width = '52px';
    }
  }

  const DynamicCallout = tv({
    slots: {
      base: [
        'animate-show-callout absolute bottom-[100px] left-0 right-0 m-auto flex items-center justify-center transition-all duration-500 ease-out '
      ],
      wrapper: [
        'border-brand-8/40 z-10 flex items-center rounded-xl border p-2 shadow transition-all duration-500 ease-out backdrop-blur-sm',
        'bg-gradient-to-b from-[#13141D] to-[#0b0a15]',
        'max-w-[52px] max-h-[52px]'
      ],
      title: [
        'font-sans text-[14px] md:text-[16px] font-semibold leading-[17px] text-[#FAFAFF] w-0 md:whitespace-nowrap',
        'animate-text transform-gpu transition-all duration-500 ease-out'
      ],
      iconWrap: [
        'flex items-center justify-center border-brand-9/40 border rounded-sm w-[40px] h-[40px] rounded-[8px] md:rounded-[10px] p-2'
      ]
    }
  });

  const { base, wrapper, iconWrap, title } = DynamicCallout();
</script>

<div class="relative m-auto w-[95%] md:w-full" bind:this={el}>
  {#if visible}
    <div class={base({ class: className })}>
      <div bind:this={wrapperEl} class={wrapper({ class: className })}>
        {#if icon}
          <div class={iconWrap({ class: className })}>
            <img src={icon} alt="icon" />
          </div>
        {/if}
        <!-- {#if show} -->
        <div class={title({ class: className })} class:px-5={show} class:w-full={show}>
          {text}
        </div>
        <!-- {/if} -->
        <div
          class="absolute bottom-[100px] left-0 right-0 top-1/2 m-auto h-full w-full -translate-x-1/2 -translate-y-1/2 animate-ping rounded-xl"
        />
      </div>
    </div>
  {/if}
</div>

<style>
  .animate-show-callout {
    animation: showBox 1s cubic-bezier(0, 0, 0.2, 1);
  }
  @keyframes showBox {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    70% {
      opacity: 1;
      transform: scale(1.3);
    }
    80% {
      opacity: 1;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-text {
    opacity: 0;
    animation: textAnimate 0.5s cubic-bezier(0, 0, 0.2, 1) forwards;
    animation-delay: 1500ms;
  }
  @keyframes textAnimate {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  .animate-ping {
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1);
    background: #6852d6;
    opacity: 0;
  }

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%,
    100% {
      transform: scale(1.7);
      opacity: 0;
    }
  }
</style>
