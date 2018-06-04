import angular from 'angular';
import uiRouter from 'angular-ui-router';
import wsbnComponent from './wsbn.component';

let wsbnModule = angular.module('wsbn', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";



  $stateProvider
    .state('wsbn', {
      url: '/wsbn',
      component: 'wsbn'
    });
})
.component('wsbn', wsbnComponent)

.name;

export default wsbnModule;
