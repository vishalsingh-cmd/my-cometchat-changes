// const tabHeaders = ['Visualize & Build', 'Live in Minutes', 'Moderate & Scale'];
// let container: HTMLDivElement;
// let videoElem0: HTMLVideoElement;
// let videoElem1: HTMLVideoElement;
// let videoElem2: HTMLVideoElement;

// let activeTabIndex = 0;
// let tabProgress = 0;
// let scrollTriggerInstance: ScrollTrigger;

// // onMount(() => {
// //   if (!container || !videoElem0 || !videoElem1 || !videoElem2) return;

//   gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
//   const videoElems = [videoElem0, videoElem1, videoElem2];
//   const numPanels = videoElems.length;

// videoElems.forEach((video, index) => {
//   video.addEventListener('ended', () => {
//     if (index < numPanels - 1) {
//       handleTabClick(index + 1);
//     } else {
//       const currentSection = container.closest('section');
//       const nextSection = currentSection?.nextElementSibling as HTMLElement;

//       if (nextSection) {
//         const offset = nextSection.offsetTop;
//         gsap.to(window, {
//           scrollTo: {
//             y: offset,
//             autoKill: false
//           },
//           duration: 1,
//           ease: 'power2.inOut'
//         });
//       }
//     }
//   });
// });

//   const tween = gsap.to(videoElems, {
//     x: () => -1 * (container.scrollWidth - innerWidth),
//     ease: 'none',
//     scrollTrigger: {
//       trigger: container,
//       pin: true,
//       start: 'top 20%',
//       scrub: 1,
//       end: () => '+=' + (container.scrollWidth - innerWidth),
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const newPanelIndex = Math.floor(progress * numPanels);
//         activeTabIndex = Math.min(newPanelIndex, numPanels - 1);

//         const panelProgress = (progress * numPanels) % 1;
//         tabProgress = panelProgress;

//         videoElems.forEach((video, index) => {
//           if (index === activeTabIndex) {
//             video.play();
//           } else {
//             video.pause();
//             video.currentTime = 0;
//           }
//         });
//       }
//     }
//   });

//   if (!tween.scrollTrigger) return;
//   scrollTriggerInstance = tween.scrollTrigger;

//   const handleTabClick = (index: number) => {
//     const targetElem = document.querySelector(`#video${index}`) as HTMLDivElement;
//     if (!targetElem || !scrollTriggerInstance) return;

//     const totalScroll = scrollTriggerInstance.end - scrollTriggerInstance.start;
//     const totalMovement = container.scrollWidth - innerWidth;

//     const y = Math.round(
//       scrollTriggerInstance.start + (targetElem.offsetLeft / totalMovement) * totalScroll
//     );

//     gsap.to(window, {
//       scrollTo: {
//         y: y,
//         autoKill: false
//       },
//       duration: 1
//     });
//   };

//   const anchorElems = [
//     ...document.querySelectorAll('[data-name="home-banner-tab-anchor"]')
//   ] as HTMLAnchorElement[];

//   anchorElems.forEach((anchorElem, index) => {
//     anchorElem.addEventListener('click', (e) => {
//       e.preventDefault();
//       handleTabClick(index);
//     });
//   });

//   return () => {
//     ScrollTrigger.refresh();
//   };
// });
