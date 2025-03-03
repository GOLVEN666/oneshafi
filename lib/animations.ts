// lib/animations.ts

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

export const initTextAnimation = (element: HTMLElement) => {
  const text = new SplitType(element, { types: "chars, words" })

  gsap.from(text.chars, {
    opacity: 0,
    y: 20,
    rotateX: -90,
    stagger: 0.02,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
  })
}

export const initParallaxImage = (element: HTMLElement) => {
  gsap.to(element, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })
}

export const morphPath = (element: SVGPathElement, newPath: string) => {
  gsap.to(element, {
    attr: { d: newPath },
    duration: 1,
    ease: "power2.inOut",
  })
}

