'use strict';

import './style.css';
import { data } from './data';

const app = document.querySelector('#app');
const buttonsWrapper = document.querySelector('.wrapper');

const newData = data.split(/\d+.	/).slice(1);

const inputElementDiv = document.querySelector('#input_div');
const deleteButton = document.querySelector('.delete');
const inputElement = document.querySelector('#input');
const allHeaders = document.querySelectorAll('h1');

var a = {
  Ё: 'YO',
  Й: 'I',
  Ц: 'TS',
  У: 'U',
  К: 'K',
  Е: 'E',
  Н: 'N',
  Г: 'G',
  Ш: 'SH',
  Щ: 'SCH',
  З: 'Z',
  Х: 'H',
  Ъ: "'",
  ё: 'yo',
  й: 'i',
  ц: 'ts',
  у: 'u',
  к: 'k',
  е: 'e',
  н: 'n',
  г: 'g',
  ш: 'sh',
  щ: 'sch',
  з: 'z',
  х: 'h',
  ъ: "'",
  Ф: 'F',
  Ы: 'I',
  В: 'V',
  А: 'A',
  П: 'P',
  Р: 'R',
  О: 'O',
  Л: 'L',
  Д: 'D',
  Ж: 'ZH',
  Э: 'E',
  ф: 'f',
  ы: 'i',
  в: 'v',
  а: 'a',
  п: 'p',
  р: 'r',
  о: 'o',
  л: 'l',
  д: 'd',
  ж: 'zh',
  э: 'e',
  Я: 'Ya',
  Ч: 'CH',
  С: 'S',
  М: 'M',
  И: 'I',
  Т: 'T',
  Ь: "'",
  Б: 'B',
  Ю: 'YU',
  я: 'ya',
  ч: 'ch',
  с: 's',
  м: 'm',
  и: 'i',
  т: 't',
  ь: "'",
  б: 'b',
  ю: 'yu',
};

function transliterate(word) {
  return word
    .split('')
    .map(function (char) {
      return a[char] || char;
    })
    .join('');
}

String.prototype.removeAllExceptWords = function () {
  return this.replace(/\W+/g, '').toLowerCase();
};

for (let item of newData) {
  const [header, answer] = item.replace('\n', 'DELETE').split('DELETE');

  const h1 = document.createElement('h1');
  h1.innerHTML = header + ' (' + transliterate(header.toUpperCase()).slice(0, 12) + '...)';
  h1.id = transliterate(header.toUpperCase());

  const span = document.createElement('span');
  span.innerHTML = answer;

  app.appendChild(h1);
  app.appendChild(span);
}

function performSearchAndMove(event) {
  const searchTerm = event.target.value.removeAllExceptWords();

  allHeaders.forEach((header) => {
    const preparedHeader = header.id.removeAllExceptWords();

    if (preparedHeader.includes(searchTerm)) {
      header.scrollIntoView();
    }
  });
}

function searchHandlerDiv(responce) {
  console.log(responce);
}

buttonsWrapper.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    inputElementDiv.innerHTML = inputElementDiv.innerHTML + e.target.innerHTML.toLowerCase();
    searchHandlerDiv(inputElementDiv.innerHTML);
  }
});

deleteButton.addEventListener('click', () => {
  if (inputElementDiv.innerHTML === '') return;
  inputElementDiv.innerHTML = inputElementDiv.innerHTML.slice(0, -1);
});

// inputElement.addEventListener('input', performSearchAndMove);
