<script lang="ts">
  import '../app.css';
  import Topnav from '$components/topnav/topnav.svelte';

  export let data;
</script>

<Topnav
  data={data.topnav.content}
  blogPosts={data.blogPosts}
  customerStories={data.customerStories}
/>
<div
  data-theme="dark"
  class="h-56 bg-gray-2"
  style="background-image: url(https://wallup.net/wp-content/uploads/2019/10/66002-outer-space-galaxies-nasa.jpg)"
/>
<slot />
