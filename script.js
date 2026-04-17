 function toggleNav(id) {
    const all = document.querySelectorAll('.nav-item');
    all.forEach(item => {
      if (item.id !== id) item.classList.remove('open');
    });
    document.getElementById(id).classList.toggle('open');
  }
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('open'));
    }
  });

  
  function toggleBurger() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  }
  function closeBurger() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }
  function toggleMobile(id) {
    const all = document.querySelectorAll('.mobile-section');
    all.forEach(s => {
      if (s.id !== id) s.classList.remove('open');
    });
    document.getElementById(id).classList.toggle('open');
  }
  function toggleFaq(id) {
    const item = document.getElementById(id);
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  }