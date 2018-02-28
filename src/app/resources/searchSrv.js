export default $resource => $resource('https://api.github.com/search/repositories', {}, {
  search: { method: 'GET', isArray: false },
});

