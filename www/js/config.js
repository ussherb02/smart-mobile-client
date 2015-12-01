/**
 * Created by kojo on 29/11/15.
 */

angular.module('smart.configs', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.verify', {
      url: '/verify',
      views: {
        'menuContent': {
          templateUrl: 'templates/verify.html',
          controller: 'VerificationCtrl'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.customize', {
      url: '/customize',
      views: {
        'menuContent': {
          templateUrl: 'templates/customize.html',
          controller: 'CustomizeCtrl'
        }
      }
    })

    .state('app.reservation', {
      url: '/reservation',
      views: {
        'menuContent': {
          templateUrl: 'templates/reservation.html',
          controller: 'ReservationCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
