<script lang="ts">
  import { cn } from '$lib/utils';

  export let image: string;
  export let title: string;
  export let publishedAt: string;
  export let publishedBy: string;
  export let href: string;

  let className: string | undefined = undefined;
  export { className as class };
</script>

<a {href} class={cn('group flex items-center gap-4', className)}>
  <img src={image} alt="" class="h-16 w-16 flex-shrink-0 rounded-xl bg-gray-2" />
  <div>
    <p class="line-clamp-2 text-md font-semibold leading-snug opacity-74 group-hover:opacity-100">
      {title}
    </p>
    <p class="mt-1 text-sm opacity-64 group-hover:opacity-80">
      {publishedAt} · {publishedBy}
    </p>
  </div>
</a>
