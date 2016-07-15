'use strict';

angular.module('testAngularFullstackApp', ['testAngularFullstackApp.auth',
    'testAngularFullstackApp.admin', 'testAngularFullstackApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
