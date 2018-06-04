import angular from 'angular';
import uiRouter from 'angular-ui-router';
import topComponent from './top.component';

let topModule = angular.module('top', [
  uiRouter
])

.component('top', topComponent)

.name;

export default topModule;
