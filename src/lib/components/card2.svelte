<script lang="ts">
  // No dynamic logic needed for now
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  let data_enc = '/agent_lp_images/grid_card_images/Data_encryption.png';
  let secure = '/agent_lp_images/grid_card_images/Secure.png';
  let sg = '/agent_lp_images/grid_card_images/small_globe.png';
  let connect = '/agent_lp_images/grid_card_images/connectivity.png';
  let enterprise = '/agent_lp_images/grid_card_images/3images.png';
  let file = '/agent_lp_images/grid_card_images/file-check-icon.png';
  let lock = '/agent_lp_images/grid_card_images/lock.png';
</script>

<div
  class="grid-bg relative grid grid-cols-12 grid-rows-4 text-sm font-medium leading-tight text-white"
>
  <div class="relative col-span-3 row-span-3 border border-gray-5 p-6">
    <h3 class="mb-2 text-xl font-semibold">Seamless Multi-tenant support</h3>
    <!-- <div class="mt-6 flex h-32 w-full items-center justify-center rounded-md bg-[#]">#</div> -->
    <img src={data_enc} alt="" srcset="" class="mx-auto" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-3 row-span-2 border border-gray-5 p-6">
    <h3 class="mb-2 text-xl font-semibold">Data encryption in transit and at rest</h3>
    <img src={secure} alt="" srcset="" class="mx-auto" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-3 row-span-1 flex justify-between border border-gray-5">
    <h3 class="max-w-[227px] pl-4 pt-6 text-xl font-semibold">Global multi-region delivery</h3>

    <img src={sg} alt="" srcset="" class="absolute bottom-0 right-0 h-[138px] w-[138px]" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-3 row-span-3 border border-gray-5 p-6">
    <h3 class="mb-2 text-xl font-semibold">Edge network</h3>
    <p class="text-lg leading-snug text-gray-11">
      Lightning-fast chat delivery through 35+ edge locations worldwide, ensuring minimal latency
      for all users.
    </p>
    <img src={connect} alt="" class="absolute bottom-0 right-0" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-3 row-span-1 border border-gray-5">
    <div class="mt-6 flex flex-col items-center justify-between">
      <span class="font-bold mx-auto text-3xl text-brand-11">99.999%</span>
      <span class="mx-auto text-lg font-normal text-gray-11">Uptime SLA</span>
    </div>
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-6 flex items-center justify-between border border-gray-5 p-6">
    <h3 class="mb-4 text-lg font-semibold">Enterprise security</h3>
    <img src={enterprise} class="mx-auto" alt="" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-4 flex items-center border border-gray-5">
    <h3 class="mx-auto w-[227px] text-lg font-semibold">Message auditing and policy enforcement</h3>
    <img src={file} alt="" class="absolute bottom-0 right-0" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-4 flex flex-col justify-center border border-gray-5">
    <h3 class="mx-auto text-lg font-semibold">RBAC + Access logs</h3>
    <img src={lock} alt="lock" class="absolute bottom-0 right-0 h-[138px] w-[138px]" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-4 flex flex-col justify-center border border-gray-5 p-6">
    <h3 class="text-3xl font-semibold text-brand-9">5B+ users</h3>
    <p class="text-lg font-normal text-gray-11">Scalable systems</p>
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>
</div>
