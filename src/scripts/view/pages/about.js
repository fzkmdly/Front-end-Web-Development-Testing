import {createAboutPages} from '../template/templateCreator';

const About = {
  async render() {
    return `
        <div id="about-us" class="about-us"></div>
      `;
  },

  async afterRender() {
    const aboutUsContainer = document.querySelector('#about-us');
    aboutUsContainer.innerHTML = createAboutPages();
  },
};

export default About;
