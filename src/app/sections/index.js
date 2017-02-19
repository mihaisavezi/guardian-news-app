import angular from 'angular';

import {sectionOne} from './one/one';
import {sectionList} from './list/list';

export const sectionsModule = 'sectionsModule';

angular
  .module(sectionsModule, [])
  .component('guardianTech', sectionOne)
  .component('guardianTechs', sectionList);
