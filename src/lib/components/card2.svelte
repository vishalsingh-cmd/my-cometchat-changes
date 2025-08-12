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
  class="grid-bg relative grid h-[630px] w-[1312px] grid-cols-[repeat(14,1fr)] grid-rows-4 text-sm font-medium leading-tight text-white"
>
  <div class="col-span-1 row-span-4 border-b border-t border-gray-5" />

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
    <h3 class="w-[227px] pl-4 pt-6 font-sans text-xl font-[640] leading-tighter">
      Global <br /> multi-region <br />delivery
    </h3>

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

  <div class="col-span-1 row-span-4 border-b border-t border-gray-5" />

  <div class="relative col-span-3 row-span-1 border border-gray-5">
    <div class="mx-auto mt-6 flex w-[204px] flex-col items-start gap-2 self-stretch">
      <div class="font-bold bg-gradient-purple bg-clip-text text-3xl text-transparent">99.999%</div>
      <div class="text-lg font-normal text-gray-11">Uptime SLA</div>
    </div>
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-6 flex items-center justify-between border border-gray-5 p-6">
    <h3 class="mb-4 text-lg font-semibold">Enterprise <br /> security</h3>
    <img src={enterprise} class="mx-auto" alt="" />
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>

  <div class="relative col-span-4 flex items-center border border-gray-5">
    <h3 class=" w-[227px] pl-6 text-lg font-semibold">
      Message auditing <br /> and <br /> policy enforcement
    </h3>
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
    <h3 class="bg-gradient-purple bg-clip-text text-3xl font-semibold text-transparent">
      5B+ users
    </h3>
    <p class="text-lg font-normal text-gray-11">Scalable systems</p>
    <SecureDecCircle position="topLeft" />
    <SecureDecCircle position="topRight" />
    <SecureDecCircle position="bottomLeft" />
    <SecureDecCircle position="bottomRight" />
  </div>
</div>
