(function() {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItems);


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowit = this;

    narrowit.fn1 = function() {
      console.log(MenuSearchService.getMatchedMenuItems('------'));
    };
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
      var response = $http({
           method: "GET",
           url: ( ApiBasePath + "/menu_items.json")
         });

      return response;
    };
    // function getMatchedMenuItems(searchTerm)
    // {
    //
    // };

  };

  function foundItems() {
    return {
      template: '<B>AAAA</B>'
    };
  };

  // MenuCategoriesController.$inject = ['MenuCategoriesService'];
  // function MenuCategoriesController(MenuCategoriesService) {
  //   var menu = this;
  //
  //   var promise = MenuCategoriesService.getMenuCategories();
  //
  //   promise.then({
  //     menu.categories = response.data;
  //   })
  //   .catch(function(error) {
  //     console.log("Error 1");
  //   });
  // }


  // MenuGetLIst = ['$http', 'ApiBasePath']
  // function getMatchedMenuItems = function($http, ApiBasePath) {
  //   var service = this;
  //
  //   service.getMenuCategories = function() {
  //     var response = $http({
  //       method: "GET",
  //       url: ( ApiBasePath + "/categories.json")
  //     });
  //     return response;
  //   };
  // };
})();
