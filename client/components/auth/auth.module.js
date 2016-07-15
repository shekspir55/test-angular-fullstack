'use strict';

angular.module('testAngularFullstackApp.auth', ['testAngularFullstackApp.constants',
    'testAngularFullstackApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
