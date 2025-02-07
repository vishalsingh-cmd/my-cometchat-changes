<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import QuoteIcon from '../_icons/QuoteIcon.svelte';
  import QuoteIconBg from '../_icons/QuoteIconBg.svelte';
  import ParahLates from '$src/_comps/typography/ParahLates.svelte';

  interface props {
    profile_img: string;
    brand_img: string;
    name: string;
    designation: string;
    description: string;
  }

  export let content: props;

  let className: undefined | string = undefined;
  export { className as class };
  const tmolsCard = tv({
    base: ['relative p-6 border border-[#FAFAFF1A] rounded-2xl', ' flex flex-col gap-6']
  });
</script>

<div class={tmolsCard({ class: className })}>
  <div class="grid max-h-[120px] grid-cols-[_7fr_3fr] gap-3">
    <div class="flex flex-col justify-between gap-3">
      <div class="max-h-40">
        <img src={content.brand_img} alt="Brand logo" class="object-cover" />
      </div>
      <QuoteIcon />
    </div>
    <div
      class={cn(['relative h-[120px] w-[120px] overflow-hidden rounded-bl-[130px] bg-[#35353E]'])}
    >
      <img src={content.profile_img} alt="profile" class="w-full" />
    </div>
  </div>

  <ParahLates>
    {content.description}
  </ParahLates>
  <div class="flex flex-col gap-2">
    <h4 class={cn([' font-sans text-[16px] font-[640] text-[#FAFAFF]'])}>
      {content.name}
    </h4>
    <p class={cn([' font-sans text-[16px] font-semibold leading-[20px] text-[#FAFAFF]/75'])}>
      {content.designation}
    </p>
  </div>

  <QuoteIconBg class="absolute bottom-6 right-6" />
</div>
