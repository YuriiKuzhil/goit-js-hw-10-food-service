import itemsMenuTpl from '../templates/items-menu.hbs';
import menu from '../menu.json';

const listRef = document.querySelector('.js-menu');
const menuMarkup = createMarkup(menu);
listRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMarkup(menu) {
  return itemsMenuTpl(menu);
}
