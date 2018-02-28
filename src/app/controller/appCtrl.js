import app from '../views/app.html';

const AppDirective = () => ({
  template: app,
  controller: 'AppCtrl',
  controllerAs: '$ctrl',
  url: '',
});

class AppCtrl {

}
export { AppCtrl, AppDirective };
