(function () {
  var STORAGE_KEY = 'portfolio-lang';
  var SUPPORTED = ['en', 'fr'];

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;

    var browserLangs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || 'en'];

    for (var i = 0; i < browserLangs.length; i++) {
      var code = String(browserLangs[i]).slice(0, 2).toLowerCase();
      if (SUPPORTED.indexOf(code) !== -1) return code;
    }
    return 'en';
  }

  function applyLang(lang) {
    var dict = window.TRANSLATIONS[lang] || window.TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    if (dict['meta.title']) {
      document.title = dict['meta.title'].replace(/&amp;/g, '&');
    }
    if (dict['meta.description']) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);
    }

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    window.I18N_LANG = lang;
    document.documentElement.classList.remove('i18n-loading');
    window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  window.I18N_LANG = detectLang();
  applyLang(window.I18N_LANG);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.lang-toggle [data-lang]');
    if (!btn) return;
    setLang(btn.getAttribute('data-lang'));
  });
})();
