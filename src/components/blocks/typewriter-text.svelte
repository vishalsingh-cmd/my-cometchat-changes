<script lang="ts">
  import type { TypewriterTextStoryblok } from '$types/bloks';
  import { onMount } from 'svelte';

  export let block: TypewriterTextStoryblok;

  let text = block.entries[0].value;
  let i = block.entries[0].value.length;
  let idx = 0;
  let dir: 'right' | 'left' = 'right';

  const loop = () => {
    if (dir === 'right') {
      if (i < block.entries[idx].value.length) {
        text += block.entries[idx].value.charAt(i);
        i++;
        setTimeout(loop, 75);
      } else {
        dir = 'left';
        setTimeout(loop, 1000);
      }
    } else {
      if (i > 0) {
        text = text.slice(0, i - 1);
        i--;
        setTimeout(loop, 75);
      } else {
        dir = 'right';

        if (idx === block.entries.length - 1) {
          idx = 0;
        } else {
          idx++;
        }
        loop();
      }
    }
  };

  onMount(() => {
    loop();
  });
</script>

<br />
<span class="text-gray-12 md:whitespace-nowrap">
  {text}&nbsp;
</span>
