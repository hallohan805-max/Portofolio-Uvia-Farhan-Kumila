/**
 * PORTOFOLIO UVIA FARHAN KUMILA
 * Interactive Scripts - Scroll Animations, Copy to Clipboard, Dark Mode
 */

document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((element) => {
    observer.observe(element);
  });
});

document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

function highlightActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
        link.style.borderColor = 'var(--safety)';
      } else {
        link.style.borderColor = 'transparent';
      }
    });
  });
}

highlightActiveNavLink();

function setupCopyButtons() {
  const contactLinks = document.querySelectorAll('.label-val a');

  contactLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '');
        copyToClipboard(email, 'Email disalin!');
      } else if (href.startsWith('tel:')) {
        const phone = this.textContent;
        copyToClipboard(phone, 'Nomor telepon disalin!');
      }
    });
  });
}

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification(message);
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--ink);
    color: var(--paper);
    padding: 12px 16px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 12px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupCopyButtons);
} else {
  setupCopyButtons();
}

function setupDarkModeToggle() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const prefersDark =
    localStorage.getItem('darkMode') ||
    (isDarkMode ? 'true' : 'false');

  if (prefersDark === 'true') {
    document.documentElement.style.colorScheme = 'dark';
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.style.colorScheme = 'dark';
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('darkMode', 'false');
      }
    });
}

setupDarkModeToggle();

function logPerformance() {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const navigationStart = timing.navigationStart;

    const pageLoadTime = timing.loadEventEnd - navigationStart;
    const connectTime = timing.responseEnd - timing.requestStart;
    const renderTime = timing.domComplete - timing.domLoading;

    console.log('📊 Performance Metrics:');
    console.log(`  Page Load Time: ${pageLoadTime}ms`);
    console.log(`  Connect Time: ${connectTime}ms`);
    console.log(`  Render Time: ${renderTime}ms`);
  }
}

window.addEventListener('load', logPerformance);

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

console.log(
  '%c🎯 Selamat datang di Portofolio Uvia Farhan Kumila',
  'font-size: 14px; font-weight: bold; color: #F2A71B;'
);
console.log(
  '%cHubungi saya: Farhank2611@gmail.com | 0881-3776-366',
  'font-size: 12px; color: #5C6570;'
);
