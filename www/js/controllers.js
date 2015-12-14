angular.module('smart.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.showLogin = false;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

    $scope.toggleLogin();
  };

    $scope.toggleLogin = function(){
      $scope.showLogin = !$scope.showLogin;
    };

    $scope.logout = function(){
      $scope.toggleLogin();
      $scope.loginData = {};
    };

    $scope.go = function(url) {
      $location.path(url);
    }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

  .controller('HomeCtrl', function($scope, $stateParams) {
  })
.controller('ReservationCtrl', function($scope, $stateParams) {
})

  .controller('AboutCtrl', function($scope, $stateParams) {
  })

  .controller('CustomizeCtrl', function($scope, $stateParams) {
  })

  .controller('ReservationCtrl', function($scope, $stateParams) {
  })

  .controller('MapCtrl', ['$scope', function ($scope) {
    var latLng = new google.maps.LatLng(5.58, -0.22345);
    $scope.mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /*$scope.addMarker = function($event, $params) {
      var latLng = new google.maps.LatLng(5.58, -0.22345);

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: latLng
      });

      new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Hello World!'
      });
    }*/
  }]);
