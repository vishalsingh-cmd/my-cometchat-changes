<script lang="ts">
  import { cn } from '$src/lib/utils';
  import { c } from 'svelte-highlight/languages';

  let className: undefined | string = undefined;
  export { className as class };
</script>

<div class={cn(['rounded-lg border border-[#FAFAFF0A] bg-[#FAFAFF0A]', 'p-4'], className)}>
  <div class={cn(['relative flex max-w-[270px] flex-col gap-1.5 pb-10'], ['lg:max-w-[320px]'])}>
    <h3 class="font-sans text-[16px] font-semibold leading-[17px] text-[#FAFAFF]">
      Chat & Messaging
    </h3>
    <p
      class="text-14 font-medium leading-[17px]
     text-[#FAFAFF]/60"
    >
      Lightning-fast conversations with enterprise scalability
    </p>
    <div class={cn(['absolute bottom-0 right-0 h-16 w-16'])}>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <path
            d="M7.97767 42.4169L7.9768 42.4146C7.92908 42.2875 7.86066 42.1186 7.74805 41.8413C6.51315 38.8006 5.83398 35.4773 5.83398 32.0007C5.83398 17.5492 17.5492 5.83398 32.0007 5.83398C46.4521 5.83398 58.1673 17.5492 58.1673 32.0007C58.1673 46.4521 46.4521 58.1673 32.0007 58.1673C28.5241 58.1673 25.2007 57.4882 22.16 56.2533C21.8827 56.1407 21.7138 56.0722 21.5868 56.0245L21.5843 56.0236L21.5474 56.01L21.431 55.967L21.308 55.9834L21.2954 55.9851L21.2943 55.9852C21.1865 55.9998 21.0435 56.0234 20.7906 56.0656L11.2264 57.6596L11.2263 57.6596C10.7923 57.7321 10.3365 57.8078 9.94713 57.8372C9.52397 57.8692 8.89698 57.8757 8.24308 57.5952C7.41777 57.2412 6.7601 56.5836 6.40611 55.7582C6.12564 55.1043 6.13216 54.4774 6.16411 54.0542C6.19349 53.6649 6.2692 53.2091 6.34166 52.7752L6.34169 52.775L7.93575 43.2107C7.9779 42.9579 8.00151 42.8148 8.01612 42.707L8.01627 42.7059L8.01796 42.6932L8.03436 42.5702L7.99128 42.4537L7.97767 42.4169ZM21.334 22.1673C19.5851 22.1673 18.1673 23.5851 18.1673 25.334C18.1673 27.0829 19.5851 28.5007 21.334 28.5007H32.0007C33.7496 28.5007 35.1673 27.0829 35.1673 25.334C35.1673 23.5851 33.7496 22.1673 32.0007 22.1673H21.334ZM21.334 31.5007C19.5851 31.5007 18.1673 32.9184 18.1673 34.6673C18.1673 36.4162 19.5851 37.834 21.334 37.834H40.0007C41.7496 37.834 43.1673 36.4162 43.1673 34.6673C43.1673 32.9184 41.7496 31.5007 40.0007 31.5007H21.334Z"
            stroke="url(#paint0_linear_1202_65857)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1202_65857"
            x1="32.0007"
            y1="5.33398"
            x2="32.0007"
            y2="58.6673"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FAFAFF" />
            <stop offset="0.285" stop-color="#B1B1B4" />
            <stop offset="1" stop-color="#646465" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>
