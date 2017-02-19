import angular from 'angular';

import { articleList } from './list/article-list';

export const articlesModule = 'articlesModule';

angular
  .module(articlesModule, [])
  .component('guardianArticleList', articleList);
