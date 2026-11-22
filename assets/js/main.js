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
  var FORM_EMAIL = 'you@yourdomain.com'; // placeholder: replace with your real email

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

  /* 4. Count-up numbers: <span data-count="250">250</span>.
   *    The final number is already in the HTML, so it still shows without JS. */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        var el = entry.target;
        var end = parseFloat(el.getAttribute('data-count'));
        var decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
        var start = null;
        function tick(t) {
          if (!start) start = t;
          var p = Math.min((t - start) / 1400, 1);
          el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        }
        el.textContent = (0).toFixed(decimals);
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* 5. Click-to-play video: <a class="h-video" data-video="YOUTUBE_ID">.
   *    With no ID set, the link simply goes to its href. */
  document.querySelectorAll('[data-video]').forEach(function (box) {
    var id = box.getAttribute('data-video');
    if (!id) return;
    box.addEventListener('click', function (e) {
      e.preventDefault();
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
      f.allow = 'autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      f.title = box.getAttribute('aria-label') || 'Video';
      box.appendChild(f);
    }, { once: true });
  });

  /* 6. Blog share buttons: <a data-share="facebook|linkedin|x">, <button data-share="copy">. */
  var shareUrl = encodeURIComponent(location.href);
  var shareTitle = encodeURIComponent(document.title);
  var shareLinks = {
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl,
    linkedin: 'https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl,
    x: 'https://twitter.com/intent/tweet?url=' + shareUrl + '&text=' + shareTitle
  };
  document.querySelectorAll('[data-share]').forEach(function (el) {
    var type = el.getAttribute('data-share');
    if (shareLinks[type]) {
      el.href = shareLinks[type];
      el.target = '_blank';
      el.rel = 'noopener';
    } else if (type === 'copy') {
      el.addEventListener('click', function () {
        var done = function () {
          var note = el.parentNode.querySelector('.copied');
          if (note) { note.hidden = false; setTimeout(function () { note.hidden = true; }, 2000); }
        };
        if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(done, done);
      });
    }
  });

  /* 7. Contact form. */
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
        var subject = 'Growth session inquiry from ' + (data.get('name') || 'the website');
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
          say('Something went wrong. Please call us on (469) 523-4761 or email ' + FORM_EMAIL + '.', false);
        })
        .then(function () { button.disabled = false; });
    });
  });
})();
