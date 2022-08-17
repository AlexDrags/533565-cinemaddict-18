import {render} from '../render.js';
import NewSortView from '../view/sort-view.js';

export default class SortPresenter {
  init = (sortContainer) => {
    render(new NewSortView, sortContainer);
  };
}

