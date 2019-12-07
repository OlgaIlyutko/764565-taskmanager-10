import AbstractComponent from './abstract-component.js';

const createLoadButtonTemplate = () => `<button class="load-more" type="button">load more</button>`;

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
