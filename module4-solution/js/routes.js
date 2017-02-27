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
        template: '<a ui-sref="categories">See our Categories List!</a>'
      })
      .state('items', {
        url: '/items/{categoryId}',
        templateUrl: 'templates/main_items.template.html',
        controller: 'ItemsController as itemsList',
        resolve: {
          items: ['$stateParams', 'MenuDataService',
            function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
        }
      })
      .state('categories', {
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
