(function () {
  "use strict";

  angular.module('common')
    .service('UserInfoService', UserInfoService);

  var userInfo = {};
  var registered = false;

  function UserInfoService() {
    var service = this;

    service.getUserInfo = function() {

      return { Registered: registered,
               FirstName: userInfo.firstName,
               LastName: userInfo.lastName,
               Email: userInfo.email,
               Phone: userInfo.phone,
               FavoriteItem: userInfo.favoriteItem };
    }

    service.setUserInfo = function(i) {
      console.log("From service: ", i);
      userInfo = i;
      registered = true;
    }
  }


})();
