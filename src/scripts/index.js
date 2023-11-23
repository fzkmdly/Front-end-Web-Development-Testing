import 'regenerator-runtime';
import App from './view/app';

const app = new App({
  button: document.querySelector('#open-drawer'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderApp();
});

window.addEventListener('load', () => {
  app.renderApp();
});
