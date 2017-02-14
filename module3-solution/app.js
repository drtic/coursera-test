(function(){
  'use strict';

  angular.module('',[])
  .controller('', )
  .service('', )
  .constant('ApiBasePath', "http://davids-restorant.herokuapp.com");

  MenuCategoriesController.$inject = ['MenuCategoriesService'];
  function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();

    promise.then({
      menu.categories = response.data;
    })
    .catch(function(error) {
      console.log("Error 1");
    });
  }


  MenuGetLIst = ['$http', 'ApiBasePath']
  function MenuGetLIst = function($http, ApiBasePath) {
    var service = this;

    service.getMenuCategories = function() {
      var response = $http({
        method: "GET",
        url: ( ApiBasePath + "/categories.json")
      });
      return response;
    };
  };
})();
