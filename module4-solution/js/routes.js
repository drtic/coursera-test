(function(){
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

      //Redirect to tab 1 if no other URL matches
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.template.html'
      })
      .state('categories',{
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller: 'categoriesController as mainList',
        resolve: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      });

      //Set up UI states
    };

})();
