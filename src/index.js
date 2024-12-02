import { initCourseAccordion } from './courseAccordion';
import { initCustomSelect } from './customSelect';
import { initCategoryIndex } from './categoryIndex';
import { initResponsiveOverrides } from './responsiveOverrides';

document.addEventListener('DOMContentLoaded', () => {
    initCourseAccordion();
    initCustomSelect();
    initCategoryIndex();
    initResponsiveOverrides();
});
