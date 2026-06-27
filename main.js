// --- NAV SCROLL ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- MOBILE MENU ---
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// --- SCROLL REVEAL ---
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// --- PROJECT OVERLAY ---
const overlay = document.getElementById('projectOverlay');
const overlayContent = document.getElementById('overlayContent');
let lastFocused = null;

function openProject(id) {
  const data = projectData[id];
  if (!data) return;

  lastFocused = document.activeElement;

  // Build media section
  let mediaHTML = '';
  if (data.videoUrl) {
    mediaHTML = `<div class="overlay-media"><iframe src="${data.videoUrl}" allowfullscreen></iframe></div>`;
  } else if (data.mainImage) {
    mediaHTML = `<div class="overlay-media"><img src="${data.mainImage}" alt="${data.title}" loading="lazy" /></div>`;
  }

  // Build screenshots
  let screenshotsHTML = '';
  if (data.screenshots && data.screenshots.length > 0) {
    screenshotsHTML = `<div class="overlay-screenshots">
      ${data.screenshots.map(src => `<img src="${src}" alt="Screenshot" loading="lazy" />`).join('')}
    </div>`;
  }

  // Build details
  const detailsHTML = data.details
    ? `<div class="overlay-details">
        ${data.details.map(d => `
          <div class="overlay-detail-item">
            <strong>${d.label}</strong>
            <span>${d.value}</span>
          </div>`).join('')}
      </div>`
    : '';

  // Build tags
  const tagsHTML = data.tags
    ? `<div class="overlay-tags">${data.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>`
    : '';

  // Build description (handle newlines)
  const descHTML = data.description
    .split('\n\n')
    .map(p => `<p class="overlay-desc">${p.trim()}</p>`)
    .join('');

  // Build task video section
  let taskVideoHTML = '';
  if (data.taskVideoUrl && data.taskVideoUrl !== 'VOTRE_URL_ICI') {
    const timecodesHTML = data.taskTimecodes && data.taskTimecodes.length > 0
      ? `<div class="overlay-timecodes">
          ${data.taskTimecodes.map(tc => {
            const [min, sec] = tc.time.split(':').map(Number);
            const totalSec = min * 60 + sec;
            return `<div class="overlay-timecode-item" onclick="jumpToTime('overlay-task-iframe', ${totalSec})" role="button" tabindex="0">
              <span class="overlay-timecode-time">${tc.time}</span>
              <span class="overlay-timecode-label">${tc.label}</span>
            </div>`;
          }).join('')}
        </div>`
      : '';

    taskVideoHTML = `
      <div class="overlay-task-section">
        <h3 class="overlay-task-title">${data.taskVideoLabel || 'Mes contributions'}</h3>
        <div class="overlay-media overlay-task-video">
          <iframe id="overlay-task-iframe" src="${data.taskVideoUrl}" allowfullscreen></iframe>
        </div>
        ${timecodesHTML}
        ${data.enviroSection ? `
        <div class="overlay-enviro">
          <h3 class="overlay-task-title" style="margin-top:1.5rem;">${data.enviroSection.title}</h3>
          <p class="overlay-desc">${data.enviroSection.text}</p>
          <div class="enviro-carousel" id="enviro-carousel">
            <button class="carousel-arrow carousel-prev" onclick="carouselMove(-1)" aria-label="Précédent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div class="carousel-track-wrap">
              <div class="carousel-track" id="carousel-track">
                ${data.enviroSection.images.map((src, i) => `
                  <div class="carousel-slide">
                    <img src="${src}" alt="Narration environnementale ${i + 1}" loading="lazy" />
                  </div>`).join('')}
              </div>
            </div>
            <button class="carousel-arrow carousel-next" onclick="carouselMove(1)" aria-label="Suivant">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <div class="carousel-dots" id="carousel-dots">
              ${data.enviroSection.images.map((_, i) => `
                <button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="carouselGo(${i})" aria-label="Image ${i + 1}"></button>`).join('')}
            </div>
          </div>
        </div>` : ''}
      </div>`;
  }

  // Build CTA
  const linkHTML = data.link
    ? `<div class="overlay-actions">
        <a href="${data.link}" target="_blank" rel="noopener" class="btn-primary">${data.linkLabel || 'Voir le projet'}</a>
      </div>`
    : '';

  overlayContent.innerHTML = `
    ${mediaHTML}
    <p class="overlay-eyebrow">${data.eyebrow}</p>
    <h2 class="overlay-title">${data.title}</h2>
    ${tagsHTML}
    ${descHTML}
    ${detailsHTML}
    ${screenshotsHTML}
    ${taskVideoHTML}
    ${linkHTML}
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  carouselIndex = 0;

  // Add backdrop click to close
  overlay.onclick = (e) => {
    if (e.target === overlay) closeProject();
  };
}

function closeProject() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

// --- CAROUSEL ---
let carouselIndex = 0;

function carouselMove(dir) {
  const track = document.getElementById('carousel-track');
  if (!track) return;
  const total = track.children.length;
  carouselIndex = (carouselIndex + dir + total) % total;
  carouselUpdate();
}

function carouselGo(index) {
  carouselIndex = index;
  carouselUpdate();
}

function carouselUpdate() {
  const track = document.getElementById('carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track) return;
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === carouselIndex));
}

function jumpToTime(iframeId, seconds) {
  const iframe = document.getElementById(iframeId);
  if (!iframe) return;
  const base = iframe.src.split('?')[0].split('#')[0];
  iframe.src = `${base}?start=${seconds}&autoplay=1`;
}

// Keyboard support for timecodes
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('overlay-timecode-item')) {
    e.target.click();
  }
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeProject();
});

// --- FORM SUBMIT FEEDBACK ---
const forms = document.querySelectorAll('.contact-form');
forms.forEach(form => {
  form.addEventListener('submit', async (e) => {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Check if placeholder not replaced
    if (form.action.includes('VOTRE_ID_ICI')) {
      e.preventDefault();
      btn.textContent = '⚠️ Configurez Formspree d\'abord !';
      btn.style.background = '#8B4513';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
      return;
    }

    btn.textContent = 'Envoi...';
    btn.disabled = true;

    // Let Formspree handle submission but show success state
    form.addEventListener('submit', () => {}, { once: true });

    setTimeout(() => {
      btn.textContent = '✓ Message envoyé !';
      btn.style.background = '#2E7D32';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }, 1200);
  });
});
