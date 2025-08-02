document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const inputs = document.querySelectorAll('.contact-form .c1:not(button)');
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.border = '2px solid red';
      valid = false;
    } else {
      input.style.border = '1px solid #ccc';
    }
  });

  if (!valid) {
    e.preventDefault();
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
document.querySelectorAll('.portfolio-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});
modal.addEventListener('click', () => {
  modal.style.display = "none";
});

const sections = document.querySelectorAll("section > div[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.progress').style.width = entry.target.dataset.percent;
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.skill-container').forEach(bar => {
  const percent = bar.querySelector('.skill-percent').textContent;
  bar.dataset.percent = percent;
  observer.observe(bar);
});

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const modeIcon = document.querySelector('.mode-icon');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme && savedTheme === 'dark') {
    body.classList.add('dark-mode');
    modeIcon.textContent = '☀️';
}