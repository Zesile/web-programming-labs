const VARIANT_NUMBER = 19;
const MODAL_DELAY_MS = 60_000;
const DAY_START_HOUR = 7;
const DAY_END_HOUR = 21;

// ---------- 1. Системна інформація в localStorage ----------
function collectSystemInfo() {
  return {
    'User agent': navigator.userAgent,
    Платформа: navigator.platform,
    Мова: navigator.language,
    'Усі мови': navigator.languages.join(', '),
    Виробник: navigator.vendor || 'н/д',
    'Ядер процесора': navigator.hardwareConcurrency ?? 'н/д',
    'Пам’ять, ГБ': navigator.deviceMemory ?? 'н/д',
    Екран: `${screen.width}×${screen.height}`,
    'Cookie увімкнені': navigator.cookieEnabled ? 'так' : 'ні',
  };
}

function saveSystemInfo() {
  localStorage.setItem('systemInfo', JSON.stringify(collectSystemInfo()));
}

function renderSystemInfo() {
  const container = document.getElementById('system-info');
  const info = JSON.parse(localStorage.getItem('systemInfo'));
  if (!container || !info) return;

  const list = document.createElement('dl');
  for (const [label, value] of Object.entries(info)) {
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    list.append(term, description);
  }
  container.append(list);
}

// ---------- 2. Відгуки з сервера (Fetch API + async/await) ----------
function createReviewCard({ name, email, body }) {
  const card = document.createElement('article');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const text = document.createElement('p');

  title.textContent = name;
  author.textContent = email;
  author.className = 'job-meta';
  text.textContent = body;

  card.append(title, author, text);
  return card;
}

async function loadReviews() {
  const list = document.getElementById('reviews-list');
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const comments = await response.json();
    list.replaceChildren(...comments.map(createReviewCard));
  } catch (error) {
    console.error('Не вдалося завантажити відгуки:', error);
    list.textContent = 'Не вдалося завантажити відгуки. Спробуйте пізніше.';
  }
}

// ---------- 3. Модальне вікно форми зворотного зв'язку ----------
function setupContactModal() {
  const modal = document.getElementById('contact-modal');
  const closeButton = document.getElementById('contact-close');

  function closeModal() {
    modal.hidden = true;
    sessionStorage.setItem('contactModalClosed', 'true');
  }

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  if (sessionStorage.getItem('contactModalClosed')) return;

  setTimeout(() => {
    modal.hidden = false;
    modal.querySelector('input').focus();
  }, MODAL_DELAY_MS);
}

// ---------- 4. Денна / нічна тема ----------
function getThemeByTime(date = new Date()) {
  const hour = date.getHours();
  return hour >= DAY_START_HOUR && hour < DAY_END_HOUR ? 'light' : 'dark';
}

function applyTheme(theme) {
  const button = document.getElementById('theme-toggle');
  document.documentElement.dataset.theme = theme;
  button.textContent = theme === 'dark' ? 'Світла тема' : 'Темна тема';
  button.setAttribute('aria-pressed', String(theme === 'dark'));
}

function setupThemeToggle() {
  applyTheme(getThemeByTime());

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.dataset.theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// ---------- Запуск ----------
saveSystemInfo();
renderSystemInfo();
loadReviews();
setupContactModal();
setupThemeToggle();