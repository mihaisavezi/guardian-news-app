import angular from 'angular';

import { articleList } from './list/article-list';
import { articleDetails } from './details/article-details';

export const articlesModule = 'articlesModule';

angular
  .module(articlesModule, [])
  .component('guardianArticleList', articleList)
  .component('guardianArticleDetails', articleDetails);
