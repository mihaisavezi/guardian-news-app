import angular from 'angular';

import {sectionOne} from './one/one';
import {sectionList} from './list/list';

export const sectionsModule = 'sectionsModule';

angular
  .module(sectionsModule, [])
  .component('guardianSection', sectionOne)
  .component('guardianSectionList', sectionList);
