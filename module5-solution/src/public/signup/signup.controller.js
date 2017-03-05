(function(){
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService'];
  function SignupController(MenuService) {
    var reg = this;

    reg.submit = function () {
      reg.completed = true;

      MenuService.getMenuItem(reg.user.favoriteitem)
      .then (
        function(response) {
          reg.myinfo = response.description;
        }
      )
      .catch (
        function(response) {
          reg.menuitemnotfound = true;
        }
      );

    };
  }
})();
