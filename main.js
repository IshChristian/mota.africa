// Web app links: the real URL is in the HTML (works without JS); config.js can point them elsewhere.
const WEB_APP = String(window.MOTA_WEB_APP || '').replace(/\/+$/, '');
const webAppUrl = path => WEB_APP + (path || '');
if (WEB_APP) document.querySelectorAll('[data-webapp]').forEach(link => { link.href = webAppUrl(link.dataset.webapp); });

// T() returns the current-language version of an English string (see i18n.js); English when i18n is unavailable.
const T = text => (window.MOTA_I18N ? window.MOTA_I18N.t(text) : text);
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const about = document.querySelector('.nav-dropdown > button');
const closeAbout = () => { about?.setAttribute('aria-expanded', 'false'); const panel = document.getElementById('about-menu'); if (panel) panel.hidden = true; };
const closeNavigation = () => { nav?.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); menu?.setAttribute('aria-label', T('Open navigation')); closeAbout(); };
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; if (!open) { closeNavigation(); return; } menu.setAttribute('aria-expanded', 'true'); menu.setAttribute('aria-label', T('Close navigation')); nav?.classList.add('open'); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
about?.addEventListener('click', () => { const open = about.getAttribute('aria-expanded') !== 'true'; about.setAttribute('aria-expanded', String(open)); const panel = document.getElementById('about-menu'); if (panel) panel.hidden = !open; });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { const focusMenu = menu?.getAttribute('aria-expanded') === 'true'; const focusAbout = about?.getAttribute('aria-expanded') === 'true'; closeNavigation(); if (focusMenu) menu.focus(); else if (focusAbout) about.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.nav-shell')) closeNavigation(); });
document.querySelectorAll('[data-carousel]').forEach(carousel => { const track = carousel.querySelector('.card-track'); const move = direction => track.scrollBy({ left: direction * (track.firstElementChild.getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0)), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); carousel.querySelector('[data-prev]').addEventListener('click', () => move(-1)); carousel.querySelector('[data-next]').addEventListener('click', () => move(1)); });
const accountGuides = {
  rider: { title: 'Your next journey starts here.', intro: 'Create your rider account and complete your personal verification. Riders pay no registration fee.', fee: '<strong>Free</strong>', description: 'No registration fee for riders.', steps: ['Register your rider account', 'Verify your phone number', 'Submit your personal identity documents', 'Complete verification to continue to your home screen'], documents: ['National ID or passport and identity photos', 'A current selfie', 'Personal details requested in the app'] },
  driver: { title: 'Start your next chapter with MOTA.', intro: 'Bring your driving experience. Prepare your personal and vehicle documents to complete your account.', fee: 'RWF <strong>5,000</strong>', description: 'Registration fee for a driver account.', steps: ['Register your driver account', 'Verify your phone number', 'Submit personal and vehicle documents', 'Pay the registration fee and complete verification'], documents: ['National ID or passport and identity photos', 'A current selfie', 'Valid driving licence', 'Vehicle registration, insurance and technical inspection documents', 'Document expiry dates requested in the app', 'Vocational card, if provided'] },
};
let currentRole = 'driver';
const renderAccountGuide = role => {
  const guide = accountGuides[role]; if (!guide) return;
  currentRole = role;
  document.querySelectorAll('[data-role]').forEach(button => { const selected = button.dataset.role === role; button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected)); });
  document.getElementById('join-title').textContent = T(guide.title);
  document.getElementById('join-intro').textContent = T(guide.intro);
  document.getElementById('join-kicker').textContent = T(role.toUpperCase() + ' REGISTRATION');
  document.getElementById('join-fee').innerHTML = guide.fee.replace('Free', T('Free'));
  document.getElementById('join-description').textContent = T(guide.description);
  for (const [id, items] of [['join-steps', guide.steps], ['join-documents', guide.documents]]) {
    const list = document.getElementById(id); list.replaceChildren();
    items.forEach(text => { const item = document.createElement('li'); item.textContent = T(text); list.append(item); });
  }
  const joinCta = document.getElementById('join-cta');
  joinCta.textContent = T('Start as a ' + role + ' →');
  // Opens registration in the web app for the chosen role (the app calls riders "passenger").
  if (WEB_APP) joinCta.href = webAppUrl('/register?selectedRole=' + (role === 'driver' ? 'driver' : 'passenger'));
};
document.querySelectorAll('[data-role]').forEach(button => button.addEventListener('click', () => renderAccountGuide(button.dataset.role)));
renderAccountGuide(document.querySelector('[data-role].active')?.dataset.role || 'driver');
// Audience links select the matching guide before the browser follows its anchor.
document.querySelectorAll('[data-account-link]').forEach(link => link.addEventListener('click', () => renderAccountGuide(link.dataset.accountLink)));
const vehicleGuides = { moto: 'Explore a motorcycle ride for your everyday journey.', car: 'Explore a car ride for your everyday journey.' };
let currentVehicle = 'moto';
document.querySelectorAll('[data-vehicle]').forEach(button => button.addEventListener('click', () => {
  const description = vehicleGuides[button.dataset.vehicle]; if (!description) return;
  currentVehicle = button.dataset.vehicle;
  document.querySelectorAll('[data-vehicle]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.getElementById('vehicle-copy').textContent = T(description);
}));

let currentMap = 'rider';
const renderMap = view => { currentMap = view; const driver = view === 'driver';
  document.querySelectorAll('[data-map-img]').forEach(img => img.classList.toggle('active', img.dataset.mapImg === view)); document.getElementById('map-title').textContent = T(driver ? 'Review your ride request' : 'Choose your pickup'); document.getElementById('map-description').textContent = T(driver ? 'See pickup and destination details in your driver account.' : 'Set your destination and request a car or moto.'); };
document.querySelectorAll('[data-map]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-map]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); }); renderMap(button.dataset.map); }));
let toastTimer;
const showToast = message => { const toast = document.querySelector('.toast'); toast.textContent = message; toast.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 6000); };
// Download buttons: a configured https URL (config.js) enables the button; otherwise it explains the release is pending.
for (const [platform, id] of [['android', 'android-download'], ['ios', 'ios-download']]) {
  const element = document.getElementById(id); const url = (window.MOTA_DOWNLOADS || {})[platform];
  if (/^https:\/\//i.test(url || '')) {
    element.href = url; element.classList.remove('unavailable'); element.removeAttribute('aria-disabled');
    if (platform === 'ios') element.querySelector('em').textContent = T('Official iPhone release');
    element.addEventListener('click', () => { if (platform === 'android') showToast(T('Your download has started. When it finishes, open it from your notifications or the Downloads folder.')); });
  } else {
    element.classList.add('unavailable'); element.setAttribute('aria-disabled', 'true');
    element.addEventListener('click', event => { event.preventDefault(); showToast(T(platform === 'android' ? 'The Android download link is not available yet. Please check back soon.' : 'The iPhone version is not available yet. Please check back soon.')); });
  }
}
document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => {
  const source = document.getElementById(button.dataset.copy); const text = source ? source.textContent.trim() : '';
  const selectText = () => { const range = document.createRange(); range.selectNodeContents(source); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => showToast(T('Checksum copied.')), selectText); else selectText();
}));
document.querySelectorAll('[data-role], [data-map]').forEach(b => b.setAttribute('aria-pressed', String(b.classList.contains('active'))));
document.getElementById('year').textContent = new Date().getFullYear();

