class SectionListController {
  /** @ngInject */
  constructor($http, api) {
    $http
      .get(`http://content.guardianapis.com/sections?&api-key=${api.key}`)
      .then(res => {
        let status;

        status = res.status;

        if(status == 200) {
          this.sections = res.data.response.results;
        }
      });
  }
}

export const sectionList = {
  template: require('./list.html'),
  controller: SectionListController,
  controllerAs: 'sectionListVm'
};
