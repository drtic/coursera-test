(function(){
  var shoppinglist = [
    { name: "Cookies", quantity: 10},
    { name: "Cookies1", quantity: 11},
    { name: "Cookies2", quantity: 12},
    { name: "Cookies3", quantity: 13},
    { name: "Cookies4", quantity: 14}
  ];

  angular.module('ShoppingListCheckOff', [])
    .controller( 'ShoppingListCheckOffController', ShoppingListCheckOffController)
    .controller( 'BoughtController', BoughtController)
    .controller( 'ToBuyController', ToBuyController)
    .service( 'ShoppingListService', ShoppingListService);

ShoppingListCheckOffController.$inject = ['$scope'];
function ShoppingListCheckOffController($scope) {

}

//ShoppingListService.$inject =

function ShoppingListService() {
  var service = this;

  var toBuyItems = shoppinglist;
  var boughtItems = [];

  service.getToBuyList = function() {
    return toBuyItems;
  };

  service.getBoughtList = function() {
    return boughtItems;
  };

  service.moveToBoughtList = function(index) {
    var itemtoremove = toBuyItems[index];
    boughtItems.push( itemtoremove );
    toBuyItems.splice(index, 1);

    console.log("remove", index);
  };

}

BoughtController.$inject = ['$scope', 'ShoppingListService'];
function BoughtController($scope, ShoppingListService) {
  $scope.Bought = ShoppingListService.getBoughtList();
}

ToBuyController.$inject = ['$scope', 'ShoppingListService'];
function ToBuyController($scope, ShoppingListService) {
  var toBuyList = this;

  toBuyList.toBuy = ShoppingListService.getToBuyList();
  toBuyList.removeItem = ShoppingListService.moveToBoughtList;

  console.log("In controller", toBuyList.toBuy );
}

})();
