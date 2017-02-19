class ArticleListController {
  /** @ngInject */
  constructor($http, api, $stateParams) {

    const currentSection = $stateParams.sectionId;
    const necessaryFields = 'trailText,headline,bodyText,thumbnail';

    $http
      .get(`http://content.guardianapis.com/${currentSection}?show-fields=${necessaryFields}&api-key=${api.key}`)
      .then(res => {
        let status;
        this.articles;
        this.sectionTitle;

        status = res.status;

        if (status == 200) {
          this.articles = res.data.response.results;
          this.sectionTitle = res.data.response.edition.webTitle;
        }
      });
  }
}

export const articleList = {
  template: require('./article-list.html'),
  controller: ArticleListController,
  controllerAs: 'articleListVm'
};
