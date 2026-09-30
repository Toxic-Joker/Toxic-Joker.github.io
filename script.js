(function () {
  var lines = [
    'Red Team Tooling & AI Orchestration',
    'Hardening / Crypto / Network Security',
    'Deterministic risk scoring, LLM kept on a leash'
  ];
  var el = document.getElementById('typed');
  if (!el) return;

  var lineIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function tick() {
    var current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        return setTimeout(tick, 1400);
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? 25 : 45);
  }

  tick();
})();
