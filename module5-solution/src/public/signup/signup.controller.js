(function(){
  'use strict'

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserInfoService'];
  function SignupController(MenuService, UserInfoService) {
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

      var ui = {
        firstName: reg.user.firstname,
        lastName: reg.user.lastname,
        email: reg.user.email,
        phone: reg.user.phone,
        favoriteItem: reg.user.favoriteItem
      }
      UserInfoService.setUserInfo(ui);

    };
  }
})();
