
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
/*gsap.registerPlugin(TextPlugin);
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
  */
  
/*gsap.registerPlugin(ScrollTrigger);


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
      scrub: 1 
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
*/
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
gsap.registerPlugin();

/*const el = document.getElementById("note");
const text = el.textContent;
el.textContent = "";

// Split into spans
text.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  el.appendChild(span);
});

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl.from("#note span", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.05,
  ease: "power2.out"
}).to("#note span", {
  opacity: 0,
  y: -30,
  duration: 0.6,
  stagger: 0.05,
  ease: "power2.in",
  delay: 1
});*/



const swiper = new Swiper('.swiper', {

  loop: true,
  effect:'fade',
  autoplay:{
    delay:5000,
    disableOnInteraction:false,
  },
  fadeEffect:{
    crossFade:true
  }
});
const swiper2 = new Swiper('.swiper2', {
  loop:false,
  effect: 'fade',
  autoplay:false,
  slidesPerView:1,
  allowTouchMove:false,
  fadeEffect: {
    crossFade: true,
  },
});

// Button event for the proposal swiper
document.getElementById('proposal-btn').addEventListener('click', () => {
  swiper2.slideNext();
});