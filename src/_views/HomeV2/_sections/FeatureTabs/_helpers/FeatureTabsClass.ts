import { gsap } from 'gsap';
import { getRequiredElems } from './withFeatureTabs';
import type { EmblaCarouselType } from 'embla-carousel';
import Observer from 'gsap/dist/Observer';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

export default class FeatureTabsClass {
  private readonly tabsElem: HTMLDivElement;
  private readonly emblaApi: EmblaCarouselType;
  private elems: {
    triggerElems: HTMLButtonElement[];
    containerElem: HTMLDivElement;
    featureTabsNav: HTMLDivElement;
    contentElems: HTMLDivElement[];
    videoElems: HTMLVideoElement[];
    progressElems: HTMLDivElement[];
  };
  private isInFrame = false;
  private scrollTrigger?: ScrollTrigger;
  private observer?: Observer;
  private currentIndex = 0;
  private lastScrollTime = 0;
  private readonly scrollThreshold = 800;

  constructor(tabsElem: HTMLDivElement, emblaApi: EmblaCarouselType) {
    this.tabsElem = tabsElem;
    this.emblaApi = emblaApi;

    const requiredElems = getRequiredElems(tabsElem);
    if (!requiredElems) {
      throw new Error('Failed to initialize FeatureTabsClass: Missing required elements');
    }

    this.elems = requiredElems;
    this.init();
  }

  private init() {
    gsap.registerPlugin(Observer, ScrollTrigger, ScrollToPlugin);

    this.initTriggers();
    this.initVideos();
    this.initializeScrollTrigger();
    this.initializeObserver();
    this.initEmblaEvents();
  }

  private initTriggers() {
    this.elems.triggerElems.forEach((trigger, index) => {
      trigger.addEventListener('click', () => {
        if (this.currentIndex === index) return;
        this.animateToPanel(index);
      });
    });
  }

  private initVideos() {
    this.elems.videoElems.forEach((video, index) => {
      video.pause();
      video.currentTime = 0;

      video.addEventListener('timeupdate', () => {
        if (index === this.currentIndex) {
          this.updateProgress(index);
        }
      });

      video.addEventListener('ended', () => {
        if (index === this.currentIndex) {
          if (index < this.elems.contentElems.length - 1) {
            this.animateToPanel(this.currentIndex + 1);
          } else {
            this.scrollToNextSection();
          }
        }
      });
    });
  }

  private initializeScrollTrigger() {
    this.scrollTrigger = ScrollTrigger.create({
      trigger: this.tabsElem,
      start: 'top top',
      markers: false,
      pin: true,
      anticipatePin: 1,
      fastScrollEnd: true,
      preventOverlaps: true,
      onUpdate: () => {
        const now = Date.now();
        if (now - this.lastScrollTime < this.scrollThreshold) return;
        this.lastScrollTime = now;
      },
      onEnter: () => {
        this.isInFrame = true;
        this.lastScrollTime = Date.now();

        if (this.currentIndex === 0) {
          this.elems.videoElems[0].play();
          this.updateActiveStates(0);
        }

        this.observer?.enable();
        document.body.setAttribute('data-header-status', 'inactive');
      },
      onEnterBack: () => {
        this.isInFrame = true;
        this.lastScrollTime = Date.now();

        if (this.currentIndex === this.elems.contentElems.length - 1) {
          this.elems.videoElems[this.elems.contentElems.length - 1].play();
          this.updateActiveStates(this.elems.contentElems.length - 1);
        }

        this.observer?.enable();
        document.body.setAttribute('data-header-status', 'inactive');
      },
      onLeave: () => {
        this.isInFrame = false;
        this.observer?.disable();
        document.body.setAttribute('data-header-status', 'active');
      },
      onLeaveBack: () => {
        this.isInFrame = false;
        this.observer?.disable();
        document.body.setAttribute('data-header-status', 'active');
      }
    });
  }

  private initializeObserver() {
    this.observer = Observer.create({
      target: window,
      type: 'wheel,touch,pointer',
      tolerance: 10,
      wheelSpeed: 1,
      preventDefault: true,

      onDown: (event) => {
        const now = Date.now();
        if (now - this.lastScrollTime <= this.scrollThreshold) {
          return;
        }

        const isTouch = event.isDragging;
        isTouch ? this.handleScrollUp(now) : this.handleScrollDown(now);
      },
      onUp: (event) => {
        const now = Date.now();
        if (now - this.lastScrollTime <= this.scrollThreshold) {
          return;
        }

        const isTouch = event.isDragging;
        isTouch ? this.handleScrollDown(now) : this.handleScrollUp(now);
      }
    });
    this.observer.disable();
  }

  private initEmblaEvents() {
    this.emblaApi.on('select', (emblaApi) => {
      const index = emblaApi.selectedScrollSnap();

      this.updateActiveStates(index);
      this.elems.videoElems[this.currentIndex].pause();
      this.elems.videoElems[this.currentIndex].currentTime = 0;
      this.elems.videoElems[index].play();
      this.currentIndex = index;
    });
  }

  private animateToPanel(index: number) {
    this.emblaApi.scrollTo(index);
  }

  private updateProgress(index: number): void {
    const video = this.elems.videoElems[index];
    const progress = (video.currentTime / video.duration) * 100;
    this.elems.progressElems[index].style.setProperty('--progress-width', `${progress}%`);
  }

  private updateActiveStates(activeIndex: number) {
    this.elems.triggerElems[this.currentIndex].setAttribute('data-state', 'inactive');
    this.elems.triggerElems[activeIndex].setAttribute('data-state', 'active');

    this.elems.contentElems[this.currentIndex].setAttribute('data-state', 'inactive');
    this.elems.contentElems[activeIndex].setAttribute('data-state', 'active');

    const tabWidth = this.elems.triggerElems[activeIndex].offsetWidth;
    const containerWidth = this.elems.featureTabsNav.clientWidth;
    const scrollPosition =
      this.elems.triggerElems[activeIndex].offsetLeft - containerWidth / 2 + tabWidth / 2;

    this.elems.featureTabsNav.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: 'smooth'
    });
  }

  private scrollToNextSection() {
    if (!this.isInFrame) return;

    const currentSection = this.elems.containerElem.closest('section');
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

  private scrollToPrevSection() {
    const currentSection = this.elems.containerElem.closest('section');
    const prevSection = currentSection?.previousElementSibling as HTMLElement;
    if (prevSection) {
      const offset = prevSection.offsetTop;
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

  private handleScrollDown(now: number) {
    if (this.currentIndex === this.elems.contentElems.length - 1) {
      this.observer?.disable();
      return;
    }

    if (this.currentIndex < this.elems.contentElems.length - 1) {
      this.lastScrollTime = now;
      this.animateToPanel(this.currentIndex + 1);
    }
  }

  private handleScrollUp(now: number) {
    if (this.currentIndex === 0) {
      this.observer?.disable();
      return;
    }

    if (this.currentIndex > 0) {
      this.lastScrollTime = now;
      this.animateToPanel(this.currentIndex - 1);
    }
  }

  public destroy(): void {
    this.scrollTrigger?.kill();
    this.observer?.kill();

    this.elems.videoElems.forEach((video, index) => {
      video.pause();
      video.currentTime = 0;
      video.removeEventListener('timeupdate', () => this.updateProgress(index));
    });

    // Reset all progress bars
    this.elems.progressElems.forEach((progress) => {
      progress.style.setProperty('--progress-width', '0%');
    });
  }
}
