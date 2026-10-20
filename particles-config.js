(function () {
  if (!window.particlesJS) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  particlesJS('particles-js', {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: '#00ff66' },
      shape: { type: 'circle' },
      opacity: { value: 0.45, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00ff66',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: !reduceMotion,
        speed: 1.4,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
})();
