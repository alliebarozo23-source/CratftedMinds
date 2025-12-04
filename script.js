const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

function scrollToMembers() {
  document.getElementById('members').scrollIntoView({ behavior: 'smooth' });
}

// Animate skill bars on scroll (for index)
const bars = document.querySelectorAll('.bar span');
function animateBars() {
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute('data-skill') + '%';
    }
  });
}
window.addEventListener('scroll', animateBars);

// Form submission
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}

// Animate skills for profile pages immediately
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bar span').forEach(bar => {
    bar.style.width = bar.getAttribute('data-skill') + '%';
  });
});


