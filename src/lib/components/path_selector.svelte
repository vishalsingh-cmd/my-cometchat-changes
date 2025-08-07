<script>
  let byobIcon = 'agent_lp_images/AI_icon.png';
  let cometchatIcon = 'agent_lp_images/AI2_icon.png';
  let cometchatImage = 'agent_lp_images/infra.png';

  let byobImage = '/agent_lp_images/Byob.png';
  let bulletIcon = '/agent_lp_images/bullet_icon.png';
</script>

<section class="px-6 py-24 text-white">
  <div class="mx-auto mb-16 max-w-6xl text-center">
    <h2 class="md:text-5xl mb-4 text-3xl font-semibold">
      Plug In your logic.<br />Or build it here.
    </h2>
    <p class="text-gray-400 text-lg">Two paths. Same full-stack experience.</p>
  </div>

  <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
    <!-- Card 1 -->
    <div class="relative h-[600px] justify-center rounded-2xl border border-[#1F1B2E] p-6">
      <div>
        <img src={byobIcon} alt="BYOB Icon" class="mb-4 h-10 w-10" />
        <h3 class="mb-3 text-xl font-medium">BYOB – Bring Your Own (Agent) Brain</h3>
        <ul class="space-y-2 font-sans text-md text-gray-11">
          <li class="flex items-start gap-2">
            <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
            <span>Use your existing LLM orchestration</span>
          </li>
          <li class="flex items-start gap-2">
            <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
            <span>Plug into CometChat’s UI, mod, notifications, and insights</span>
          </li>
          <li class="flex items-start gap-2">
            <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
            <span>Modular, protocol-compatible, and fast to implement</span>
          </li>
        </ul>
        <a
          href="https://www.cometchat.com"
          class="mt-4 inline-block text-md text-[#6852D6] hover:underline"
        >
          Learn more
        </a>
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
        <li class="flex items-start gap-2">
          <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
          <span>Visual Agent Builder</span>
        </li>
        <li class="flex items-start gap-2">
          <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
          <span>Design prompt logic, memory, retries, tool use</span>
        </li>
        <li class="flex items-start gap-2">
          <img src={bulletIcon} alt="" class="mt-[2px] h-4 w-4" />
          <span>Simulate and ship – all from a single canvas</span>
        </li>
      </ul>
      <a href="www.cometchat.com" class="mt-4 inline-block text-md text-[#6852D6] hover:underline"
        >Learn more</a
      >

      <!-- Image inside card -->
      <img
        src={cometchatImage}
        alt="CometChat UI"
        class="absolute bottom-0 left-1/2 h-[300px] -translate-x-1/2"
      />
    </div>
  </div>
</section>
