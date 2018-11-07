(() => {
  'use strict';

  const input = document.querySelector('input');
  const button = document.querySelector('button');
  const p = document.querySelector('p');

  button.addEventListener('click', () => {
    p.textContent = input.value;
  });
})();
