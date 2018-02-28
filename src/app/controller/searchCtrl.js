import '../css/search.scss'

const SearchDirective = () => {
    return {
      template: require('../views/search.html'),
      controller: 'SearchCtrl',
      controllerAs: '$ctrl',
      url: '/search',
    }
};


class SearchCtrl{
    constructor(SearchSrv) {
        'ngInject';
        this.SearchSrv = SearchSrv
    }
    search() {
        this.SearchSrv.search({q:this.searchTerm}).$promise
        .then((response)=>{
            this.results = response.items
        });
    }
}
export {SearchCtrl,SearchDirective}