// Optional motion enhances the content without hiding it when JavaScript is unavailable.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section > h2, .product-panel, .journey-layout, .money-layout, .support-grid, .tech-panel, .community-grid, .impact-grid, .service-grid, .trust-layout').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
  reducedMotion.addEventListener('change', event => { if (event.matches) { observer.disconnect(); document.querySelectorAll('.reveal-ready').forEach(element => element.classList.add('visible')); } });
}
const navShell = document.querySelector('.nav-shell');
window.addEventListener('scroll', () => navShell?.classList.toggle('scrolled', window.scrollY > 30), { passive: true });
const animateSwap = element => { if (!element) return; element.classList.remove('swap-enter'); void element.offsetWidth; element.classList.add('swap-enter'); };
const journeyStages = [
  { shot: 'destination-search', pos: 'bottom', eyebrow: 'YOUR JOURNEY STARTS HERE', title: 'Where to next?', description: 'Choose your pickup and enter your destination. Keep the important details in one place.' },
  { shot: 'choose-ride', pos: 'center', eyebrow: 'A RIDE THAT FITS YOUR DAY', title: 'Car or moto?', description: 'Choose the category that works for you. Your selection stays clearly visible before you request a ride.' },
  { shot: 'trip-live', pos: 'top', eyebrow: 'CONNECTED ALONG THE WAY', title: 'Follow your journey.', description: 'Keep your pickup, destination, and trip updates close as your journey progresses.' },
];
let currentStep = 0;
const renderStage = index => { const stage = journeyStages[index]; currentStep = index;
  const shot = document.getElementById('demo-shot');
  if (shot) { shot.src = `assets/app/${stage.shot}.webp`; shot.dataset.pos = stage.pos; }
  document.getElementById('demo-eyebrow').textContent = T(stage.eyebrow);
  document.getElementById('demo-title').textContent = T(stage.title);
  document.getElementById('demo-description').textContent = T(stage.description);
  document.querySelector('.demo-count').textContent = `0${index + 1} / 03`;
};
document.querySelectorAll('[data-step]').forEach(button => button.addEventListener('click', () => {
  const index = Number(button.dataset.step);
  document.querySelectorAll('[data-step]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  renderStage(index);
  animateSwap(document.querySelector('.demo-copy'));
}));
const walletViews = {
  activity: { title: 'Every transaction.\nA clearer picture.', description: 'See your wallet transactions and their status in one place.', rows: [['arrow-down', 'Deposit', 'Add funds to your wallet', 'Wallet'], ['arrow-up', 'Withdrawal request', 'Follow the review and payout status', 'Track'], ['clock-rotate-left', 'Transaction history', 'Keep your activity together', 'Review']] },
  deposit: { title: 'Add funds.\nKeep moving.', description: 'Start a deposit in your driver wallet and follow its transaction status.', rows: [['wallet', 'Open your wallet', 'Choose the deposit option', 'Start'], ['mobile-screen-button', 'Enter deposit details', 'Provide the amount and payment details', 'Details'], ['circle-check', 'Check the status', 'Review the transaction in your wallet', 'Review']] },
  withdraw: { title: 'Your earnings.\nYour next step.', description: 'Submit a withdrawal request and track its review and payout status in your account.', rows: [['hand-holding-dollar', 'Request a withdrawal', 'Choose an amount from your wallet', 'Request'], ['hourglass-half', 'Follow the review', 'Check updates on your request', 'Status'], ['building-columns', 'Track the payout', 'Timing depends on the payment provider', 'Payout']] },
};
let currentWallet = 'activity';
const renderWallet = name => {
  const view = walletViews[name]; currentWallet = name;
  const title = document.getElementById('wallet-title'); title.replaceChildren();
  view.title.split('\n').forEach((line, index) => { if (index) title.append(document.createElement('br')); title.append(document.createTextNode(T(line))); });
  document.getElementById('wallet-description').textContent = T(view.description);
  const rows = document.getElementById('wallet-rows'); rows.replaceChildren();
  view.rows.forEach(([icon, name, description, status]) => {
    const row = document.createElement('div');
    const iconElement = document.createElement('span'); iconElement.className = 'transaction-icon'; iconElement.setAttribute('aria-hidden', 'true');
    const glyph = document.createElement('i'); glyph.className = `fa-solid fa-${icon}`; iconElement.append(glyph);
    const copy = document.createElement('span'), label = document.createElement('b'), detail = document.createElement('small'); label.textContent = T(name); detail.textContent = T(description); copy.append(label, detail);
    const badge = document.createElement('span'); badge.className = 'transaction-status'; badge.textContent = T(status);
    row.append(iconElement, copy, badge); rows.append(row);
  });
  return rows;
};
document.querySelectorAll('[data-wallet]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-wallet]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  animateSwap(renderWallet(button.dataset.wallet));
}));

