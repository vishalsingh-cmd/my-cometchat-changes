<script lang="ts">
  import { page } from '$app/stores';
  import Icon from '$components/icon/icon.svelte';

  import { string } from '$lib/strings';
  import { cn } from '$lib/utils';

  let className: string | undefined = undefined;
  export { className as class };

  const createAbsoluteUrl = (url: string) => {
    return encodeURIComponent(url);
  };

  const shareLinks = [
    {
      icon: 'facebook',
      text: string('blog.facebook'),
      url: `https://www.facebook.com/sharer/sharer.php?u=${createAbsoluteUrl($page.url.href)}`
    },
    {
      icon: 'twitter',
      text: string('blog.twitter'),
      url: `https://twitter.com/intent/tweet?url=${createAbsoluteUrl($page.url.href)}`
    },
    {
      icon: 'linkedin',
      text: string('blog.linkedin'),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${createAbsoluteUrl(
        $page.url.href
      )}`
    }
  ];
</script>

<div class={cn('flex flex-col gap-6 text-lg font-semibold leading-tight', className)}>
  <p>
    {string('blog.share')}
  </p>
  <div class="flex flex-col gap-3">
    {#each shareLinks as link}
      <a
        href={link.url}
        class="flex items-center gap-1.5 opacity-74 ease-smooth hover:opacity-100"
        target="_blank"
        rel="noopener"
      >
        <Icon icon={link.icon} size="xs" />
        {link.text}
      </a>
    {/each}
  </div>
</div>
