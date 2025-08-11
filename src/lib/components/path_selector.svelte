<script>
  let byobIcon = 'agent_lp_images/AI2_icon.png';
  let cometchatIcon = 'agent_lp_images/AI_icon.png';
  let cometchatImage = 'agent_lp_images/infra.png';

  let byobImage = '/agent_lp_images/Byob.png';
  let bulletIcon = '/agent_lp_images/bullet_icon.png';
</script>

<section class="  text-white">
  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
    <!-- Card 1 -->
    <div class="relative h-[600px] justify-center rounded-2xl border border-[#1F1B2E] p-6">
      <div>
        <img src={byobIcon} alt="BYOB Icon" class="mb-4 h-10 w-10" />
        <h3 class="mb-3 text-xl font-medium">BYOB – Bring Your Own (Agent) Brain</h3>
        <ul class="space-y-2 font-sans text-md text-gray-11">
          <li class="flex items-start gap-2 self-stretch">
            <img src={bulletIcon} alt="" class="" />
            <span>Use your existing LLM orchestration</span>
          </li>
          <li class="flex items-start gap-2 self-stretch">
            <img src={bulletIcon} alt="" class="" />
            <span>Plug into CometChat’s UI, mod, notifications, and insights</span>
          </li>
          <li class="flex items-start gap-2 self-stretch">
            <img src={bulletIcon} alt="" class="" />
            <span>Modular, protocol-compatible, and fast to implement</span>
          </li>
        </ul>
      </div>
      <!-- Image inside card -->
      <div>
        <img
          src={byobImage}
          alt="BYOB Chat UI"
          class="absolute bottom-0 left-1/2 h-[300px] -translate-x-1/2"
        />
      </div>
    </div>

    <!-- Card 2 -->
    <div class="relative overflow-hidden rounded-2xl border border-[#1F1B2E] p-6">
      <img src={cometchatIcon} alt="CometChat Icon" class="mb-4 h-10 w-10" />
      <h3 class="mb-3 text-xl font-semibold">Build Inside CometChat</h3>
      <ul class="space-y-2 text-md text-gray-11">
        <li class="flex items-start gap-2 self-stretch">
          <img src={bulletIcon} alt="" class="" />
          <span>Visual Agent Builder</span>
        </li>
        <li class="flex items-start gap-2 self-stretch">
          <img src={bulletIcon} alt="" class="" />
          <span>Design prompt logic, memory, retries, tool use</span>
        </li>
        <li class="flex items-start gap-2 self-stretch">
          <img src={bulletIcon} alt="" class="" />
          <span>Simulate and ship – all from a single canvas</span>
        </li>
      </ul>

      <!-- Image inside card -->
      <img
        src={cometchatImage}
        alt="CometChat UI"
        class="absolute bottom-0 left-1/2 h-[300px] -translate-x-1/2"
      />
    </div>
  </div>
</section>
