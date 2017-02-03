(function() {
'use strict';

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.name = "A,A,A,,A,A";

  $scope.LunchCheck = function() {
    if( countItems($scope.name) <= 3) {
        $scope.name1 = "Enjoy!";
        $scope.style = "s1";
      }
      else {
        $scope.name1 = "To much !";
        $scope.style = "s2";
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
