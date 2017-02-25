(function(){
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      //Redirect to tab 1 if no other URL matches
      $urlRouterProvider.otherwise('/tab1');

      //Set up UI states
    };

})();
