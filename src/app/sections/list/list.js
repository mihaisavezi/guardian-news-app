class SectionListController {
  /** @ngInject */
  constructor($http, api, $q) {

    function getSectionlist() {
      return $http
        .get(`http://content.guardianapis.com/sections?&api-key=${api.key}`)
    }

    const fetchImages = (res) => {
      let imageCategories = res.data.response.results
        .slice(0, 10)
        .map((elem) => {
          let endOfSubstring = elem.webTitle.indexOf(' ') !== -1 ? elem.webTitle.indexOf(' ') : elem.webTitle.length;
          return elem.webTitle.substr(0, endOfSubstring);
        })
        .join('+');

      imageCategories = 'buildings+news'; // @todo fix image requests;


      let promises = {
        'res': res,
        'images': $http.get(`https://pixabay.com/api/?key=1630153-61e92123bad1886e631e44159&q=${imageCategories}&image_type=photo`).then(res => {return res})
      }


      return $q.all(promises);
    }

    const mapImagesToSections = ({articles, images}) => {

      articles.map((article, articleIndex) => {
        let imageIndex = articleIndex % images.length;
        article.imageUrl = images[imageIndex].webformatURL;
      });


      return articles;
    }

    getSectionlist()
      .then(fetchImages)
      .then(promises => {
        let status;

        status = promises.res.status;

        if(status == 200) {
          this.sections = mapImagesToSections({ articles: promises.res.data.response.results, images: promises.images.data.hits });
        }
      });
  }
}

export const sectionList = {
  template: require('./list.html'),
  controller: SectionListController,
  controllerAs: 'sectionListVm'
};
