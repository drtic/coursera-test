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
      MenuSearchService.getMatchedMenuItems('------')
      .then( function(response){
          narrowit.found = response;
        }
      ).catch(function(error){

      });
    };

    narrowit.removeItem = function(index) {
      console.log("---" + index + "---");
      narrowit.found.splice(index, 1);
    };
  };

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function getMatchedMenuItems(searchTerm) {
      return $http({
           method: "GET",
           url: ( ApiBasePath + "/menu_items.json")
         }).then(function(result){
              var searchItem = 'chicken';

              var foundItems = [];
              var n = result.data.menu_items.length;
              for (var i =0; i < n; i++ ) {
                var itm = result.data.menu_items[i];
                if (itm.description.toLowerCase().indexOf(searchItem) != -1) {
                    foundItems.push(itm);
                }
              }
              // serarch in description
              return foundItems;
         });
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
