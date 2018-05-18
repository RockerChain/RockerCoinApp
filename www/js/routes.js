angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/Home',
    views: {
      'tab2': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.myPurchases', {
    url: '/mypurchases',
    views: {
      'tab3': {
        templateUrl: 'templates/myPurchases.html',
        controller: 'myPurchasesCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.verify', {
    url: '/verify',
    views: {
      'tab1': {
        templateUrl: 'templates/verify.html',
        controller: 'verifyCtrl'
      }
    }
  })

  .state('tabsController.results', {
    url: '/results',
    views: {
      'tab1': {
        templateUrl: 'templates/results.html',
        controller: 'resultsCtrl'
      }
    }
  })

  .state('tabsController.notFound', {
    url: '/notFound',
    views: {
      'tab1': {
        templateUrl: 'templates/notFound.html',
        controller: 'notFoundCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/Home')


});