(function(){
  'use strict'

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['UserInfoService']
  function MyInfoController(UserInfoService)  {

    var userInfo = UserInfoService.getUserInfo();

    var myinfo = this;

    myinfo.registered = userInfo.Registered;

    myinfo.firstName = userInfo.FirstName;
    myinfo.lastName = userInfo.LastName;
    myinfo.email = userInfo.Email;
    myinfo.telNumber = userInfo.Phone;
    myinfo.favoriteItem = userInfo.FavoriteItem;
  }

})();
