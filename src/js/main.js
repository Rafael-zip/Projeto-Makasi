import { initMobileNav } from './nav.js';
import { initNewsletter } from './newsletter.js';
import { initReleasesHighlight, initReleasesScroll } from './releases.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNewsletter();
  initReleasesScroll();
  initReleasesHighlight();
});
