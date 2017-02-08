(function(){
'use strict';

  var shoppingList = [
    "A", "B", "C----"
  ];


  angular.module('CounterApp', [])
    .controller( 'CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController($scope){
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.name = "JJJ";
    $scope.sl = shoppingList;

    $scope.showNumberOfWatchers = function() {
          console.log("Number of Watchers: ", $scope.$$watchersCount );
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
      console.log("once function");
    };

    $scope.upCounter = function () {
      $timeout( function (){
        console.log("counter called");
      }, 1000);
    };


    // $scope.upCounter = function () {
    //   setTimeout( function (){
    //     $scope.$apply( function() {
    //       $scope.counter++;
    //       console.log("counter called");
    //     });
    //   }, 1000 );
    // };

    $scope.$watch(function() {
      console.log("Digest loop fired!");
    } );

    // $scope.$watch('onceCounter', function (newValue, oldValue){
    //   console.log("onceCounter oldValue: ", oldValue);
    //   console.log("onceCounter newValue: ", newValue);
    // });
    //
    // $scope.$watch('counter', function (newValue, oldValue){
    //   console.log("counter oldValue: ", oldValue);
    //   console.log("counter newValue: ", newValue);
    // });

  };


/*

*/
})();
