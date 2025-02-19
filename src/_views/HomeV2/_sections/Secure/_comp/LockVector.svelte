<script lang="ts">
  import mobileLock from '../_assets/lockMobile.png';
  import lockDesktop from '../_assets/lockDesktop.png';
</script>

<!-- --------------------------------- Desktop --------------------------------- -->
<img
  width="1005"
  height="263"
  src={lockDesktop}
  alt="lock"
  class="mx-auto hidden h-max w-full sm:block sm:w-max"
/>

<!-- --------------------------------- Mobile --------------------------------- -->
<img width="390" height="100" src={mobileLock} alt="lock" class="block w-full sm:hidden" />
