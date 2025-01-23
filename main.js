import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// GSAP animations
gsap.from('nav', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: 'power4.out'
});

gsap.from('#home h1', {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power4.out'
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power4.out'
  });
});

// Handle navigation background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('bg-white', 'shadow-lg');
    nav.classList.remove('bg-transparent');
  } else {
    nav.classList.remove('bg-white', 'shadow-lg');
    nav.classList.add('bg-transparent');
  }
});