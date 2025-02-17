import { createElement } from '../render.js';

const createUserTitleTemplate = () => '<section class="header__profile profile"><p class="profile__rating">Movie Buff</p><img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"></section>';

export default class NewTaskUserTitleView {
  getTemplate() {
    return createUserTitleTemplate();
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


