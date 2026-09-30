const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menu?.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav?.classList.toggle('open', !expanded);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', 'Open navigation');
}));
const releases = window.MOTA_DOWNLOADS || {};
for (const [platform, id] of [['android', 'android-download'], ['ios', 'ios-download']]) {
  const element = document.getElementById(id);
  const url = releases[platform];
  if (element && /^https:\/\//i.test(url || '')) {
    element.href = url;
    element.classList.remove('unavailable');
    element.removeAttribute('aria-disabled');
    const state = element.querySelector('em');
    if (state) state.textContent = platform === 'android' ? 'Official Android release' : 'Official iPhone release';
  } else {
    element?.addEventListener('click', event => event.preventDefault());
  }
}
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else document.querySelectorAll('.reveal').forEach(element => element.classList.add('in-view'));
