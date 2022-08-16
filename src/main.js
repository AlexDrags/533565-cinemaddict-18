import {render} from './render.js';

import NewTaskUserTitleView from './view/user-title-view.js';
import NewMainNavigationView from './view/main-navigation-view.js';
import NewSortView from './view/sort-view.js';
import NewFilmContentView from './view/films-content-view.js';
import NewFilmListView from './view/film-list-view.js';
import NewFilmCardView from './view/film-card-view.js';
import NewFilmListContainerView from './view/films-list-container-view.js';
import NewButtonShowMoreView from './view/button-show-more-view.js';
import NewFooterStatisticsView from './view/footer-statistics-view.js';
// import NewPresenter from './presenter/presenter.js';


const mainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');

const filmContentView = new NewFilmContentView();
const filmList = new NewFilmListView();
const filmListContainer = new NewFilmListContainerView();

render(new NewTaskUserTitleView(), headerElement);
render(new NewMainNavigationView(), mainElement);
render(new NewSortView(), mainElement);
render(filmContentView, mainElement);
render(filmList, filmContentView.getElement());
render(filmListContainer, filmList.getElement());
render(new NewFilmCardView(), filmListContainer.getElement());
render(new NewButtonShowMoreView(), filmListContainer.getElement());
render(new NewFooterStatisticsView(), footerStatisticsElement);


