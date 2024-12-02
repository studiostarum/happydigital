import { initCourseAccordion } from './courseAccordion';
import { initCustomSelect } from './customSelect';
import { initCategoryIndex } from './categoryIndex';
import { initResponsiveOverrides } from './responsiveOverrides';
import { homeReviewsSwiper } from './homeReviewsSwiper';

document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
    initCustomSelect();
    initCategoryIndex();
    initResponsiveOverrides();
    homeReviewsSwiper();
});
