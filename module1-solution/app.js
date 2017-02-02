(function(){
'use strict';

M1Controller.$inject = ['$scope', '$filter'];
function M1Controller($scope, $filter) {
  $scope.name = "AAAAA";

}

angular.module('module1-App', [])
.controller('M1Controller', M1Controller)

})();
