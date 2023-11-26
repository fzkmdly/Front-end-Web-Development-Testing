import {createTOCPages} from '../template/templateCreator';

const ToC = {
  async render() {
    return `
      <div id="TOC" class="TOC"></div>
      `;
  },

  async afterRender() {
    const tocContainer = document.querySelector('#TOC');
    tocContainer.innerHTML = createTOCPages();
  },
};

export default ToC;
