/* ══════════════════════════════════════════════════
   SCRIPT.JS — Memory Website Logic
   Depends on: config.js (must load first)
   ══════════════════════════════════════════════════ */

/* ─── LOCK SCREEN ─────────────────────────────────── */

function createParticles() {
  const container = document.getElementById('lockParticles');
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = [
      `left:${Math.random() * 100}%`,
      `--dur:${6 + Math.random() * 10}s`,
      `--delay:${Math.random() * 8}s`,
      `--drift:${(Math.random() - 0.5) * 80}px`,
      `width:${1 + Math.random() * 3}px`,
      `height:${1 + Math.random() * 3}px`,
      `opacity:0`
    ].join(';');
    container.appendChild(p);
  }
}

function togglePassword() {
  const inp = document.getElementById('pwInput');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function tryUnlock() {
  const val = document.getElementById('pwInput').value;
  const err = document.getElementById('pwError');

  if (val === CONFIG.password) {
    document.getElementById('lockscreen').classList.add('hidden');
    const site = document.getElementById('site');
    site.classList.add('visible');
    setTimeout(() => {
      startTypewriter();
      initMusicBar();
    }, 800);
  } else {
    err.classList.add('show');
    document.getElementById('pwInput').value = '';
    document.getElementById('pwInput').focus();
    setTimeout(() => err.classList.remove('show'), 3000);
  }
}

/* ─── TYPEWRITER ──────────────────────────────────── */

function startTypewriter() {
  const el   = document.getElementById('typewriterText');
  const sign = document.getElementById('letterSign');

  document.getElementById('letterDate').textContent = CONFIG.letter.date;

  const text   = CONFIG.letter.text;
  const chars  = [...text];
  let i        = 0;

  const cursor = document.createElement('span');
  cursor.id    = 'typewriter-cursor';
  el.appendChild(cursor);

  function type() {
    if (i < chars.length) {
      const ch = chars[i];
      if (ch === '\n') {
        cursor.before(document.createElement('br'));
        cursor.before(document.createElement('br'));
      } else {
        cursor.before(document.createTextNode(ch));
      }
      i++;
      const delay = ch === '.' || ch === ',' ? 60
                  : ch === '\n'              ? 300
                  : 28 + Math.random() * 18;
      setTimeout(type, delay);
    } else {
      cursor.remove();
      sign.style.opacity = '1';
    }
  }

  setTimeout(type, 600);
}

/* ─── GALLERY ─────────────────────────────────────── */

function buildGallery() {
  const grid = document.getElementById('photoGrid');

  photos.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.onclick   = () => openLightbox(i);

    const thumbContent = p.src
      ? `<img src="${p.src}" alt="${p.caption}" style="width:100%;height:100%;object-fit:cover;display:block;">`
      : `<span style="font-size:56px">${p.emoji}</span>`;

    card.innerHTML = `
      <div class="photo-placeholder"
           style="background:${p.bg};min-height:${p.tall ? 260 : 180}px">
        ${thumbContent}
      </div>
      <div class="photo-caption">
        <div class="photo-caption-title">${p.caption}</div>
        <div class="photo-caption-meta">${p.date} · ${p.location}</div>
      </div>`;

    grid.appendChild(card);
  });
}

let currentPhoto = 0;

function openLightbox(i) {
  currentPhoto = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  currentPhoto = (currentPhoto + dir + photos.length) % photos.length;
  updateLightbox();
}

function updateLightbox() {
  const p = photos[currentPhoto];

  const lbPhoto = document.getElementById('lbPhoto');
  if (p.src) {
    lbPhoto.innerHTML = `<img src="${p.src}" alt="${p.caption}"
      style="width:100%;max-height:65vh;object-fit:contain;border-radius:12px;">`;
    lbPhoto.style.background = 'transparent';
  } else {
    lbPhoto.innerHTML = `<span style="font-size:80px">${p.emoji}</span>`;
    lbPhoto.style.background = p.bg;
  }

  document.getElementById('lbCaption').textContent = p.desc;
  document.getElementById('lbMeta').textContent    = `${p.caption} · ${p.date} · ${p.location}`;
}

