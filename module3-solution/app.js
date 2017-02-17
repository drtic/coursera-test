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

    narrowit.searchfor = function() {
      //console.log( narrowit.searchTerm );

      if(narrowit.searchTerm === ""){
        narrowit.found = [];
        return;
      }

      MenuSearchService.getMatchedMenuItems(narrowit.searchTerm)
      .then( function(response){
          narrowit.found = response;
        }
      ).catch(function(error){
        console.log("Error: getMatchedMenuItems " + error );
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
         }).then(function(result) {
              var foundItems = [];
              var n = result.data.menu_items.length;
              for (var i =0; i < n; i++ ) {
                var itm = result.data.menu_items[i];
                if (itm.description.toLowerCase().indexOf(searchTerm) != -1) {
                    foundItems.push(itm);
                }
              }
              // serarch in description
              return foundItems;
         });
    };
  };

  function foundItems() {
    return {
      templateUrl: 'listItem.tpl',
      restrict: "E",
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'list',
      bindToController: true
    };
  };
})();
