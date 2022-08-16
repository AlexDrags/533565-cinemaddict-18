import { createElement } from '../render.js';

const createFilmContentTemplate = () => '<section class="films"></section>';
export default class NewFilmContentView {
  getTemplate() {
    return createFilmContentTemplate();
  }

  getElement() {
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


