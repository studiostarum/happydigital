import { initCourseAccordion } from './modules/courseAccordion';
import { initCustomSelect } from './modules/customSelect';
import { initCategoryIndex } from './modules/categoryIndex';
import { initCarouselHeight } from './modules/carouselHeightFix';

document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
    initCustomSelect();
    initCategoryIndex();
    initCarouselHeight();
});
