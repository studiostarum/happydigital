import { initCourseAccordion } from './courseAccordion';
import { initCustomSelect } from './customSelect';
import { initCategoryIndex } from './categoryIndex';
import { initResponsiveOverrides } from './responsiveOverrides';
import { homeReviewsSwiper } from './homeReviewsSwiper';
import { initNavMenu } from './navMenu';

document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
    initCustomSelect();
    initCategoryIndex();
    initResponsiveOverrides();
    homeReviewsSwiper();
    initNavMenu();
});
