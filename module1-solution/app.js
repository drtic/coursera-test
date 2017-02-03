(function() {
'use strict';

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "";

  $scope.LunchCheck = function() {
    var numitems = countItems($scope.name);
    if( numitems == 0 ) {
      $scope.style = "sErr";
      $scope.style_tb = "err";
      $scope.result = "Please enter data first";
    } else {
      $scope.style = "sOk";
      $scope.style_tb = "ok";
      $scope.result = numitems <= 3 ?
        "Enjoy!" :
        "Too much!";
    }
  }
}

function countItems(string) {
  var c = string.split(",")
  //.length;
  .filter(function(x){return x.length != 0}).length;
  console.log(c);
  return c;
}

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController)

})();
