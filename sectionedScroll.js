gsap.registerPlugin(ScrollTrigger);
function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 0.5,
  });

  if (anim) {
    anim.restart();
  }
}

gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    onEnter: () => goToSection(i),
  });

  ScrollTrigger.create({
    trigger: section,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});
