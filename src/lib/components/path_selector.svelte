<script>
  let byobIcon = 'agent_lp_images/AI2_icon.png';
  let cometchatIcon = 'agent_lp_images/AI_icon.png';
  let cometchatImage = 'agent_lp_images/infra.png';

  let byobImage = '/agent_lp_images/Byob.png';
  let bulletIcon = '/agent_lp_images/bullet_icon.png';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container>
    <section class="">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- Card 1 -->
        <div
          class="relative flex flex-col justify-between rounded-2xl border border-[#1F1B2E] p-6 lg:h-[640px]"
        >
          <div class="flex flex-col items-start gap-6">
            <img src={byobIcon} alt="BYOB Icon" class="h-[64px]" />
            <div>
              <h3 class="mb-3 font-sans text-[24px] font-[640px] leading-tighter text-gray-12">
                BYOB – Bring Your Own (Agent) Brain
              </h3>
              <ul class="flex flex-col items-start gap-3 text-md text-gray-11">
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Use your existing LLM orchestration</span
                  >
                </li>
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Plug into CometChat’s UI, mod, notifications, and insights</span
                  >
                </li>
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Modular, protocol-compatible, and fast to implement</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Image inside card -->
          <div>
            <img src={byobImage} alt="BYOB Chat UI" class=" max-h-[300px] opacity-74" />
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="relative flex h-[640px] flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-[#1F1B2E] p-6"
        >
          <div class="flex flex-col items-start gap-6">
            <img src={cometchatIcon} alt="CometChat Icon" class="h-[64px]" />
            <div>
              <h3 class="mb-3 font-sans text-[24px] font-[640px] leading-tighter text-gray-12">
                Build Inside CometChat
              </h3>
              <ul class="flex flex-col items-start gap-3 text-md text-gray-11">
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Visual Agent Builder</span
                  >
                </li>
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Design prompt logic, memory, retries, tool use</span
                  >
                </li>
                <li class="flex items-start gap-x-2 self-stretch">
                  <img src={bulletIcon} alt="" class="" />
                  <span
                    class="font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
                    >Simulate and ship – all from a single canvas</span
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Image inside card -->
          <img src={cometchatImage} alt="CometChat UI" class=" max-h-[300px] w-full shrink-0" />
        </div>
      </div>
    </section>
  </Container>
</Section>
