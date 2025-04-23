let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});






// Accordion functionality
document.querySelectorAll('.itinerary-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});






// Dynamic Year Update
document.getElementById('currentYear').textContent = new Date().getFullYear();





// Scroll Direction Detection
let lastScroll = 0;
let scrollDirection = 'down';

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  scrollDirection = currentScroll > lastScroll ? 'down' : 'up';
  lastScroll = currentScroll;
});

// Dynamic Scroll Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const element = entry.target;
    
    if (entry.isIntersecting) {
      element.classList.add('scroll-active');
      element.classList.remove('scroll-exit');
    } else {
      if (scrollDirection === 'up') {
        element.classList.add('scroll-exit');
        element.classList.remove('scroll-active');
      }
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -25% 0px'
});

// Apply to all animated elements
document.querySelectorAll('[data-scroll]').forEach((el, index) => {
  el.style.setProperty('--delay', `${index * 0.08}s`);
  el.style.transitionDelay = `var(--delay)`;
  observer.observe(el);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); 

document.querySelectorAll('.featured-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });