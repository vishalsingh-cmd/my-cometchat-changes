<script lang="ts">
  import Title from '$components/title.svelte';

  import Blur from './assets/blur.svg';
  import ProductDisplay from './product-display.svelte';
</script>

<section data-theme="light" class="bg-gray-1">
  <div
    class="relative mx-auto w-full max-w-[1440px] pb-12 max-[1650px]:overflow-hidden md:grid md:grid-cols-2 md:gap-8 md:pt-[35px]"
  >
    <div class="absolute right-[-88px] top-[-182px] hidden blur-[400px] md:block">
      <img alt="" src={Blur} />
    </div>
    <div>
      <Title
        label={{ color: 'orange', content: 'Our Platform' }}
        title="Infrastructure & tools to power your in-app communication"
      />
      <div class="px-5 md:mt-6 md:pl-16">
        <ProductDisplay
          illustration="/assets/homepage/product-1.png"
          title="Messaging & Chat"
          description="Flexible, secure, and easy-to-manage messaging for your web and mobile apps."
          link={{ href: '/', label: 'Learn more' }}
        />
      </div>
    </div>
    <div class="mt-10 px-5 md:mt-[146px] md:pr-16">
      <ProductDisplay
        illustration="/assets/homepage/product-2.png"
        title="Voice & Video Calling"
        description="Enterprise-grade security, robust infrastructure, and a familiar UI from the same vendor as
    your chat solution."
        link={{ href: '/', label: 'Learn more' }}
      />
    </div>
  </div>
</section>
