import DrawerInitiator from '../utils/drawerInitiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({button, drawer, content}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderApp() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.info(url);
    const page = routes[url];
    console.info(page);
    this._content.innerHTML = await page.render();

    const skipElement = document.querySelector('.skip-link');
    skipElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
    await page.afterRender();
  }
}

export default App;
