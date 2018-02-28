const SearchSrv = ($resource) => {
    return $resource('https://api.github.com/search/repositories', {}, {
           'search': { method: 'GET', isArray: false},    
       })
}
export {SearchSrv}