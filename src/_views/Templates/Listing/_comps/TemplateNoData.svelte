<script lang="ts">
  import { cn, tv } from '$src/_utils/tailwind.utils';
  import TemplateButtons from '../../_comps/TemplateButtons.svelte';
  import zomoto from '../_assets/zomato.svg';
  import practo from '../_assets/practo.svg';
  import whatsapp from '../_assets/whatsapp.svg';
  import slack from '../_assets/slack.svg';
  import linkedin from '../_assets/linkedin.svg';
  import airbnb from '../_assets/airbnb.svg';
  import etsy from '../_assets/etsy.svg';

  const brand = tv({
    base: ['absolute -z-1 w-10 h-10 object-contain', 'lg:w-16 lg:h-16']
  });
</script>

<div class="relative flex flex-col items-center justify-center py-10 text-center lg:py-20">
  <h2 class={cn(['font-inter text-[24px] font-medium text-[#141414]'])}>No Template chat found</h2>
  <p class={cn(['font-inter text-[16px] font-normal text-[#727272]'])}>
    Try these popular searches instead
  </p>
  <div class=" mx-auto mt-8 flex max-w-[375px] flex-wrap items-center justify-center gap-2">
    <TemplateButtons as="a" href="/" variant="chip" iconSide="left" icon="search-sm">
      WhatsApp
    </TemplateButtons>
    <TemplateButtons as="a" href="/" variant="chip" iconSide="left" icon="search-sm">
      Airbnb
    </TemplateButtons>
    <TemplateButtons as="a" href="/" variant="chip" iconSide="left" icon="search-sm">
      Tinder
    </TemplateButtons>
    <TemplateButtons as="a" href="/" variant="chip" iconSide="left" icon="search-sm">
      Slack
    </TemplateButtons>
    <TemplateButtons as="a" href="/" variant="chip" iconSide="left" icon="search-sm">
      Practo
    </TemplateButtons>
  </div>

  <img
    src={zomoto}
    alt="zomoto app logo"
    class={brand({ class: cn(['left-[20%] top-2.5'], ['lg:-top-2.5']) })}
  />
  <img
    src={practo}
    alt="practo app logo"
    class={brand({ class: cn(['-left-4 top-[20%]'], ['lg:left-4']) })}
  />
  <img
    src={whatsapp}
    alt="whatsapp app logo"
    class={brand({ class: cn(['bottom-[15%] left-[4%]'], ['lg:left-[12%]']) })}
  />
  <img
    src={slack}
    alt="slack app logo"
    class={brand({ class: cn(['bottom-0 left-[40%]'], ['lg:left-[30%]']) })}
  />
  <img
    src={etsy}
    alt="etsy app logo"
    class={brand({ class: cn(['-right-4 top-[36%]'], ['lg:right-[10%]']) })}
  />
  <img
    src={linkedin}
    alt="linkedin app logo"
    class={brand({ class: cn(['right-[10%] top-4'], ['lg:right-[24%]']) })}
  />
  <img
    src={airbnb}
    alt="airbnb app logo"
    class={brand({ class: cn(['bottom-[0%] right-[4%]'], ['lg:right-[12%]']) })}
  />
</div>
