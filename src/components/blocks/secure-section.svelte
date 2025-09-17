<script lang="ts">
  // No dynamic logic needed for now
  import SecureDecCircle from '$src/_views/HomeV2/_sections/Secure/_comp/SecureDecCircle.svelte';
  let data_enc = '/agent_lp_images/grid_card_images/Data_encryption.png';
  let data_enc_mobile = '/agent_lp_images/grid_card_images/mobile/Data_encryption_mobile.png';
  let secure = '/agent_lp_images/grid_card_images/Secure.png';
  let sg = '/agent_lp_images/grid_card_images/small_globe.png';
  let connect = '/agent_lp_images/grid_card_images/connectivity.png';
  let enterprise = [
    '/agent_lp_images/grid_card_images/enterprise/1.png',
    '/agent_lp_images/grid_card_images/enterprise/2.png',
    '/agent_lp_images/grid_card_images/enterprise/3.png',
    '/agent_lp_images/grid_card_images/enterprise/4.png'
  ];
  let file = '/agent_lp_images/grid_card_images/file-check-icon.png';
  let lock = '/agent_lp_images/grid_card_images/lock.png';
  import Container from '$src/_comps/layouts/Container.svelte';
  import Section from '$src/_comps/layouts/Section.svelte';
</script>

<Section>
  <Container>
    <div class="grid-rows-[repeat(29, 1fr)] relative grid grid-cols-2 text-white lg:hidden">
      <!-- Card 1 (6 rows) -->
      <div class="relative col-span-2 row-span-6 border border-gray-5">
        <div
          class="pl-[24px] pt-[16px] font-sans text-[18px] font-[640px] leading-tighter text-gray-12"
        >
          Seamless multi-tenant support
          <img src={data_enc_mobile} alt="" class=" shrink-0" />
        </div>
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 2 (6 rows) -->
      <div class="relative col-span-2 row-span-6 border border-gray-5 p-[24px]">
        <div class="bottom-[24px] left-[24px] top-[24px]">
          <div class="font-sans text-[18px] font-[640px] leading-tighter text-gray-12">
            Data encryption in transit & at rest
          </div>
          <img src={secure} alt="" class="w-[382px] shrink-0" />
        </div>
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 3 (3 rows) -->
      <div
        class=" relative col-span-1 row-span-3 flex flex-col justify-between border border-gray-5"
      >
        <div
          class="relative bottom-[24px] left-[24px] top-[24px] font-sans text-[18px] font-[640] leading-tighter text-gray-12"
        >
          Global <br /> multi-region <br /> delivery
        </div>
        <img src={sg} alt="" class="h-[80px] self-end" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 4 (3 rows) -->
      <div
        class="relative col-span-1 row-span-3 flex flex-col justify-between border border-gray-5"
      >
        <div
          class="relative left-[24px] top-[24px] font-sans text-[18px] font-[640px] leading-tighter text-gray-12"
        >
          RBAC <br /> + <br />Access logs
        </div>
        <img src={lock} alt="" class="top-[89px] w-[88px] shrink-0 self-end" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
      </div>

      <!-- Card 5 (2 rows) -->
      <div
        class="relative col-span-2 row-span-3 flex flex-col justify-between gap-4 border border-gray-5 p-6"
      >
        <!-- <div class="font-sans text-[18px] font-[640px] leading-tighter text-gray-12">
          Enterprise - grade compliance
        </div> -->
        <div class="inline-flex flex-wrap content-end items-end justify-center gap-[32px]">
          {#each enterprise as file}
            <img src={file} alt="" class="max-w-[130px]" />
          {/each}
        </div>
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 6 (3 rows) -->
      <div class="relative col-span-1 row-span-2 border border-gray-5 p-6">
        <div>
          <div class="flex flex-col items-start gap-2 self-stretch">
            <div class="bg-gradient-purple bg-clip-text text-3xl font-[640px] text-transparent">
              99.999%
            </div>
            <div class="text-lg font-medium text-gray-12 opacity-74">Uptime SLA</div>
          </div>
        </div>
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 7 (6 rows) -->
      <div
        class="relative col-span-1 row-span-2 flex flex-col items-center justify-center border border-gray-5"
      >
        <div class="relative flex flex-col items-start gap-[8px]">
          <h3
            class="bg-gradient-purple bg-clip-text text-2xl font-[640px] leading-tighter text-transparent"
          >
            5B+ users
          </h3>
          <p class="text-lg font-medium text-gray-12 opacity-74">Scalable systems</p>
        </div>
        <!-- <SecureDecCircle position="topLeft" className="z-40" /> -->
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <!-- Card 8 (2 rows) -->
      <div
        class="relative col-span-2 row-span-2 flex flex-col justify-between border border-gray-5"
      >
        <h3 class="relative left-6 top-6 w-[227px] text-lg font-[640px]">
          Message auditing <br /> and <br /> policy enforcement
        </h3>
        <img src={file} alt="" class="h-[80px] self-end" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
      </div>

      <div
        class="relative col-span-2 row-span-6 flex flex-col justify-between border border-gray-5"
      >
        <div class="relative left-6 top-6 flex flex-col items-start gap-[12px] self-stretch">
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
        <img src={connect} alt="" class="shrink-0 self-end" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>
    </div>

    <!-- desktop view -->

    <div
      class="grid-rows-12 relative hidden max-w-[1312px] grid-cols-2 text-sm font-medium leading-tight text-white lg:grid lg:grid-cols-[repeat(14,1fr)] lg:grid-rows-4"
    >
      <div class="col-span-1 row-span-4 border-b-0 border-t-0 border-gray-5" />

      <div class="relative col-span-3 row-span-3 border border-r-0 border-t-0 border-gray-5">
        <h3
          class="relative left-[24px] top-[24px] self-stretch font-sans text-[22px] font-[640px] leading-snug"
        >
          Seamless Multi-tenant support
        </h3>
        <!-- <div class="mt-6 flex h-32 w-full items-center justify-center rounded-md bg-[#]">#</div> -->
        <img src={data_enc} alt="" srcset="" class="absolute bottom-0 left-1/2 -translate-x-1/2" />
        <SecureDecCircle position="topLeft" className="z-40" />
        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomLeft" />
        <SecureDecCircle position="bottomRight" />
      </div>

      <div
        class="relative col-span-3 row-span-2 border border-b-0 border-l border-r-0 border-t-0 border-gray-5"
      >
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

      <div class="relative col-span-3 row-span-3 border border-l-0 border-t-0 border-gray-5">
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
        class="relative col-span-3 row-span-1 flex items-center justify-center border-l border-r border-gray-5"
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
        <!-- <h3 class="mb-4 self-stretch font-sans text-[22px] text-lg font-[640px] leading-snug">
          Enterprise <br /> security
        </h3> -->
        <div class="inline-flex flex-wrap content-end items-end gap-[32px]">
          {#each enterprise as file}
            <img src={file} alt="" class="max-w-[100px]" />
          {/each}
        </div>
        <SecureDecCircle position="topLeft" className="z-40" />
      </div>

      <div class="relative col-span-4 flex border border-b-0 border-t-0 border-gray-5">
        <h3 class="relative left-[24px] top-[46px] w-[227px] text-lg font-[640px]">
          Message auditing <br /> and <br /> policy enforcement
        </h3>
        <img src={file} alt="" class="absolute bottom-0 right-0" />
        <SecureDecCircle position="topRight" />
        <SecureDecCircle position="bottomLeft" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div
        class="relative col-span-4 flex flex-col border border-b-0 border-l-0 border-t-0 border-gray-5"
      >
        <h3
          class="relative left-[24px] top-[46px] self-stretch font-sans text-[22px] text-lg font-[640px] leading-snug"
        >
          RBAC <br />+ <br /> Access logs
        </h3>
        <img src={lock} alt="lock" class="absolute bottom-0 right-0 h-[138px] w-[138px]" />

        <SecureDecCircle position="topRight" className="z-40" />
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <div class="relative col-span-4 border border-b-0 border-l-0 border-t-0 border-gray-5">
        <div class="relative left-[73px] top-[39px] flex flex-col items-start gap-[8px]">
          <h3 class="bg-gradient-purple bg-clip-text text-3xl font-[640px] text-transparent">
            5B+ users
          </h3>
          <p class="text-lg font-medium text-gray-11">Scalable systems</p>
        </div>
        <SecureDecCircle position="bottomRight" className="z-40" />
      </div>

      <!-- Top line -->
      <div
        class="absolute top-0 z-10 h-[1px] w-full bg-[linear-gradient(90deg,rgba(250,250,255,0)_0%,rgba(250,250,255,1)_5%,rgba(250,250,255,1)_95%,rgba(250,250,255,0)_100%)]
         opacity-10"
      />

      <!-- Bottom line -->
      <div
        class="absolute bottom-0 z-10 h-[1px] w-full bg-[linear-gradient(90deg,rgba(250,250,255,0)_0%,rgba(250,250,255,1)_5%,rgba(250,250,255,1)_95%,rgba(250,250,255,0)_100%)]
         opacity-10"
      />
    </div>
  </Container>
</Section>
