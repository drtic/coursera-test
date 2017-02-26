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
        templateUrl: 'templates/main_categories.template.html',
        controller: 'CategoriesController as mainList',
        resolve: {
          items: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      });

      //Set up UI states
    };

})();
