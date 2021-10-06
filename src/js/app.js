import itemsMenuTpl from '../templates/items-menu.hbs';
import menu from '../menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  listMenu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  checkbox: document.querySelector('#theme-switch-toggle'),
};

const menuMarkup = createMenuMarkup(menu);
refs.listMenu.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
  return itemsMenuTpl(menu);
}

selectedMenuTheme();

const changeMenuTheme = () => {
  if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    refs.checkbox.removeAttribute('checked');
  } else {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    refs.checkbox.setAttribute('checked', true);
  }
};
refs.checkbox.addEventListener('change', changeMenuTheme);

function selectedMenuTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === Theme.DARK) {
    refs.body.classList.add(savedTheme);
    refs.checkbox.setAttribute('checked', true);
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}
