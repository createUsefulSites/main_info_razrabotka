'use strict';

import './style.css';
import { data } from './data';

const app = document.querySelector('#app');

const newData = data.split(/\d+\) /).slice(1);

for (let item of newData) {
  const [header, answer] = item.replace('\n', 'DELETE').split('DELETE');

  const h1 = document.createElement('h1');
  h1.innerHTML = header;
  h1.id = header;

  const span = document.createElement('span');
  span.innerHTML = answer;

  app.appendChild(h1);
  app.appendChild(span);
}

const inputElement = document.querySelector('#input');
const allHeaders = document.querySelectorAll('h1');

function performSearchAndMove(event) {
  const searchTerm = event.target.value.toLowerCase();
  console.log(searchTerm);

  allHeaders.forEach((header) => {
    if (header.id.toLowerCase().includes(searchTerm)) header.scrollIntoView();
  });
}

inputElement.addEventListener('input', performSearchAndMove);
