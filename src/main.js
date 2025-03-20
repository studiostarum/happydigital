import { initCustomSelect } from '@/components/custom-select/index.js';
import { initCategoryIndex } from '@/components/category/index.js';
import { initCarouselHeight } from '@/components/carousel/index.js';
import { initCurrentPageAccordion } from '@/components/page-accordion/index.js';
import { initLightbox } from '@/components/lightbox/index.js';

document.addEventListener('DOMContentLoaded', () => {
    initCustomSelect();
    initCategoryIndex();
    initCarouselHeight();
    initCurrentPageAccordion();
    initLightbox();
});