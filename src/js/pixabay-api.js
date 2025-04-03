// У файлі pixabay - api.js зберігай функції для виконання
// HTTP - запитів:
// getImagesByQuery(query).Ця функція повинна приймати один параметр
// query(пошукове слово, яке є рядком), здійснювати HTTP - запит і
// повертати значення властивості data з отриманої відповіді.

// getImagesByQuery(query);

import axios from 'axios';

const API_KEY = '49643756-826760c59f13ca953f19ee970';
const URL = 'https://pixabay.com/api/';

export function fetchImages(userInput) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: userInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.log(error);
      return [];
    });
}
