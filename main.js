const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav?.classList.toggle('open', open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', 'Open navigation'); }));
const about = document.querySelector('.nav-dropdown > button');
about?.addEventListener('click', () => { const open = about.getAttribute('aria-expanded') !== 'true'; about.setAttribute('aria-expanded', String(open)); document.getElementById('about-menu').hidden = !open; });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); about?.setAttribute('aria-expanded', 'false'); document.getElementById('about-menu').hidden = true; } });
document.querySelectorAll('[data-carousel]').forEach(carousel => { const track = carousel.querySelector('.card-track'); const move = direction => track.scrollBy({ left: direction * (track.firstElementChild.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0)), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); carousel.querySelector('[data-prev]').addEventListener('click', () => move(-1)); carousel.querySelector('[data-next]').addEventListener('click', () => move(1)); });
document.querySelectorAll('[data-role]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-role]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); }); const rider = button.dataset.role === 'rider'; document.getElementById('join-kicker').textContent = rider ? 'RIDER REGISTRATION' : 'DRIVER REGISTRATION'; document.getElementById('join-fee').innerHTML = rider ? '<strong>Free</strong>' : 'RWF <strong>5,000</strong>'; document.getElementById('join-description').textContent = rider ? 'Riders do not pay a registration fee.' : 'Registration fee for a driver account.'; document.getElementById('join-steps').innerHTML = rider ? '<li>Register your account</li><li>Verify your phone number</li><li>Submit your personal documents</li><li>Complete account verification</li>' : '<li>Register your account</li><li>Verify your phone number</li><li>Submit personal & vehicle documents</li><li>Complete payment and account review</li>'; }));
document.querySelectorAll('[data-map]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-map]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); }); const driver = button.dataset.map === 'driver'; document.getElementById('map-title').textContent = driver ? 'Review your ride request' : 'Choose your pickup'; document.getElementById('map-description').textContent = driver ? 'See pickup and destination details in your driver account.' : 'Set your destination and request a car or moto.'; }));
let toastTimer;
const showToast = message => { const toast = document.querySelector('.toast'); toast.textContent = message; toast.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 6000); };
for (const [platform, id] of [['android', 'android-download'], ['ios', 'ios-download']]) { const element = document.getElementById(id); const url = (window.MOTA_DOWNLOADS || {})[platform]; if (/^https:\/\//i.test(url || '')) { element.href = url; element.classList.remove('unavailable'); element.removeAttribute('aria-disabled'); element.querySelector('em').textContent = platform === 'android' ? 'Official Android release' : 'Official iPhone release'; } else element.addEventListener('click', event => { event.preventDefault(); showToast('The official ' + (platform === 'android' ? 'Android' : 'iPhone') + ' download link is not available yet. Please check back soon.'); }); }
document.querySelectorAll('[data-role], [data-map]').forEach(b => b.setAttribute('aria-pressed', String(b.classList.contains('active'))));
document.getElementById('year').textContent = new Date().getFullYear();

// Optional motion enhances the content without hiding it when JavaScript is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section > h2, .product-panel, .journey-layout, .money-layout, .support-grid, .tech-panel, .community-grid, .impact-grid').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
  reducedMotion.addEventListener('change', event => { if (event.matches) { observer.disconnect(); document.querySelectorAll('.reveal-ready').forEach(element => element.classList.add('visible')); } });
}
const navShell = document.querySelector('.nav-shell');
window.addEventListener('scroll', () => navShell?.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
const animateSwap = element => { if (!element) return; element.classList.remove('swap-enter'); void element.offsetWidth; element.classList.add('swap-enter'); };
const journeyStages = [
  { eyebrow: 'YOUR JOURNEY STARTS HERE', title: 'Where to next?', description: 'Choose your pickup and enter your destination. Keep the important details in one place.' },
  { eyebrow: 'A RIDE THAT FITS YOUR DAY', title: 'Car or moto?', description: 'Choose the category that works for you. Your selection stays clearly visible before you request a ride.' },
  { eyebrow: 'CONNECTED ALONG THE WAY', title: 'Follow your journey.', description: 'Keep your pickup, destination, and trip updates close as your journey progresses.' },
];
document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.step), stage = journeyStages[index];
  document.querySelectorAll('[data-step]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  document.getElementById('demo-eyebrow').textContent = stage.eyebrow;
  document.getElementById('demo-title').textContent = stage.title;
  document.getElementById('demo-description').textContent = stage.description;
  document.querySelector('.demo-count').textContent = `0${index + 1} / 03`;
  animateSwap(document.querySelector('.demo-copy'));
}));
const walletViews = {
  activity: { title: 'Every transaction.\nA clearer picture.', description: 'See your wallet transactions and their status in one place.', rows: [['↙', 'Deposit', 'Add funds to your wallet', 'Wallet'], ['↗', 'Withdrawal request', 'Follow the review and payout status', 'Track'], ['≡', 'Transaction history', 'Keep your activity together', 'Review']] },
  deposit: { title: 'Add funds.\nKeep moving.', description: 'Start a deposit in your driver wallet and follow its transaction status.', rows: [['01', 'Open your wallet', 'Choose the deposit option', 'Start'], ['02', 'Enter deposit details', 'Provide the amount and payment details', 'Details'], ['03', 'Check the status', 'Review the transaction in your wallet', 'Review']] },
  withdraw: { title: 'Your earnings.\nYour next step.', description: 'Submit a withdrawal request and track its review and payout status in your account.', rows: [['01', 'Request a withdrawal', 'Choose an amount from your wallet', 'Request'], ['02', 'Follow the review', 'Check updates on your request', 'Status'], ['03', 'Track the payout', 'Timing depends on the payment provider', 'Payout']] },
};
document.querySelectorAll('[data-wallet]').forEach(button => button.addEventListener('click', () => {
  const view = walletViews[button.dataset.wallet];
  document.querySelectorAll('[data-wallet]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  const title = document.getElementById('wallet-title'); title.replaceChildren();
  view.title.split('\n').forEach((line, index) => { if (index) title.append(document.createElement('br')); title.append(document.createTextNode(line)); });
  document.getElementById('wallet-description').textContent = view.description;
  const rows = document.getElementById('wallet-rows'); rows.replaceChildren();
  view.rows.forEach(([icon, name, description, status]) => {
    const row = document.createElement('div');
    const iconElement = document.createElement('span'); iconElement.className = 'transaction-icon'; iconElement.textContent = icon;
    const copy = document.createElement('span'), label = document.createElement('b'), detail = document.createElement('small'); label.textContent = name; detail.textContent = description; copy.append(label, detail);
    const badge = document.createElement('span'); badge.className = 'transaction-status'; badge.textContent = status;
    row.append(iconElement, copy, badge); rows.append(row);
  });
  animateSwap(rows);
}));
