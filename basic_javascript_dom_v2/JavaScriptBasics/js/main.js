'use strict';

{
  document.querySelector('ul').addEventListener('click', e => {
    console.log(e.target.nodeName)
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}
