import { initCourseAccordion } from './courseAccordion';
import { initCustomSelect } from './customSelect';
import { initCategoryIndex } from './categoryIndex';
import { initCarouselHeight } from './carouselHeightFix';

document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
    initCustomSelect();
    initCategoryIndex();
    initCarouselHeight();
});
