import {SearchDirective} from '../controller/searchCtrl'
import {AppDirective} from '../controller/appCtrl'

const RouterConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('search', SearchDirective())
    .state('app', AppDirective())
};
export {RouterConfig}