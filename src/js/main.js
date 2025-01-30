import { initCustomSelect } from './modules/customSelect';
import { initCategoryIndex } from './modules/categoryIndex';
import { initCarouselHeight } from './modules/carouselHeightFix';
import { initCurrentPageAccordion } from './modules/currentPageAccordion';

document.addEventListener('DOMContentLoaded', () => {
    initCustomSelect();
    initCategoryIndex();
    initCarouselHeight();
    initCurrentPageAccordion();
});