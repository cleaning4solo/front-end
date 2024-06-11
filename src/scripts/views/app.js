import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/'];
    let renderedContent;

    if (typeof page === 'function') {
      renderedContent = await page();
    } else {
      renderedContent = page;
    }

    if (renderedContent && typeof renderedContent.render === 'function') {
      this._content.innerHTML = await renderedContent.render();
      await renderedContent.afterRender();
    } else {
      this._content.innerHTML = renderedContent;
    }
  }
}

export default App;
