import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Observer from 'gsap/dist/Observer';

interface RequiredElements {
  triggerElems: HTMLButtonElement[];
  containerElem: HTMLDivElement;
  featureTabsNav: HTMLDivElement;
  containerScrollElem: HTMLDivElement;
  contentElems: HTMLDivElement[];
  videoElems: HTMLVideoElement[];
  progressElems: HTMLDivElement[];
}

export default class FeatureTabsClass {
  private readonly tabsElem: HTMLDivElement;
  private triggerElems!: HTMLButtonElement[];
  private containerElem!: HTMLDivElement;
  private featureTabsNav!: HTMLDivElement;
  private containerScrollElem!: HTMLDivElement;
  private contentElems!: HTMLDivElement[];
  private videoElems!: HTMLVideoElement[];
  private progressElems!: HTMLDivElement[];

  private scrollTrigger?: ScrollTrigger;
  private observer?: Observer;
  private isAnimating = false;
  private currentIndex = 0;
  private readonly totalPanels: number;

  constructor(tabsElem: HTMLDivElement) {
    this.tabsElem = tabsElem;

    const requiredElems = this.getRequiredElems(tabsElem);
    if (!requiredElems) {
      throw new Error('Failed to initialize FeatureTabsClass: Missing required elements');
    }

    this.initializeElements(requiredElems);
    this.totalPanels = this.contentElems.length;
    this.init();
    this.bindEvents();
  }

  private initializeElements(elements: RequiredElements): void {
    const {
      triggerElems,
      containerElem,
      featureTabsNav,
      containerScrollElem,
      contentElems,
      videoElems,
      progressElems
    } = elements;

    this.triggerElems = triggerElems;
    this.containerElem = containerElem;
    this.featureTabsNav = featureTabsNav;
    this.containerScrollElem = containerScrollElem;
    this.contentElems = contentElems;
    this.videoElems = videoElems;
    this.progressElems = progressElems;
  }

  private init(): void {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    this.containerScrollElem.style.width = `${this.contentElems.length}00%`;

    // Set initial states
    this.videoElems.forEach((video, index) => {
      video.pause();
      video.currentTime = 0;

      video.addEventListener('timeupdate', () => {
        if (index === this.currentIndex) {
          this.updateProgress(index);
        }
      });

      video.addEventListener('ended', () => {
        if (index === this.currentIndex && index < this.totalPanels - 1) {
          this.animateToPanel(this.currentIndex + 1);
        } else {
          const currentSection = this.containerElem.closest('section');
          const nextSection = currentSection?.nextElementSibling as HTMLElement;
          if (nextSection) {
            const offset = nextSection.offsetTop;
            gsap.to(window, {
              scrollTo: {
                y: offset,
                autoKill: false
              },
              duration: 1,
              ease: 'power2.inOut'
            });
          }
        }
      });
    });

    this.updateActiveStates(0);
    this.initializeScrollTrigger();
    this.initializeObserver();
  }

  private updateProgress(index: number): void {
    const video = this.videoElems[index];
    const progress = (video.currentTime / video.duration) * 100;
    this.progressElems[index].style.setProperty('--progress-width', `${progress}%`);
  }

  private lastScrollTime = 0;
  private readonly scrollThreshold = 500; // ms between allowed scroll actions

  private initializeObserver(): void {
    this.observer = ScrollTrigger.observe({
      target: window,
      type: 'wheel,touch,pointer',
      tolerance: 10,
      wheelSpeed: 1,
      onDown: () => {
        const now = Date.now();
        if (
          !this.isAnimating &&
          this.currentIndex < this.totalPanels - 1 &&
          now - this.lastScrollTime > this.scrollThreshold
        ) {
          this.lastScrollTime = now;
          this.animateToPanel(this.currentIndex + 1);
        }
      },
      onUp: () => {
        const now = Date.now();
        if (
          !this.isAnimating &&
          this.currentIndex > 0 &&
          now - this.lastScrollTime > this.scrollThreshold
        ) {
          this.lastScrollTime = now;
          this.animateToPanel(this.currentIndex - 1);
        }
      }
    });
    this.observer.disable();
  }

