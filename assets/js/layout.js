/* ==========================================================
   Global header & footer: edit them HERE and every page updates.

   Each page includes this file twice, where the header and footer go:
     <script src="assets/js/layout.js" data-part="header"></script>
     <script src="assets/js/layout.js" data-part="footer"></script>
   (inner pages use ../ or ../../ in front of assets/, as with style.css)

   Links: write them relative to the site root.
     ${R}about-us/   -> becomes ../about-us/ on an inner page
     ${H}            -> the home page
   ========================================================== */
(function () {
  'use strict';
  var script = document.currentScript;
  if (!script) return;
  var R = script.getAttribute('src').replace(/assets\/js\/layout\.js.*$/, '');
  var H = R || './';
  var part = script.getAttribute('data-part');

  var parts = {

/* ---------------- HEADER ---------------- */
header: `<header class="page-section site-header"><div class="page-section__inner">
<div class="page-block site-header__content"><div class="nexevohd">
<a class="skip" href="#content">Skip to content</a>
<input class="mtoggle" type="checkbox" id="nexevomt" aria-label="Open menu">
<div class="bar">
<a class="logo" href="${H}">NEXEVO <b>DIGITAL</b></a>
<nav class="nav" aria-label="Main">
<a class="toplink" href="${H}">Home</a>
<a class="toplink" href="${R}about-us/">About</a>
<div class="drop"><span class="toplink" tabindex="0">Services <span class="car"></span></span>
<div class="panel mini"><ul><li><a href="${R}services/website-development/">Web Design</a></li><li><a href="${R}services/web-development/">Web Development</a></li><li><a href="${R}services/website-development/ecommerce/">Ecommerce Website Development</a></li><li><a href="${R}services/shopify-website-development/">Shopify Website Development</a></li><li><a href="${R}services/social-media-management/">Social Media Management</a></li><li><a href="${R}services/search-engine-optimization/">SEO</a></li><li><a href="${R}services/logo-design/">Logo Design</a></li><li><a href="${R}services/google-ads/">Google Ads</a></li></ul></div></div>
<a class="toplink" href="${R}blog/">Blog</a>
<a class="toplink" href="${R}contact-us/">Contact</a>
</nav>
<div class="hright">
<a class="phone" href="tel:+14695234761">(469) 523-4761</a>
<a class="cta" href="${R}contact-us/">Let's Talk</a>
<label class="burger" for="nexevomt" aria-label="Menu"><i></i><i></i><i></i></label>
</div>
</div>
<div class="mpanel"><div class="mtop"><span class="mbrand">NEXEVO <b>DIGITAL</b></span><label class="mclose" for="nexevomt" aria-label="Close menu">✕</label></div><div class="mh">Services</div><a href="${R}services/website-development/">Web Design</a><a href="${R}services/web-development/">Web Development</a><a href="${R}services/website-development/ecommerce/">Ecommerce Website Development</a><a href="${R}services/shopify-website-development/">Shopify Website Development</a><a href="${R}services/social-media-management/">Social Media Management</a><a href="${R}services/search-engine-optimization/">SEO</a><a href="${R}services/logo-design/">Logo Design</a><a href="${R}services/google-ads/">Google Ads</a><div class="mh">Company</div><a href="${H}">Home</a><a href="${R}about-us/">About Us</a><a href="${R}blog/">Blog</a><a href="${R}contact-us/">Contact Us</a><a href="tel:+14695234761">Call (469) 523-4761</a><a class="mcta" href="${R}contact-us/">Let's chat</a></div>
</div></div>
</div></header>`,

/* ---------------- FOOTER ---------------- */
footer: `<footer class="page-section site-footer"><div class="page-section__inner">
<div class="page-block site-footer__content"><div class="nexevoft">
<div class="wrap grid">
<div class="brand">
<a class="logo" href="${H}">NEXEVO <b>DIGITAL</b></a>
<p>The digital marketing agency for American service businesses. New York based, nationwide.</p>
<div class="fsocial"><a href="#" aria-label="Facebook"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 8.5V6.8c0-.8.5-1 .9-1H17V2.1L14.1 2C10.9 2 10.2 4.4 10.2 6v2.5H8v3.8h2.2V22H14v-9.7h2.9l.4-3.8H14z"/></svg></a><a href="#" aria-label="LinkedIn"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg></a><a href="#" aria-label="Instagram"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a></div>
<div class="fctas"><a class="cta" href="${R}contact-us/">Let's chat</a></div>
</div>
<div class="col"><strong>Quick links</strong><a href="${H}">Home</a><a href="${R}about-us/">About Us</a><a href="${R}blog/">Blog</a><a href="${R}contact-us/">Contact Us</a></div>
<div class="col"><strong>Services</strong><a href="${R}services/website-development/">Web Design</a><a href="${R}services/web-development/">Web Development</a><a href="${R}services/website-development/ecommerce/">Ecommerce Websites</a><a href="${R}services/shopify-website-development/">Shopify Websites</a><a href="${R}services/search-engine-optimization/">SEO</a><a href="${R}services/google-ads/">Google Ads</a><a href="${R}services/social-media-management/">Social Media Management</a><a href="${R}services/logo-design/">Logo Design</a></div>
<div class="col fcontact"><strong>Contact info</strong>
<a href="tel:+14695234761"><i><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></i><span>(469) 523-4761</span></a>
<div><i><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span>3119 Magnolia Blossom Ln,<br>Richmond, TX 77469, USA</span></div>
<div><i><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></i><span>Mon to Fri, 9am to 5pm</span></div>
</div>
</div>
<div class="bot"><div class="wrap botin">
<span>© 2026 Nexevo Digital. All rights reserved.</span>
<span class="legal"><a href="${R}privacy-policy/">Privacy Policy</a><a href="${R}tnc/">Terms &amp; Conditions</a></span>
</div></div>
</div></div>
</div></footer>`,

/* ---------------- GET IN TOUCH (contact block + form) ---------------- */
contact: `<section class="page-section h-contact-sec"><div class="page-section__inner">
<div class="page-block"><div class="nexevo on-dark s-b9d8f8c"><div class="glow glow-c"></div><div class="wrap h-contact s-dbfdae9">
<div>
<div class="eyebrow">Contact</div>
<h2 class="s-2de3846">Get in touch <span class="acc">with us</span></h2>
<p class="lead s-7ddf9dc">Fill out the form and our team will get back to you within the hour. No pressure, no obligation.</p>
<div class="h-cinfo">
<a href="tel:+14695234761"><i><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></i><span><small>Phone</small><strong>(469) 523-4761</strong></span></a>
<a href="mailto:you@yourdomain.com"><i><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></i><span><small>Email</small><strong>you@yourdomain.com</strong></span></a>
<div><i><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span><small>Office</small><strong>3119 Magnolia Blossom Ln, Richmond, TX 77469, USA</strong></span></div>
</div>
</div>
<form class="h-form" aria-label="Contact form" data-contact-form="">
<div><label for="hf-name">Full name</label><input type="text" id="hf-name" name="name" placeholder="Your name" required></div>
<div><label for="hf-email">Email</label><input type="email" id="hf-email" name="email" placeholder="you@business.com" required></div>
<div><label for="hf-phone">Phone</label><input type="tel" id="hf-phone" name="phone" placeholder="(555) 555-5555"></div>
<div><label for="hf-website">Website</label><input type="text" id="hf-website" name="website" placeholder="yourbusiness.com"></div>
<div class="full"><label for="hf-message">How can we help?</label><textarea id="hf-message" name="message" rows="5" placeholder="Tell us a bit about your business and what you're after"></textarea></div>
<div class="full"><button class="btn" type="submit">Send it through</button><p class="form-status" role="status"></p></div>
</form>
</div></div></div>
</div></section>`

  };

  if (parts[part]) script.insertAdjacentHTML('afterend', parts[part]);
})();
