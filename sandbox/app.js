(function(){
'use strict';

  var shoppingList = [
    "A", "B", "C----"
  ];


  angular.module('ControllerApp', [])
    .controller( 'ParentController1', ParentController1)
    .controller('ChildController1', ChildController1)
    .controller( 'ParentController2', ParentController2)
    .controller('ChildController2', ChildController2);

  ParentController1.$inject = ['$scope'];
  function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController1.$inject = ['$scope'];
  function ChildController1($scope){
  }

  function ParentController2() {
    var vm = this;
    vm.value = 1;
  }

  ChildController2.$inject = ['$scope'];
  function ChildController2($scope){
    var vm = this;
    vm.value = 5;
    console.log("ChildController2 $scope: ", $scope );
  }


})();
