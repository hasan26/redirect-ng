'use strict';

/**
 * @ngdoc function
 * @name sampleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleAppApp
 */
angular.module('sampleAppApp')
  .controller('MainCtrl',['$scope', function ($scope) {
        
        //sample payload using by doku
        var param = {
          MALLID: 3938,
          CHAINMERCHANT: "NA",
          AMOUNT: 5450000,
          PURCHASEAMOUNT: 5450000,
          TRANSIDMERCHANT: 1702240286,
          WORDS: "54500003938Gq929thI7bPM1702240286360",
          REQUESTDATETIME: 20170224093805,
          CURRENCY: 360,
          PURCHASECURRENCY: 360,
          SESSIONID:"44i1702240286",
          PAYMENTCHANNEL: "04",
          NAME: "Dev Hyanuar",
          EMAIL: "exralvio@mailinator.com",
          BASKET: "Sigma Tele Converter TC-2001 For Nikon,1,5450000|"
      };

      //sample url staging doku
      var url = 'http://staging.doku.com/Suite/Receive';

      $scope.formData = {
        Url: url,
        Method: 'POST',
        Params: param
      };

      $scope.sendDoku = function () {
        $scope.$broadcast('gateway.redirect');
      };
  }]);
