
gsap.registerPlugin(TextPlugin);
  gsap.to("#text", {
    duration: 3,
    text: {
      value: "More than just a website.",
      scrambleText: true
    },
    ease: "power1.inOut",
    yoyo:true,
    repeat:-1
  });
gsap.registerPlugin(TextPlugin);
  gsap.to("#note", {
    duration: 3,
    text: {
      value: "To my special one",
      scrambleText: true
    },
    ease: "power1.inOut",
    yoyo:true,
    repeat:-1
  });
  
gsap.registerPlugin(ScrollTrigger);

// Scroll up: smooth fade out, shrink, and move up
gsap.fromTo(".box",
  { opacity: 1, scale: 1, y: 0 },
  {
    opacity: 0,
    scale: 0.5,
    y: -200,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box",
      start: "top center",
      end: "bottom top",
      scrub: 1 // makes it smooth while scrolling
    }
  }
);

// Scroll down: smooth fade in, expand, and move into place
gsap.fromTo(".box",
  { opacity: 0, scale: 0.5, y: 200 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box",
      start: "top bottom",
      end: "center center",
      scrub: 1 // smooth effect
    }
  }
);
const paths = document.querySelectorAll('path');

paths.forEach(path => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap.to(path.style, {
    strokeDashoffset: 0,
    duration: 3,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    delay: 0.5
  });
});