  private initializeScrollTrigger(): void {
    this.scrollTrigger = ScrollTrigger.create({
      trigger: this.tabsElem,
      start: 'top top',
      pin: true,
      anticipatePin: 1,
      onEnter: () => {
        this.observer?.enable();
        document.body.setAttribute('data-header-status', 'inactive');
      },
      onEnterBack: () => {
        this.observer?.enable();
        document.body.setAttribute('data-header-status', 'inactive');
      },
      onLeave: () => {
        this.observer?.disable();
        document.body.setAttribute('data-header-status', 'active');
      },
      onLeaveBack: () => {
        this.observer?.disable();
        document.body.setAttribute('data-header-status', 'active');
      }
    });

    ScrollTrigger.create({
      trigger: this.containerElem,
      start: 'top center',
      anticipatePin: 1,
      onEnter: () => this.videoElems[this.currentIndex].play(),
      onEnterBack: () => this.videoElems[this.currentIndex].play(),
      onLeave: () => {
        this.videoElems.forEach((video) => {
          video.pause();
        });
      },
      onLeaveBack: () => {
        this.videoElems.forEach((video) => {
          video.pause();
        });
      }
    });
  }

  private animateToPanel(index: number): void {
    if (this.isAnimating || index === this.currentIndex || index > this.videoElems.length - 1)
      return;

    this.isAnimating = true;
    this.videoElems.forEach((video, i) => {
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    this.updateActiveStates(index);

    const tabWidth = this.triggerElems[index].offsetWidth;
    const containerWidth = this.featureTabsNav.clientWidth;
    const scrollPosition = this.triggerElems[index].offsetLeft - containerWidth / 2 + tabWidth / 2;
    this.featureTabsNav.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: 'smooth'
    });

    gsap.to(this.contentElems, {
      x: -1 * (window.innerWidth * index),
      duration: 0.6,
      onComplete: () => {
        this.isAnimating = false;
        this.currentIndex = index;
      }
    });
  }

  private updateActiveStates(activeIndex: number): void {
    this.triggerElems.forEach((trigger, index) => {
      trigger.setAttribute('data-state', index === activeIndex ? 'active' : 'inactive');
      this.contentElems[index].setAttribute(
        'data-state',
        index === activeIndex ? 'active' : 'inactive'
      );
    });
  }

  private bindEvents(): void {
    this.triggerElems.forEach((trigger, index) => {
      trigger.addEventListener('click', () => {
        if (this.currentIndex === index || this.isAnimating) return;
        this.animateToPanel(index);
      });
    });

    window.addEventListener('resize', this.handleResize.bind(this));
  }

  private handleResize(): void {
    if (this.currentIndex >= 0) {
      gsap.set(this.containerScrollElem, {
        x: -1 * (window.innerWidth * this.currentIndex)
      });
    }
  }

  private getRequiredElems(tabsElem: HTMLDivElement): RequiredElements | null {
    try {
      const triggerElems = Array.from(
        tabsElem.querySelectorAll<HTMLButtonElement>("[data-name='feature-tab-trigger']")
      );

      const containerElem = tabsElem.querySelector<HTMLDivElement>(
        '[data-name="feature-tabs-container"]'
      );

      const containerScrollElem = tabsElem.querySelector<HTMLDivElement>(
        '[data-name="feature-tabs-container-scroll"]'
      );

      const featureTabsNav = tabsElem.querySelector<HTMLDivElement>(
        '[data-name="feature-tabs-nav"]'
      );

      const contentElems = Array.from(
        tabsElem.querySelectorAll<HTMLDivElement>('[data-name="feature-tabs-cnt"]')
      );

      const videoElems = Array.from(
        tabsElem.querySelectorAll<HTMLVideoElement>('[data-name="feature-tabs-cnt-video"]')
      );

      const progressElems = Array.from(
        tabsElem.querySelectorAll<HTMLDivElement>('[data-name="feature-tab-video-progress"]')
      );

      if (
        !triggerElems.length ||
        !containerElem ||
        !containerScrollElem ||
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
        containerScrollElem,
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

  public destroy(): void {
    this.scrollTrigger?.kill();
    this.observer?.kill();

    this.videoElems.forEach((video, index) => {
      video.pause();
      video.currentTime = 0;
      video.removeEventListener('timeupdate', () => this.updateProgress(index));
    });

    // Reset all progress bars
    this.progressElems.forEach((progress) => {
      progress.style.setProperty('--progress-width', '0%');
    });

    window.removeEventListener('resize', this.handleResize);
  }
}
