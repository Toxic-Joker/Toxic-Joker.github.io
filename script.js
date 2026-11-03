(function () {
  var el = document.getElementById('typed');
  if (!el) return;

  var lines = [];
  var lineIndex = 0;
  var charIndex = 0;
  var deleting = false;
  var timer = null;

  function currentLines() {
    var dict = window.TRANSLATIONS && window.TRANSLATIONS[window.I18N_LANG || 'en'];
    return (dict && dict['hero.lines']) || ['Red Team Tooling & AI Orchestration'];
  }

  function tick() {
    var current = lines[lineIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        timer = setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
    }
    timer = setTimeout(tick, deleting ? 25 : 45);
  }

  function restart() {
    clearTimeout(timer);
    lines = currentLines();
    lineIndex = 0;
    charIndex = 0;
    deleting = false;
    el.textContent = '';
    tick();
  }

  window.addEventListener('i18n:change', restart);
  restart();
})();
