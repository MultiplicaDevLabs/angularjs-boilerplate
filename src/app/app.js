import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngResource from 'angular-resource';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss';
import { AppCtrl } from './controller/appCtrl';
import { SearchCtrl } from './controller/searchCtrl';
import RouterConfig from './config/routerCfg';
import SearchSrv from './resources/searchSrv';
import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, ngResource])
  .config(RouterConfig)
  .factory('SearchSrv', SearchSrv)
  .controller('AppCtrl', AppCtrl)
  .controller('SearchCtrl', SearchCtrl);

export default MODULE_NAME;
