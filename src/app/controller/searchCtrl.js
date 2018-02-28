import search from '../views/search.html';
import '../css/search.scss';

const SearchDirective = () => ({
  template: search,
  controller: 'SearchCtrl',
  controllerAs: '$ctrl',
  url: '/search',
});


class SearchCtrl {
  constructor(SearchSrv) {
    'ngInject';

    this.SearchSrv = SearchSrv;
  }
  search() {
    this.SearchSrv.search({ q: this.searchTerm }).$promise
      .then((response) => {
        this.results = response.items;
      });
  }
  open(url) {
    window.open(url, '_blank');
  }
}
export { SearchCtrl, SearchDirective };
