export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        $default: 'app',
        'content@app': 'guardianSectionList'
      }
    })
    .state('app.section', {
      url: 'section/{sectionId}/{pageNo}',
      views: {
        'content@app': 'guardianArticleList'
      }
    })
    .state('app.section.article', {
      url: '/article/{articleId}',
      views: {
        'content@app': 'guardianArticleDetails'
      }
    });
}
