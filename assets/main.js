const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
  nav?.classList.remove('is-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', e => {
  if (!e.target.closest('.site-header')) closeMenu();
});
const mq = window.matchMedia('(min-width: 761px)');
mq.addEventListener('change', closeMenu);

const simulator = document.querySelector('#stock-simulator');
if (simulator) {
  const currency = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'});
  const number = new Intl.NumberFormat('pt-BR');
  function calculate() {
    const ids = ['entradas','saidas','minimo','custo'];
    const fields = ids.map(id => document.getElementById(id));
    const status = document.getElementById('situacao');
    if (fields.some(f => f.value.trim() === '' || !f.validity.valid || !Number.isFinite(f.valueAsNumber))) {
      document.getElementById('saldo').textContent = '—';
      document.getElementById('valor').textContent = '—';
      status.textContent = 'Confira os valores'; status.className = 'critical'; return;
    }
    const [entradas,saidas,minimo,custo] = fields.map(f => f.valueAsNumber);
    const saldo = entradas - saidas;
    document.getElementById('saldo').textContent = `${number.format(saldo)} ${saldo === 1 ? 'unidade' : 'unidades'}`;
    document.getElementById('valor').textContent = currency.format(saldo * custo);
    status.textContent = saldo <= 0 ? 'Sem estoque' : saldo <= minimo ? 'Comprar / crítico' : 'Regular';
    status.className = saldo <= 0 ? 'empty' : saldo <= minimo ? 'critical' : 'regular';
  }
  simulator.addEventListener('input', calculate);
  simulator.addEventListener('submit', e => e.preventDefault());
  simulator.addEventListener('reset', () => requestAnimationFrame(calculate));
  calculate();
}
