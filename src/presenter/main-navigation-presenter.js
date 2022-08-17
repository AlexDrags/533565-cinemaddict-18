import {render} from '../render.js';
import NewMainNavigationView from '../view/main-navigation-view.js';

export default class MainNavigationPresenter {
  init = (navigationContainer) => {
    render(new NewMainNavigationView, navigationContainer);
  };
}

