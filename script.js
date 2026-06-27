// ===== MOBILE MENU TOGGLE =====

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== SCROLL PROGRESS BAR =====
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.pageYOffset / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

const animateCounters = () => {
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current) + (target === 98 ? '%' : '+');
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target + (target === 98 ? '%' : '+');
      }
    };
    
    updateCounter();
  });
};

// Trigger counter animation when stats section is visible
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterAnimated) {
      animateCounters();
      counterAnimated = true;
    }
  });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('.dept-card, .facility-card, .gallery-item, .vm-card, .principal-card');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, index * 100);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(element);
});

// ===== FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const formValues = {};
  
  formData.forEach((value, key) => {
    formValues[key] = value;
  });
  
  // Show success message
  showNotification('Thank you for contacting GPWS Siddipet! We will get back to you soon.', 'success');
  
  // Reset form
  contactForm.reset();
});

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'success') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
      <span class="notification-message">${message}</span>
    </div>
  `;
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      top: 100px;
      right: 20px;
      background: white;
      padding: 1.5em 2em;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      z-index: 10000;
      animation: slideIn 0.4s ease;
      border-left: 4px solid #600080;
      max-width: 400px;
    }
    
    .notification.success {
      border-left-color: #28a745;
    }
    
    .notification.error {
      border-left-color: #dc3545;
    }
    
    .notification-content {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    
    .notification-icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      color: white;
      background: #28a745;
    }
    
    .notification.error .notification-icon {
      background: #dc3545;
    }
    
    .notification-message {
      color: #333;
      line-height: 1.5;
    }
    
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
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.4s ease';
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 5000);
}

// ===== GALLERY LIGHTBOX =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-overlay span').textContent;
    
    createLightbox(img.src, caption);
  });
});

function createLightbox(imageSrc, caption) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img src="${imageSrc}" alt="${caption}">
      <div class="lightbox-caption">${caption}</div>
    </div>
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.95);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.3s ease;
      padding: 2em;
    }
    
    .lightbox-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
      animation: zoomIn 0.3s ease;
    }
    
    .lightbox-content img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 10px;
      box-shadow: 0 20px 80px rgba(0,0,0,0.5);
    }
    
    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      font-size: 40px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .lightbox-close:hover {
      transform: rotate(90deg);
    }
    
    .lightbox-caption {
      color: white;
      text-align: center;
      margin-top: 1em;
      font-size: 1.2em;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes zoomIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(lightbox);
  document.body.style.overflow = 'hidden';
  
  const close = lightbox.querySelector('.lightbox-close');
  
  close.addEventListener('click', () => {
    closeLightbox(lightbox);
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox(lightbox);
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox(lightbox);
    }
  });
}

function closeLightbox(lightbox) {
  lightbox.style.animation = 'fadeOut 0.3s ease';
  setTimeout(() => {
    lightbox.remove();
    document.body.style.overflow = '';
  }, 300);
}

// Add fadeOut animation
const fadeOutStyle = document.createElement('style');
fadeOutStyle.textContent = `
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(fadeOutStyle);

// ===== SCROLL INDICATOR CLICK =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ===== LOADING ANIMATION =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// ===== PARALLAX EFFECT FOR HERO =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled / 500);
  }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

function setActiveNavLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);

// Add active link style
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `
  .nav-links a.active::after {
    width: 100% !important;
  }
`;
document.head.appendChild(activeLinkStyle);

// ===== STAT CARDS HOVER EFFECT =====
const statCards = document.querySelectorAll('.stat-card');

statCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-15px) scale(1.05)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(-10px) scale(1)';
  });
});

// ===== FORM INPUT ANIMATIONS =====
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
  input.addEventListener('focus', () => {
    input.parentElement.classList.add('focused');
  });
  
  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentElement.classList.remove('focused');
    }
  });
});

// ===== DEPARTMENT CARDS INTERACTION =====
const deptCards = document.querySelectorAll('.dept-card');

deptCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    deptCards.forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.style.opacity = '0.7';
      }
    });
  });
  
  card.addEventListener('mouseleave', () => {
    deptCards.forEach(otherCard => {
      otherCard.style.opacity = '1';
    });
  });
});

// ===== INITIALIZE TOOLTIPS =====
const elementsWithTitle = document.querySelectorAll('[title]');

elementsWithTitle.forEach(element => {
  const title = element.getAttribute('title');
  element.removeAttribute('title');
  element.setAttribute('data-tooltip', title);
});

// Add tooltip styles
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
  [data-tooltip] {
    position: relative;
    cursor: pointer;
  }
  
  [data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5em 1em;
    background: #333;
    color: white;
    font-size: 0.9em;
    white-space: nowrap;
    border-radius: 6px;
    margin-bottom: 5px;
    z-index: 1000;
    animation: tooltipFade 0.3s ease;
  }
  
  [data-tooltip]:hover::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 5px solid transparent;
    border-top-color: #333;
    z-index: 1000;
  }
  
  @keyframes tooltipFade {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
document.head.appendChild(tooltipStyle);

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to GPWS Siddipet! ', 'background: #600080; color: white; font-size: 20px; padding: 10px;');
console.log('%c🎓 Empowering Women Through Technical Education', 'color: #600080; font-size: 14px;');
console.log('%c💼 Interested in joining our team? Visit our careers page!', 'color: #666; font-size: 12px;');

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  const images = document.querySelectorAll('img[data-src]');
  images.forEach(img => imageObserver.observe(img));
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Keyboard navigation for cards
const interactiveCards = document.querySelectorAll('.dept-card, .facility-card, .stat-card');

interactiveCards.forEach(card => {
  card.setAttribute('tabindex', '0');
  
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.click();
    }
  });
});

// ===== PRINT STYLES =====
window.addEventListener('beforeprint', () => {
  document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing');
});

console.log('✅ All scripts loaded successfully!');