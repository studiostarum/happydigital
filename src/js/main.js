import { initCustomSelect } from './modules/customSelect';
import { initCategoryIndex } from './modules/categoryIndex';
import { initCarouselHeight } from './modules/carouselHeightFix';
import { initCurrentPageAccordion } from './modules/currentPageAccordion';
import { initLightbox } from './modules/lightbox';
import '../css/main.css';

document.addEventListener('DOMContentLoaded', () => {
    initCustomSelect();
    initCategoryIndex();
    initCarouselHeight();
    initCurrentPageAccordion();
    initLightbox();
});