<script lang="ts">
  import { tv } from '$src/_utils/tailwind.utils';
  import { cn } from '$src/lib/utils';

  const iconLink = tv({
    base: ['font-sans font-semibold relative', 'group/iconlink', 'flex items-start gap-4']
  });

  let className: undefined | string = undefined;
  export let id = '';
  export let href: string;
  export { className as class };
</script>

<!-- jp note this icon have geradinet transition we can animate that  -->

<a {id} {href} class={iconLink({ class: className })} {...$$restProps}>
  <div
    class={cn([
      'h-10 w-10 rounded-md border border-[#FAFAFF0F]',
      'flex items-center justify-center',
      'transition-all duration-200 group-hover/iconlink:border-[#6852D6]'
    ])}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.29748 7.8658C2.32086 7.28454 1.6665 6.21836 1.6665 4.99935C1.6665 3.1584 3.15889 1.66602 4.99984 1.66602C6.84079 1.66602 8.33317 3.1584 8.33317 4.99935C8.33317 6.16919 7.73054 7.19828 6.81878 7.79312L9.31563 9.06424L17.1217 5.09022C17.5319 4.88142 18.0336 5.04464 18.2424 5.45479C18.4513 5.86494 18.288 6.36669 17.8779 6.5755L11.1525 9.99935L17.8779 13.4232C18.2881 13.632 18.4513 14.1338 18.2425 14.5439C18.0337 14.9541 17.5319 15.1173 17.1218 14.9085L9.31563 10.9345L6.81878 12.2056C7.73054 12.8004 8.33317 13.8295 8.33317 14.9993C8.33317 16.8403 6.84079 18.3327 4.99984 18.3327C3.15889 18.3327 1.6665 16.8403 1.6665 14.9993C1.6665 13.7804 2.32083 12.7142 3.29742 12.1329C3.31969 12.1186 3.34285 12.1051 3.36686 12.0927C3.44742 12.0474 3.53005 12.0053 3.61458 11.9666L7.47881 9.99935L3.61451 8.03207C3.53003 7.99342 3.44745 7.95134 3.36694 7.90601C3.34292 7.89359 3.31976 7.88016 3.29748 7.8658ZM3.33317 4.99935C3.33317 4.07887 4.07936 3.33268 4.99984 3.33268C5.92031 3.33268 6.6665 4.07887 6.6665 4.99935C6.6665 5.91982 5.92031 6.66602 4.99984 6.66602C4.76069 6.66602 4.5333 6.61565 4.32771 6.52494L4.164 6.44159C3.66721 6.15306 3.33317 5.61521 3.33317 4.99935ZM4.16395 13.5571C3.66719 13.8457 3.33317 14.3835 3.33317 14.9993C3.33317 15.9198 4.07936 16.666 4.99984 16.666C5.92031 16.666 6.6665 15.9198 6.6665 14.9993C6.6665 14.0789 5.92031 13.3327 4.99984 13.3327C4.76071 13.3327 4.53334 13.383 4.32776 13.4737L4.16395 13.5571Z"
        fill="url(#paint0_linear_1253_59040)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1253_59040"
          x1="9.99994"
          y1="1.66602"
          x2="9.99994"
          y2="18.3327"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FAFAFF" />
          <stop offset="0.285" stop-color="#B1B1B4" />
          <stop offset="1" stop-color="#646465" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="flex flex-col gap-1.5">
    <h4
      class="font-sans text-[16px] font-semibold leading-[17px] text-[#FAFAFF] transition-colors duration-200 group-hover/iconlink:text-[#6852D6]"
    >
      Chat Moderation
    </h4>
    <p class="text-[14px] font-medium leading-[17px] text-[#FAFAFF]/60">
      AI-powered protection that catches every threat instantly
    </p>
  </div>
</a>