/* ─── TIMELINE ────────────────────────────────────── */

function buildTimeline() {
  const track = document.getElementById('timelineTrack');

  timeline.forEach(entry => {
    const el       = document.createElement('div');
    el.className   = 'timeline-entry';
    el.innerHTML   = `
      <div class="timeline-card">
        <span class="timeline-emoji">${entry.emoji}</span>
        <div class="timeline-date">${entry.date}</div>
        <div class="timeline-title">${entry.title}</div>
        <div class="timeline-text">${entry.text}</div>
      </div>
      <div class="timeline-dot"></div>
      <div style="flex:1"></div>`;
    track.appendChild(el);
  });

  observeTimeline();
}

function observeTimeline() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.timeline-entry').forEach(el => obs.observe(el));
}

/* ─── LETTERS ─────────────────────────────────────── */

function buildLetters() {
  const grid = document.getElementById('envelopesGrid');

  letters.forEach((ltr, i) => {
    const wrap   = document.createElement('div');
    wrap.className = 'envelope-wrap';

    const env    = document.createElement('div');
    env.className = 'envelope';
    env.id        = `env-${i}`;

    env.innerHTML = `
      <div class="env-flap-area" onclick="toggleEnvelope(${i})">
        <div>
          <div class="env-occasion">${ltr.occasion}</div>
          <div class="env-label">${ltr.label}</div>
        </div>
        <div class="env-seal" id="seal-${i}">${ltr.seal}</div>
      </div>
      <div class="env-body" id="env-body-${i}">
        <div class="env-letter-content">
          <div class="env-letter-opening">${ltr.salutation}</div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:17px;line-height:1.9;color:var(--ink-soft)">
            ${ltr.body.replace(/\n/g, '<br><br>')}
          </div>
          <div class="env-letter-close">${ltr.closing} ✦</div>
        </div>
      </div>`;

    wrap.appendChild(env);
    grid.appendChild(wrap);
  });
}

function toggleEnvelope(i) {
  document.getElementById(`env-body-${i}`).classList.toggle('open');
  document.getElementById(`env-${i}`).classList.toggle('open-env');
}

/* ─── STICKY NOTES ────────────────────────────────── */

function buildStickies() {
  const grid = document.getElementById('stickyGrid');

  stickies.forEach(s => {
    const el       = document.createElement('div');
    el.className   = 'sticky';
    el.style.cssText = `background:${s.color};transform:rotate(${s.rotate})`;
    el.innerHTML   = `
      <div class="sticky-text">${s.text}</div>
      <div class="sticky-by">— a little note for you</div>`;
    grid.appendChild(el);
  });
}

/* ─── VIDEOS ──────────────────────────────────────── */

function buildVideos() {
  const grid = document.getElementById('videoGrid');

  videos.forEach(v => {
    const card     = document.createElement('div');
    card.className = 'video-card';

    // If a real src is provided, embed it; otherwise show placeholder modal
    if (v.src) {
      card.innerHTML = `
        <div class="video-thumb">
          <iframe src="${v.src}" style="width:100%;height:100%;border:none;"
            allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
        <div class="video-info">
          <div class="video-title">${v.title}</div>
          <div class="video-desc">${v.desc}</div>
        </div>`;
    } else {
      card.onclick   = () => document.getElementById('videoModal').classList.add('open');
      card.innerHTML = `
        <div class="video-thumb" style="background:linear-gradient(135deg,#2d1018,#5a2030)">
          <span style="font-size:56px;opacity:0.6">${v.emoji}</span>
          <div class="video-play-btn">▶</div>
        </div>
        <div class="video-info">
          <div class="video-title">${v.title}</div>
          <div class="video-desc">${v.desc}</div>
        </div>`;
    }

    grid.appendChild(card);
  });
}

/* ─── STARS CANVAS ────────────────────────────────── */

