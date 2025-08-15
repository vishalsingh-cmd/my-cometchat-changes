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
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container>
    <div
      class=" grid-rows-12 relative grid h-[630px] max-w-[1312px] grid-cols-2 text-sm font-medium leading-tight text-white lg:grid-cols-[repeat(14,1fr)] lg:grid-rows-4"
    >
      <div class="col-span-1 row-span-4 border-b-0 border-t-0 border-gray-5" />

      <div class="relative col-span-3 row-span-3 border border-t-0 border-gray-5">
        <h3
          class="relative left-[24px] top-[24px] self-stretch font-sans text-[22px] font-[640px] leading-snug"
        >
          Seamless Multi-tenant support
        </h3>
        <!-- <div class="mt-6 flex h-32 w-full items-center justify-center rounded-md bg-[#]">#</div> -->
        <img src={data_enc} alt="" srcset="" class="mx-auto" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" />
        <SecureDecCircle position="bottomRight" />
      </div>

      <div class="relative col-span-3 row-span-2 border border-t-0 border-gray-5">
        <h3
          class="relative left-[24px] top-[24px] w-[227px] self-stretch font-sans text-[22px] text-xl font-[640px] leading-snug"
        >
          Data encryption in transit and at rest
        </h3>
        <img src={secure} alt="" srcset="" class="absolute bottom-[24px] left-[24px] mx-auto" />

        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div
        class="relative col-span-3 row-span-1 flex justify-between border border-t-0 border-gray-5"
      >
        <h3 class="w-[227px] pl-4 pt-6 font-sans text-[22px] font-[640px] leading-tighter">
          Global <br /> multi-region <br />delivery
        </h3>

        <img src={sg} alt="" srcset="" class="absolute bottom-0 right-0 h-[138px] w-[138px]" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="relative col-span-3 row-span-3 border border-t-0 border-gray-5">
        <div class="self-s relative left-[24px] top-[24px] flex flex-col items-start gap-[12px]">
          <h3 class="self-stretch font-sans text-[22px] text-xl font-[640px] leading-snug">
            Edge network
          </h3>
          <p
            class="max-w-[226px] self-stretch font-sans text-[18px] font-medium leading-snug tracking-[0.09px] text-gray-12 opacity-74"
          >
            Lightning-fast chat delivery through 35+ edge locations worldwide, ensuring minimal
            latency for all users.
          </p>
        </div>
        <img src={connect} alt="" class="absolute bottom-0 right-0" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="col-span-1 row-span-4 border-b-0 border-t-0 border-gray-5" />

      <div
        class="relative col-span-3 row-span-1 flex items-center justify-center border border-gray-5"
      >
        <div>
          <div class="flex w-[204px] flex-col items-start gap-2 self-stretch">
            <div class="bg-gradient-purple bg-clip-text text-3xl font-[640px] text-transparent">
              99.999%
            </div>
            <div class="text-lg font-medium text-gray-12 opacity-74">Uptime SLA</div>
          </div>
        </div>

        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="relative col-span-6 flex items-center justify-between border border-gray-5 p-6">
        <h3 class="mb-4 self-stretch font-sans text-[22px] text-lg font-[640px] leading-snug">
          Enterprise <br /> security
        </h3>
        <img src={enterprise} class="" alt="" />
        <SecureDecCircle position="topLeft" className="z-40" />
      </div>

      <div class="relative col-span-4 flex border border-b-0 border-gray-5">
        <h3 class="relative left-[24px] top-[46px] w-[227px] text-lg font-[640px]">
          Message auditing <br /> and <br /> policy enforcement
        </h3>
        <img src={file} alt="" class="absolute bottom-0 right-0" />
        <SecureDecCircle position="topRight" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="relative col-span-4 flex flex-col border border-b-0 border-gray-5">
        <h3
          class="relative left-[24px] top-[46px] self-stretch font-sans text-[22px] text-lg font-[640px] leading-snug"
        >
          RBAC <br />+ <br /> Access logs
        </h3>
        <img src={lock} alt="lock" class="absolute bottom-0 right-0 h-[138px] w-[138px]" />

        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="relative col-span-4 border border-b-0 border-gray-5">
        <div class="relative left-[73px] top-[39px] flex flex-col items-start gap-[8px]">
          <h3 class="bg-gradient-purple bg-clip-text text-3xl font-[640px] text-transparent">
            5B+ users
          </h3>
          <p class="text-lg font-medium text-gray-11">Scalable systems</p>
        </div>
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div
        class="absolute top-0 z-30 h-[2px] max-w-[1312px]"
        style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
      />
      <div
        class="absolute bottom-0 z-30 h-[2px] max-w-[1312px]"
        style="
  background: linear-gradient(90deg,
    rgba(250,250,255,0) 0%,
    rgba(250,250,255,1) 5%,
    rgba(250,250,255,1) 95%,
    rgba(250,250,255,0) 100%
  );
  opacity: 0.1;
"
      />
    </div>
  </Container>
</Section>