// Progressive enhancement: questions stay visible when JavaScript is unavailable.
const faqItems = Array.from(document.querySelectorAll('[data-faq-topic]'));
const faqSearch = document.getElementById('faq-search');
let faqCategory = 'all';
const filterQuestions = () => {
  const term = (faqSearch?.value || '').trim().toLowerCase();
  let visible = 0;
  faqItems.forEach(item => {
    const matchesCategory = faqCategory === 'all' || item.dataset.faqTopic === 'shared' || item.dataset.faqTopic === faqCategory;
    const matches = matchesCategory && item.textContent.toLowerCase().includes(term);
    item.hidden = !matches; if (matches) visible++;
  });
  document.getElementById('faq-count').textContent = T(visible === 1 ? '{n} question' : '{n} questions').replace('{n}', visible);
  document.getElementById('faq-empty').hidden = visible > 0;
};
if (faqItems.length) {
  document.getElementById('faq-tools').hidden = false;
  document.querySelectorAll('[data-faq-filter]').forEach(button => button.addEventListener('click', () => {
    faqCategory = button.dataset.faqFilter;
    document.querySelectorAll('[data-faq-filter]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
    filterQuestions();
  }));
  faqSearch?.addEventListener('input', filterQuestions);
  filterQuestions();
}
const releases = ['android', 'ios'].filter(platform => /^https:\/\//i.test((window.MOTA_DOWNLOADS || {})[platform] || ''));
const releaseStatus = document.getElementById('release-status');
const renderReleaseStatus = () => {
  if (!releaseStatus) return;
  const message = releases.length === 2 ? 'Android and iPhone downloads are available below.'
    : releases[0] === 'android' ? 'The Android app is ready to download. The iPhone version is coming soon.'
    : releases[0] === 'ios' ? 'The iPhone app is ready to download. The Android version is coming soon.'
    : 'Official download links are being prepared. Please check back soon.';
  releaseStatus.textContent = T(message);
};
renderReleaseStatus();

// Language switch: static text is swapped by i18n.js; JS-rendered panels are redrawn in the new language.
window.MOTA_I18N?.onChange(() => {
  renderAccountGuide(currentRole);
  document.getElementById('vehicle-copy').textContent = T(vehicleGuides[currentVehicle]);
  renderMap(currentMap);
  renderStage(currentStep);
  renderWallet(currentWallet);
  if (faqItems.length) filterQuestions();
  renderReleaseStatus();
  menu?.setAttribute('aria-label', T(menu.getAttribute('aria-expanded') === 'true' ? 'Close navigation' : 'Open navigation'));
});
