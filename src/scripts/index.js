import 'regenerator-runtime';
import './view/components/header';
import './view/components/footer';
import './view/components/rental-bar';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './view/app';
import swRegister from './utils/sw-register';

const skipToContent = document.querySelector('.skip-link');
const button = document.querySelector('.menu-button');
const drawer = document.querySelector('#nav');
const mainContent = document.querySelector('#main-content');

const app = new App({
  button: button,
  drawer: drawer,
  content: mainContent,
});

window.addEventListener('hashchange', () => {
  app.renderApp();
});

window.addEventListener('load', () => {
  app.renderApp();
  swRegister();
});

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.focus();
});
