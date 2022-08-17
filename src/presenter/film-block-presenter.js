import {render} from '../render.js';
import NewFilmContentView from '../view/films-content-view.js';
import NewFilmListView from '../view/film-list-view.js';
import NewFilmCardView from '../view/film-card-view.js';
import NewFilmListContainerView from '../view/films-list-container-view.js';
const COUNT_FILM_CARD = 5;
import NewButtonShowMoreView from '../view/button-show-more-view.js';
// import NewFooterStatisticsView from '../view/footer-statistics-view.js';

export default class FilmContentPresenter {
  filmContent = new NewFilmContentView();
  filmList = new NewFilmListView();
  filmListContainer = new NewFilmListContainerView();
  // filmCard = new NewFilmCardView();

  init = (filmContentContainer) => {
    this.filmContentContainer = filmContentContainer;
    render(this.filmContent, filmContentContainer);
    render(this.filmList, this.filmContent.getElement());
    render(this.filmListContainer, this.filmList.getElement());
    for(let i = 0; i < COUNT_FILM_CARD; i++) {
      render(new NewFilmCardView,this.filmListContainer.getElement());
    }
    render(new NewButtonShowMoreView,this.filmContent.getElement());
  };

  // render(new NewFooterStatisticsView(), footerStatisticsElement);
}

