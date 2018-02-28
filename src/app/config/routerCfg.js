import { SearchDirective } from '../controller/searchCtrl';
import { AppDirective } from '../controller/appCtrl';

export default ($stateProvider) => {
  $stateProvider
    .state('search', SearchDirective())
    .state('app', AppDirective());
};

