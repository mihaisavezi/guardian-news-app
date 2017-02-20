class ArticleDetailsController {
  /** @ngInject */
  constructor($http, api, $stateParams) {

    const articleId = $stateParams.articleId;

    $http
      .get(`http://content.guardianapis.com/${articleId}?show-fields=all&api-key=${api.key}`)
      .then(res => {
        let status;

        status = res.status;

        if (status == 200) {
          this.article = res.data.response.content;
          this.sectionTitle = res.data.response.content.sectionName;
        }
      });
  }
}

export const articleDetails = {
  template: require('./article-details.html'),
  controller: ArticleDetailsController,
  controllerAs: 'articleDetailsVm'
};
