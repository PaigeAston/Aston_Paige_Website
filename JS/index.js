gsap.registerPlugin(ScrollTrigger); 

gsap.from('#highlight', {
    duration: 3.5,
    ease: "back.out(1.7)",
    xPercent: 250,
    scrollTrigger: {
        trigger: '.highlighted',
        start: 'top 80%',
    }
});
gsap.from('#seating', {
    duration: 2.5,
    ease: "power4.out",
    xPercent: -250,
    scrollTrigger: {
        trigger: '.seating',
    }
});