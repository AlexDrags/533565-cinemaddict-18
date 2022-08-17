import {render} from '../render.js';
import NewTaskUserTitleView from '../view/user-title-view.js';


export default class UserTitlePresenter {
  init = (userTitleContainer) => {
    this.userTitleContainer = userTitleContainer;
    render(new NewTaskUserTitleView(), this.userTitleContainer);
  };
}
