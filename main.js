'use strict';

import './style.css';
import { data } from './data';

const app = document.querySelector('#app');

const newData = data.split(/\d+\) /).slice(1);

for (let item of newData) {
  const [header, answer] = item.replace('\n', 'DELETE').split('DELETE');

  const h1 = document.createElement('h1');
  h1.innerHTML = header;

  const span = document.createElement('span');
  span.innerHTML = answer;

  app.appendChild(h1);
  app.appendChild(span);
}
