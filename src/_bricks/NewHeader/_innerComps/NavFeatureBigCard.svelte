<script>
  import { tv } from '$src/_utils/tailwind.utils';
  import bgimg from '../_assets/guid-vard-img.png';

  export let className = '';
  export let imgClassName = '';
  export let infoClassName = '';
  export let titleClassName = '';

  const navFeatureBigCard = tv({
    slots: {
      base: ['max-w-[210px]', 'border border-[#FAFAFF] border-opacity-5 rounded-md'],
      image: ['w-full object-cover'],
      info: ['px-4 py-4 flex flex-col'],
      title: ['font-sans text-[14px] font-semibold text-[#FAFAFF] text-opacity-60']
    }
  });
  const { base, image, info, title } = navFeatureBigCard();
</script>

<a href="/" class={base({ class: className })}>
  <img src={bgimg} alt="decoration" class={image({ class: imgClassName })} />
  <div class={info({ class: infoClassName })}>
    <h3 class={title({ class: titleClassName })}>CometChat for Marketplaces</h3>
  </div>
</a>
