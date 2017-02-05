(function(){
'use strict';

  angular.module('CounterApp', [])
    .controller( 'CounterController', CounterController);

  CounterController.$inject = ['$scope'];
  function CounterController($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function() {
          console.log("Number of Watchers: ", $scope.$$watchersCount );
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
      console.log("once function");
    };

    $scope.upCounter = function () {
      $scope.counter++;
    };

    $scope.$watch('onceCounter', function (newValue, oldValue){
      console.log("onceCounter oldValue: ", oldValue);
      console.log("onceCounter newValue: ", newValue);
    });

    $scope.$watch('counter', function (newValue, oldValue){
      console.log("counter oldValue: ", oldValue);
      console.log("counter newValue: ", newValue);
    });

  };


/*

*/
})();
