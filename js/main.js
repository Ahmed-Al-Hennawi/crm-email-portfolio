gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  gsap.set(".reveal-up", {
    y: 32,
    opacity: 0
  });

  gsap.to(".reveal-up", {
    y: 0,
    opacity: 1,
    duration: 1.05,
    ease: "power3.out",
    stagger: 0.11,
    delay: 0.15
  });

  gsap.to(".floating-panel", {
    y: -18,
    rotate: 2,
    duration: 4.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".floating-soft", {
    y: -14,
    duration: 3.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: 0.35
  });

  gsap.to(".phone-frame", {
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1.1
    }
  });

  gsap.from(".reveal-left", {
    x: -42,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".reveal-left",
      start: "top 78%"
    }
  });

  gsap.from(".reveal-right", {
    x: 42,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".reveal-right",
      start: "top 78%"
    }
  });

  gsap.from(".pain-list div", {
    y: 18,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.08,
    scrollTrigger: {
      trigger: ".pain-list",
      start: "top 82%"
    }
  });

  gsap.from(".solution-pill", {
    y: 18,
    opacity: 0,
    scale: 0.96,
    duration: 0.75,
    ease: "power3.out",
    stagger: 0.07,
    scrollTrigger: {
      trigger: ".solution-stack",
      start: "top 82%"
    }
  });
}

document.querySelectorAll(".tap-button").forEach((button) => {
  button.addEventListener("pointerdown", () => {
    gsap.to(button, {
      scale: 0.96,
      duration: 0.12,
      ease: "power2.out"
    });
  });

  button.addEventListener("pointerup", () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.25,
      ease: "elastic.out(1, 0.45)"
    });
  });

  button.addEventListener("pointerleave", () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out"
    });
  });
});

// Email cards + contact scroll animations
if (!prefersReducedMotion) {
  gsap.set(".email-preview-card", {
    opacity: 0,
    y: 34,
    scale: 0.96,
    filter: "blur(10px)"
  });

  ScrollTrigger.batch(".email-preview-card", {
    start: "top 88%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08
      });
    }
  });

  gsap.set(".contact-card", {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: "blur(12px)"
  });

  ScrollTrigger.create({
    trigger: ".contact-card",
    start: "top 86%",
    once: true,
    onEnter: () => {
      gsap.to(".contact-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out"
      });
    }
  });

  // Small premium hover movement for email cards
  document.querySelectorAll(".email-preview-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -4;
      const rotateY = ((x / rect.width) - 0.5) * 4;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.35,
        ease: "power2.out",
        transformPerspective: 900
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.45,
        ease: "power3.out"
      });
    });
  });

  ScrollTrigger.refresh();
}