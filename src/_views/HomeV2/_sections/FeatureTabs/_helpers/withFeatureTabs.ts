export interface RequiredElements {
  triggerElems: HTMLButtonElement[];
  containerElem: HTMLDivElement;
  featureTabsNav: HTMLDivElement;
  contentElems: HTMLDivElement[];
  videoElems: HTMLVideoElement[];
  progressElems: HTMLDivElement[];
}

export function getRequiredElems(tabsElem: HTMLDivElement): RequiredElements | null {
  try {
    const featureTabsNav = tabsElem.querySelector<HTMLDivElement>('[data-name="feature-tabs-nav"]');
    const triggerElems = Array.from(
      tabsElem.querySelectorAll<HTMLButtonElement>("[data-name='feature-tab-trigger']")
    );
    const progressElems = Array.from(
      tabsElem.querySelectorAll<HTMLDivElement>('[data-name="feature-tab-video-progress"]')
    );

    const containerElem = tabsElem.querySelector<HTMLDivElement>(
      '[data-name="feature-tabs-container"]'
    );

    const contentElems = Array.from(
      tabsElem.querySelectorAll<HTMLDivElement>('[data-name="feature-tabs-cnt"]')
    );
    const videoElems = Array.from(
      tabsElem.querySelectorAll<HTMLVideoElement>('[data-name="feature-tabs-cnt-video"]')
    );

    if (
      !triggerElems.length ||
      !containerElem ||
      !featureTabsNav ||
      !contentElems.length ||
      !videoElems.length ||
      !progressElems.length ||
      triggerElems.length !== contentElems.length ||
      triggerElems.length !== videoElems.length ||
      triggerElems.length !== progressElems.length
    ) {
      throw new Error('Missing or mismatched elements');
    }

    return {
      triggerElems,
      containerElem,
      featureTabsNav,
      contentElems,
      videoElems,
      progressElems
    };
  } catch (error) {
    console.error('FeatureTabsClass -> getRequiredElems:', error);
    return null;
  }
}
