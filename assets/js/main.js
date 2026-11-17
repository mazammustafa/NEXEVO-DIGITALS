/* Indi Creative — site scripts (no dependencies) */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
   * Contact form settings
   * Leave FORM_ENDPOINT empty to open the visitor's email app with the
   * message filled in. To receive submissions directly, create a free
   * form at formspree.io or web3forms.com and paste its URL here.
   * ------------------------------------------------------------------ */
  var FORM_ENDPOINT = '';
  var FORM_EMAIL = 'admin@nexevo digitalsagency.com.au';

  /* 1. Local preview: when opened straight from disk (file://), folder
   *    links like "about-us/" need an explicit index.html. */
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (/^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return;
      var parts = href.split('#');
      var p = parts[0];
      if (p === '' && parts.length > 1) return;
      if (p === '' || p === '.' || p === './') p = './';
      if (/\/$/.test(p)) p += 'index.html';
      a.setAttribute('href', p + (parts[1] !== undefined ? '#' + parts[1] : ''));
    });
  }

  /* 2. Mobile menu: close it after a link is tapped. */
  var menuToggle = document.getElementById('indimt');
  if (menuToggle) {
    document.querySelectorAll('.mpanel a').forEach(function (a) {
      a.addEventListener('click', function () { menuToggle.checked = false; });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') menuToggle.checked = false;
    });
  }

  /* 3. Google reviews carousel. */
  document.querySelectorAll('[data-reviews]').forEach(function (box) {
    var track = box.querySelector('.reviews-track');
    box.querySelectorAll('.reviews-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = track.querySelector('.review-card');
        var step = card ? card.getBoundingClientRect().width + 18 : track.clientWidth;
        var dir = Number(btn.getAttribute('data-dir'));
        var atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
        if (dir > 0 && atEnd) track.scrollTo({ left: 0 });
        else if (dir < 0 && track.scrollLeft <= 4) track.scrollTo({ left: track.scrollWidth });
        else track.scrollBy({ left: dir * step });
      });
    });
    box.querySelectorAll('.review-card').forEach(function (card) {
      var text = card.querySelector('.review-text');
      var more = card.querySelector('.review-more');
      if (text.scrollHeight > text.clientHeight + 2) more.hidden = false;
      more.addEventListener('click', function () {
        var open = card.classList.toggle('is-open');
        more.textContent = open ? 'Show less' : 'Read more';
      });
    });
  });

  /* 4. Contact form. */
  document.querySelectorAll('form[data-contact-form]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type=submit]');
    function say(msg, ok) {
      status.textContent = msg;
      status.className = 'form-status ' + (ok ? 'is-ok' : 'is-err');
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);

      if (!FORM_ENDPOINT) {
        var lines = [];
        data.forEach(function (v, k) { if (v) lines.push(k.charAt(0).toUpperCase() + k.slice(1) + ': ' + v); });
        var subject = 'Growth session enquiry from ' + (data.get('name') || 'the website');
        location.href = 'mailto:' + FORM_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
        say('Your email app should now open with your message ready to send.', true);
        return;
      }

      button.disabled = true;
      fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          form.reset();
          say("Thanks! We've got your message and will be in touch within the hour.", true);
        })
        .catch(function () {
          say('Something went wrong. Please call us on 1300 808 653 or email ' + FORM_EMAIL + '.', false);
        })
        .then(function () { button.disabled = false; });
    });
  });
})();
