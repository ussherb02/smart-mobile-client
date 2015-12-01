/**
 * Created by kojo on 29/11/15.
 */
angular.module('smart.controllers')
.controller('VerificationCtrl', function($scope, $ionicModal, $timeout, $localstorage) {
    $scope.userData = {};
    $scope.showVerification = false;
    $scope.showVerificationCode = false;

    // Create the verification modal that we will use later
    $ionicModal.fromTemplateUrl('templates/verify.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeVerification = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.verify = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doVerification = function() {
      console.log('Doing verification', $scope.userData);

      $localstorage.setObject('userData',$scope.userData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeVerification();
      }, 1000);

      $scope.toggleVerification();
    };

    $scope.toggleVerification = function(){
      $scope.showVerification = !$scope.showVerification;
    };

    $scope.mustVerify = function(){

    }

    $scope.requestVerificationCode = function(){
      return $scope.showVerificationCode;
    }

});
