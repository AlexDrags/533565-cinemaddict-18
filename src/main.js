import UserTitlePresenter from './presenter/profile-presenter.js';
import MainNavigationPresenter from './presenter/main-navigation-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import FilmContentPresenter from './presenter/film-block-presenter.js';
import FooterStatisticsPresenter from './presenter/footer-statisctics-presenter.js';

const mainElement = document.querySelector('.main');
const headerElement = document.querySelector('.header');
const footerStatisticsElement = document.querySelector('.footer__statistics');


const userTitlePresenter = new UserTitlePresenter();
const mainNavigationPresenter = new MainNavigationPresenter();
const sortPresenter = new SortPresenter();
const filmContentPresenter = new FilmContentPresenter();
const footerStistics = new FooterStatisticsPresenter();

userTitlePresenter.init(headerElement);
mainNavigationPresenter.init(mainElement);
sortPresenter.init(mainElement);
filmContentPresenter.init(mainElement);
footerStistics.init(footerStatisticsElement);

