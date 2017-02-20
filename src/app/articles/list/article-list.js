class ArticleListController {
  /** @ngInject */
  constructor($http, api, $stateParams, $state, paginationService) {

    this.pager = {};
    this.articles;
    this.sectionTitle;
    let pagesNumber;
    let currentPage = Number($stateParams.pageNo);
    this.currentSection = $stateParams.sectionId;

    const currentSection = $stateParams.sectionId;
    const necessaryFields = 'trailText,headline,bodyText,thumbnail';

    const render = (res) => {
      let status;

      status = res.status;

      if (status == 200 && res.data.response.results.length > 0) {
        this.articles = res.data.response.results;
        this.sectionTitle = res.data.response.edition.webTitle;
      }
      else {
        $state.go('app',{reload: true});
      }
    }

    function getArticles(pageNumber) {
      let pageNo = pageNumber || currentPage;

      return $http
        .get(`http://content.guardianapis.com/${currentSection}?show-fields=${necessaryFields}&page=${pageNo}&api-key=${api.key}`);
    }

    getArticles()
      .then(res => {
        render(res);
        pagesNumber = res.data.response.pages;
        this.pager = paginationService.getPager({ totalItems: pagesNumber, currentPage: currentPage });
      });
  }
}

export const articleList = {
  template: require('./article-list.html'),
  controller: ArticleListController,
  controllerAs: 'articleListVm'
};
