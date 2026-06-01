/* Shared nav + footer — edit here, applies to all pages */

const _NAV_HTML = `<div id="navigation">
  <div aria-hidden="true" class="background-color-div"></div>
  <div class="container">
    <a class="logo" aria-label="retour à l'accueil" href="/">
      <img class="light" aria-hidden="true" src="/images/logo-light.png" decoding="async" alt="BoleroTraker logo" width="221" height="66">
      <img class="dark" aria-hidden="true" src="/images/logo-blue.png" decoding="async" loading="lazy" alt="BoleroTraker logo" width="221" height="66">
    </a>
    <button type="button" class="hamburger-menu" aria-expanded="false" aria-controls="navbar-menu">
      <span aria-hidden="true"></span>
    </button>
    <nav id="navbar-menu" aria-label="navigation principale">
      <ul>
        <li id="home"><a href="/">Accueil</a></li>
        <li class="dropdown" id="services">
          <a class="dropdown-toggle" href="/services.html" tabindex="0" aria-expanded="false" aria-controls="services-submenu">Services</a>
          <ul class="dropdown-menu" id="services-submenu">
            <li><a class="dropdown-menu-item" href="/services.html#installations">
              <span class="dmi-title">Installations t&eacute;l&eacute;matiques</span>
              <span class="dmi-desc">GPS, cam&eacute;ras &amp; capteurs sur site</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#solutions-embarquees">
              <span class="dmi-title">Solutions embarqu&eacute;es</span>
              <span class="dmi-desc">Int&eacute;gration &eacute;lectronique de flotte</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#conception">
              <span class="dmi-title">Conception de solutions</span>
              <span class="dmi-desc">Architecture t&eacute;l&eacute;matique sur mesure</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#vente-materiel">
              <span class="dmi-title">Vente de mat&eacute;riel</span>
              <span class="dmi-desc">Trackers 4G, cam&eacute;ras, capteurs</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#maintenance">
              <span class="dmi-title">Maintenance &amp; support</span>
              <span class="dmi-desc">Contrats &amp; interventions terrain</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#formation">
              <span class="dmi-title">Formation</span>
              <span class="dmi-desc">Pour vos &eacute;quipes &amp; op&eacute;rateurs</span>
            </a></li>
            <li><a class="dropdown-menu-item" href="/services.html#carburant">
              <span class="dmi-title">Surveillance carburant</span>
              <span class="dmi-desc">Capteurs, alertes &amp; analyse de consommation</span>
            </a></li>
          </ul>
        </li>
        <li id="about-us"><a href="/about.html">&Agrave; propos</a></li>
        <li id="contact"><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
    <button id="dark-mode-toggle" aria-label="Basculer le mode sombre">
      <span class="dmt-track">
        <span class="dmt-thumb">
          <svg class="dmt-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="dmt-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </span>
      </span>
    </button>
  </div>
</div>`;

const _FOOTER_HTML = `<footer id="footer">
  <div class="container">
    <div class="left-section">
      <a class="logo" href="/"><img loading="lazy" decoding="async" src="/images/logo-light.png" alt="logo" width="221" height="66"></a>
    </div>
    <div class="right-section">
      <div class="lists">
        <ul>
          <li><h2>Navigation</h2></li>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about.html">&Agrave; propos</a></li>
          <li><a href="/services.html">Nos services</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
        <ul>
          <li><h2>Services</h2></li>
          <li><a href="/services.html#installations">Installations t&eacute;l&eacute;matiques</a></li>
          <li><a href="/services.html#solutions-embarquees">Solutions embarqu&eacute;es</a></li>
          <li><a href="/services.html#conception">Conception de solutions</a></li>
          <li><a href="/services.html#vente-materiel">Vente de mat&eacute;riel</a></li>
          <li><a href="/services.html#maintenance">Maintenance &amp; support</a></li>
          <li><a href="/services.html#formation">Formation</a></li>
          <li><a href="/services.html#carburant">Surveillance carburant</a></li>
        </ul>
        <ul>
          <li><h2>Contact</h2></li>
          <li><a href="/contact.html">Conakry, Guin&eacute;e</a></li>
          <li><a href="tel:+224610050505">T: +224 610 05 05 05</a></li>
          <li><a href="mailto:contact@bolerotraker.com">contact@bolerotraker.com</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="credit">
    <span>Con&ccedil;u et cod&eacute; par</span>
    <a href="https://www.trace365.net" target="_blank" rel="noopener">Trace365.net</a>
    <span class="copyright"> Copyright 2026 - Present</span>
  </div>
</footer>`;

(function () {
  var navPH = document.getElementById('nav-placeholder');
  var footerPH = document.getElementById('footer-placeholder');
  if (navPH) navPH.outerHTML = _NAV_HTML;
  if (footerPH) footerPH.outerHTML = _FOOTER_HTML;

  /* Set active nav link based on current page */
  var path = window.location.pathname;
  var activeEl = null;
  if (path === '/' || /\/index\.html?$/.test(path)) {
    activeEl = document.querySelector('#home a');
  } else if (/\/services\.html/.test(path)) {
    activeEl = document.querySelector('#services .dropdown-toggle');
  } else if (/\/about\.html/.test(path)) {
    activeEl = document.querySelector('#about-us a');
  } else if (/\/contact\.html/.test(path)) {
    activeEl = document.querySelector('#contact a');
  }
  if (activeEl) activeEl.classList.add('active');

  /* Scroll class for nav animation */
  document.addEventListener('scroll', function () {
    document.body.classList.toggle('scroll', document.documentElement.scrollTop >= 100);
  });
})();
