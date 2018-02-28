const AppDirective = () => {
    return {
      template: require('../views/app.html'),
      controller: 'AppCtrl',
      controllerAs: '$ctrl',
      url:''
    }
};

class AppCtrl {

}
export {AppCtrl,AppDirective}