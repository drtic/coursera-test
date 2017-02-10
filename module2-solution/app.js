(function(){
  var shoppinglist = [
    { name: "Cookies-A", quantity: 10},
    { name: "Cookies-B", quantity: 11},
    { name: "Cookies-C", quantity: 12},
    { name: "Cookies-D", quantity: 13},
    { name: "Cookies-E", quantity: 14},
    { name: "Cookies-F", quantity: 15}
  ];

  angular.module('ShoppingListCheckOff', [])
    .controller( 'BoughtController', BoughtController)
    .controller( 'ToBuyController', ToBuyController)
    .service( 'ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService() {
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
    //console.log("remove", index);
  };
}

BoughtController.$inject = ['ShoppingListCheckOffService'];
function BoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.Bought = ShoppingListCheckOffService.getBoughtList();
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.removeItem = ShoppingListCheckOffService.moveToBoughtList;
  toBuyList.toBuy = ShoppingListCheckOffService.getToBuyList();

  //console.log("In controller", toBuyList.toBuy.length );
}

})();
