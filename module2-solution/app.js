(function(){
  var shoppinglist = [
    { name: "Cookies", quantity: 10},
    { name: "Cookies1", quantity: 11},
    { name: "Cookies2", quantity: 12},
    { name: "Cookies3", quantity: 13},
    { name: "Cookies4", quantity: 14}
  ];

  angular.module('ShoppingListCheckOff', [])
    .controller( 'ShoppingListCheckOffController', ShoppingListCheckOffController);


ShoppingListCheckOffController.$inject = ['$scope'];
function ShoppingListCheckOffController($scope) {
  $scope.toBuy = shoppinglist;

  
}

})();
