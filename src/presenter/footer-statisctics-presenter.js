import NewFooterStatisticsView from '../view/footer-statistics-view.js';
import {render} from '../render.js';

export default class FooterStatisticsPresenter {
  init = (footerStatisticsContainer) => {
    this.footerStatisticsContainer = footerStatisticsContainer;
    render(new NewFooterStatisticsView, footerStatisticsContainer);
  };
}
