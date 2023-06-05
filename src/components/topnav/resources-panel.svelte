<script lang="ts">
  import GhostButton from '$components/buttons/ghost-button.svelte';
  import TopnavItem from './topnav-item.svelte';
  import TopnavThumb from './topnav-thumb.svelte';
</script>

<div class="container mx-auto flex items-stretch px-4">
  <div class="flex-1 p-12 pl-0">
    <h3 class="mb-8 text-lg opacity-54">Customer stories</h3>
    <div class="flex flex-col gap-8">
      <TopnavThumb
        image="https://unsplash.com/photos/7a4F2FW32z4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg1OTYwODY3fA&force=true&w=640"
        href="/"
        title="How An Ed-Tech Platform, Questt, Increased Engagement By 30%"
        publishedAt="August 24, 2022"
        publishedBy="Michael Nyamande"
      />
      <TopnavThumb
        image="https://unsplash.com/photos/Bg1hgJEU3Es/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGNvbWV0fGVufDB8fHx8MTY4NTkyNzA5MXww&force=true&w=640"
        href="/"
        title="Shaadi.Com Ditched Home-Brewed In-App Chat To Scale With CometChat"
        publishedAt="August 24, 2022"
        publishedBy="Michael Nyamande"
      />
      <GhostButton variant="highlighted" label="See all stories" />
    </div>
  </div>
  <div class="w-px bg-divider-gradient-vertical" />
  <div class="flex-1 p-12 pr-0">
    <h3 class="mb-8 text-lg opacity-54">CometChat Blog</h3>
    <div class="flex flex-col gap-8">
      <TopnavThumb
        image="https://unsplash.com/photos/yOIT88xWkbg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fGFzdHJvbm9teXxlbnwwfHx8fDE2ODU5NDA0NTd8MA&force=true&w=640"
        href="/"
        title="11 Common Misconceptions About Mobile App Development"
        publishedAt="August 24, 2022"
        publishedBy="Michael Nyamande"
      />
      <TopnavThumb
        image="https://unsplash.com/photos/QwoNAhbmLLo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHNwYWNlfGVufDB8fHx8MTY4NTkwOTAyNXww&force=true&w=640"
        href="/"
        title="UX Challenges In Educational App Design -And How To Solve Them"
        publishedAt="August 24, 2022"
        publishedBy="Michael Nyamande"
      />
      <GhostButton variant="highlighted" label="See all stories" />
    </div>
  </div>
  <div
    class="relative w-[480px] gap-12 border-l border-gray-5 bg-gray-4 p-12 pr-0 before:absolute before:left-full before:top-0 before:h-full before:w-screen before:bg-gray-4"
  >
    <h3 class="mb-8 text-lg opacity-54">Resources</h3>
    <div class="flex flex-col gap-8">
      <TopnavItem href="/" title="Give feedback" asset={{ icon: 'thumbs-up' }} />
      <TopnavItem href="/" title="Community Forum" asset={{ icon: 'message-dots-circle' }} />
      <TopnavItem href="/" title="Help Center" asset={{ icon: 'help-circle' }} />
      <TopnavItem href="/" title="Partners" asset={{ icon: 'users-01' }} />
    </div>
  </div>
</div>
