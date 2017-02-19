import angular from 'angular';

import { paginationService } from './pagination/pagination.service';

export const coreModule = 'coreModule';

angular
  .module(coreModule, [])
  .service('paginationService', paginationService);