function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx    = canvas.getContext('2d');
  const stars  = [];

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 200; i++) {
    stars.push({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      r:     Math.random() * 1.5 + 0.3,
      a:     Math.random(),
      speed: 0.003 + Math.random() * 0.007,
      phase: Math.random() * Math.PI * 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = Date.now() / 1000;
    stars.forEach(s => {
      const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.speed * 10 + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,221,228,${alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

/* ─── FLOATING MEMORY WORDS ───────────────────────── */

function initFloatingWords() {
  const container = document.getElementById('floatingWords');
  const words     = [
    "laughter", "late nights", "your voice", "home", "the long way around",
    "always", "remember?", "that one time", "still here", "together",
    "thank you", "I see you", "beloved", "forever", "our song", "that look you give"
  ];

  words.forEach((w, i) => {
    const el       = document.createElement('div');
    el.className   = 'floating-memory';
    el.textContent = w;
    el.style.cssText = [
      `top:${10 + Math.random() * 80}%`,
      `--mf-dur:${18 + Math.random() * 14}s`,
      `--mf-delay:${i * 2.5}s`,
      `--mf-drift:${(Math.random() - 0.5) * 60}px`
    ].join(';');
    container.appendChild(el);
  });
}

/* ─── MUSIC ───────────────────────────────────────── */

let musicOn      = false;
let currentTrack = 0;
const audio      = document.getElementById('bgAudio');

function initMusicBar() {
  setTimeout(() => {
    document.getElementById('musicBar').classList.add('visible');
    updateTrackInfo();
  }, 2000);
}

function updateTrackInfo() {
  const t = CONFIG.music[currentTrack];
  document.getElementById('trackName').textContent   = t.title;
  document.getElementById('trackArtist').textContent = t.artist;
  if (t.src) audio.src = t.src;
}

function toggleMusic() {
  if (!musicOn) {
    if (CONFIG.music[currentTrack].src) audio.play().catch(() => {});
    musicOn = true;
    document.getElementById('musicIcon').textContent  = '♫';
    document.getElementById('musicLabel').textContent = 'Pause';
    document.getElementById('discIcon').classList.add('playing');
    document.getElementById('playPauseBtn').textContent = '⏸';
    document.getElementById('musicBar').classList.add('visible');
  } else {
    audio.pause();
    musicOn = false;
    document.getElementById('musicIcon').textContent  = '♪';
    document.getElementById('musicLabel').textContent = 'Play Music';
    document.getElementById('discIcon').classList.remove('playing');
    document.getElementById('playPauseBtn').textContent = '▶';
  }
}

function togglePlay() { toggleMusic(); }

function nextTrack() {
  currentTrack = (currentTrack + 1) % CONFIG.music.length;
  updateTrackInfo();
  if (musicOn && CONFIG.music[currentTrack].src) audio.play().catch(() => {});
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + CONFIG.music.length) % CONFIG.music.length;
  updateTrackInfo();
  if (musicOn && CONFIG.music[currentTrack].src) audio.play().catch(() => {});
}

function hideMusicBar() {
  document.getElementById('musicBar').classList.remove('visible');
}

/* ─── SCROLL EVENTS ───────────────────────────────── */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 60);

  const btn = document.getElementById('scrollTop');
  btn.classList.toggle('visible', window.scrollY > 400);
});

/* ─── SMOOTH NAV ──────────────────────────────────── */

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── KEYBOARD ────────────────────────────────────── */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLightbox();
    document.getElementById('videoModal').classList.remove('open');
  }
  if (document.getElementById('lightbox').classList.contains('open')) {
    if (e.key === 'ArrowLeft')  lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  }
  if (document.activeElement === document.getElementById('pwInput') && e.key === 'Enter') {
    tryUnlock();
  }
});

/* ─── LIGHTBOX BACKGROUND CLICK ───────────────────── */

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

/* ─── INIT ────────────────────────────────────────── */

createParticles();
buildGallery();
buildTimeline();
buildLetters();
buildStickies();
buildVideos();
initStars();
initFloatingWords();