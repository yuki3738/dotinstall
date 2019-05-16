'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.034) {
      btn.textContent = '大吉';
    } else if (n < 0.66) {
      btn.textContent = '中吉';
    } else {
      btn.textContent = '凶';
    }
  });
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}