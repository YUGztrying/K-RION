// K-RION — Shared Navigation, Footer & Mobile Menu
(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html', label: 'Accueil' },
    { href: 'audit.html', label: 'Audit' },
    { href: 'conseil.html', label: 'Conseil' },
    { href: 'formation.html', label: 'Formation' },
    { href: 'a-propos.html', label: '\u00C0 propos' },
  ];

  function isActive(href) {
    return currentPage === href || (currentPage === '' && href === 'index.html');
  }

  // ── NAV ──
  function renderNav() {
    const el = document.getElementById('nav-placeholder');
    if (!el) return;

    const desktopLinks = navLinks
      .map(
        (l) =>
          `<a href="${l.href}" class="${isActive(l.href) ? 'text-white' : 'text-slate-400'} hover:text-white transition-colors">${l.label}</a>`
      )
      .join('\n');

    el.innerHTML = `
    <nav class="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-slate-950/80 border-slate-800/50">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-2 group shrink-0">
          <img src="assets/logo.png" alt="K-RION" class="h-9 w-auto">
        </a>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          ${desktopLinks}
        </div>

        <a href="contact.html" class="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-800 border border-slate-700 hover:border-accent-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_-3px_rgba(177,76,230,0.3)] rounded-md transition-all duration-300">
          Contact
        </a>

        <button id="mobile-menu-btn" class="md:hidden text-slate-300 relative z-[70]" aria-label="Menu">
          <span class="iconify" data-icon="lucide:menu" data-width="24" data-stroke-width="1.5"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed inset-0 z-[60] bg-slate-950/95 backdrop-blur-md transform translate-x-full transition-transform duration-300 md:hidden">
      <div class="flex justify-end p-6">
        <button id="mobile-menu-close" class="text-slate-300">
          <span class="iconify" data-icon="lucide:x" data-width="24" data-stroke-width="1.5"></span>
        </button>
      </div>
      <div class="flex flex-col items-center gap-8 pt-8 text-lg font-medium">
        ${navLinks.map((l) => `<a href="${l.href}" class="${isActive(l.href) ? 'text-white' : 'text-slate-400'} hover:text-white transition-colors">${l.label}</a>`).join('\n')}
        <a href="contact.html" class="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white rounded-md bg-gradient-to-r from-brand-600 to-brand-700 hover:from-accent-600 hover:to-accent-700 transition-all">
          Contact
        </a>
      </div>
    </div>`;

    initMobileMenu();
  }

  // ── MOBILE MENU ──
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const close = document.getElementById('mobile-menu-close');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
    });

    function closeMenu() {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
    }

    if (close) close.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  }

  // ── FOOTER ──
  function renderFooter() {
    const el = document.getElementById('footer-placeholder');
    if (!el) return;

    el.innerHTML = `
    <footer class="border-t py-12 border-slate-800 bg-slate-950 relative z-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <a href="index.html" class="flex items-center gap-2 shrink-0">
            <img src="assets/logo.png" alt="K-RION" class="h-8 w-auto">
          </a>

          <div class="flex items-center gap-4">
            <a href="#" class="text-slate-400 hover:text-accent-400 transition-colors" aria-label="LinkedIn">
              <span class="iconify" data-icon="lucide:linkedin" data-width="20" data-stroke-width="1.5"></span>
            </a>
            <a href="#" class="text-slate-400 hover:text-accent-400 transition-colors" aria-label="Twitter">
              <span class="iconify" data-icon="lucide:twitter" data-width="20" data-stroke-width="1.5"></span>
            </a>
          </div>

          <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="mentions-legales.html" class="hover:text-white transition-colors">Mentions L\u00e9gales</a>
            <a href="cgu.html" class="hover:text-white transition-colors">CGU</a>
          </div>

          <p class="text-xs text-slate-500">
            \u00a9 ${new Date().getFullYear()} K-RION Consulting. Tous droits r\u00e9serv\u00e9s.
          </p>
        </div>
      </div>
    </footer>`;
  }

  // ── INIT ──
  document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderFooter();
  });
})();
