(function(){
  'use strict'

  angular.module('common')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'UserInfoService', 'ApiPath'];
  function SignupController(MenuService, UserInfoService, ApiPath) {
    var reg = this;

    reg.path = ApiPath;

    reg.submit = function () {
      reg.completed = true;

      MenuService.getMenuItem(reg.user.favoriteitem)
      .then (
        function(response) {

          var ui = {
            firstName: reg.user.firstname,
            lastName: reg.user.lastname,
            email: reg.user.email,
            phone: reg.user.phone,
            favoriteItem: {
              name: response.name,
              description: response.description,
              url: reg.path + "/images/" + response.short_name + ".jpg" }
          }
          UserInfoService.setUserInfo(ui);

          reg.myinfo = "Signed up!";

        }
      )
      .catch (
        function(response) {
          reg.menuitemnotfound = true;
          reg.myinfo = "not Signed up! Please enter valid Favorite item!";
        }
      );


    };
  }
})();
