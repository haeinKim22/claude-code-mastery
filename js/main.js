// 스크립트가 동작할 때만 등장 애니메이션 숨김 스타일이 적용되도록 표시
document.documentElement.classList.add('js');

// 모바일 메뉴 토글
function initMobileMenu() {
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => setOpen(menu.classList.contains('hidden')));
  // 메뉴 항목을 누르면 메뉴를 닫는다
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
}

// 현재 보고 있는 섹션에 맞춰 네비게이션 강조
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-link');
  const sections = [...links].map((link) => document.querySelector(link.getAttribute('href')));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach((section) => section && observer.observe(section));
}

// 다크 모드 토글 (선택값은 localStorage에 저장)
function initThemeToggle() {
  const button = document.getElementById('theme-toggle');
  button.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
      // 저장소를 쓸 수 없어도 화면 전환은 동작해야 한다
    }
  });
}

// 스크롤 시 섹션 등장 애니메이션
function initRevealOnScroll() {
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );
  targets.forEach((target) => observer.observe(target));
}

// 이메일 복사 버튼
function initCopyEmail() {
  const button = document.getElementById('copy-email');
  const email = document.getElementById('email-text').textContent.trim();

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = '복사됨!';
    } catch (e) {
      button.textContent = '복사 실패';
    }
    setTimeout(() => (button.textContent = '복사'), 1500);
  });
}

initMobileMenu();
initScrollSpy();
initThemeToggle();
initRevealOnScroll();
initCopyEmail();
