<script>
  // No interactivity for now
  // import Button from '$src/components/buttons/button.svelte';
</script>

<section
  class="top-[75px] mt-10 flex w-full flex-col items-center justify-center gap-8 py-20 font-sans text-white md:flex-row"
>
  <!-- Left Content -->
  <div class="max-w-[538px]">
    <!-- Badge -->
    <div class="mb-4 flex h-10 items-center gap-2">
      <img src="/agent_lp_images/Profile.png" alt="icon" class="h-6 w-6" />
      <div
        class="inline-block rounded-full border border-purple-11 bg-transparent bg-gradient-purple bg-clip-text px-4 py-1 text-lg font-semibold tracking-none text-transparent"
      >
        Full Stack AI Agent Platform
      </div>
    </div>

    <!-- Heading -->
    <h1 class="sm:text-5xl mb-4 text-4xl font-medium leading-snug">
      Ship the
      <span class=" bg-gradient-purple bg-clip-text text-transparent">agent.</span>
      <br />

      Skip the <span class="bg-gradient-purple bg-clip-text text-transparent">plumbing. </span>
    </h1>

    <!-- Description -->
    <div class="text-sans mb-6">
      <div class="mb-2 text-xl font-medium leading-snug tracking-wide text-gray-11">
        Why are you still stitching together chat UIs, retries, moderation, notifications, and
        analytics – just to get your agent into users’ hands?
      </div>
      <div class="mb-2 text-xl font-medium leading-snug tracking-wide text-gray-11">
        CometChat gives you the entire frontend + infra layer.
      </div>
      <div class="text-xl font-medium leading-snug tracking-wide text-gray-11">
        Full stack. Modular. Production-ready.
      </div>
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap gap-4" />
  </div>

  <!-- Right Content -->
  <div class="relative">
    <img
      src="/agent_lp_images/Hero.png"
      alt="Agent Platform UI Preview"
      class="h-[475px] w-[575.76px] rounded-xl shadow-xl"
      loading="lazy"
    />
  </div>
</section>
