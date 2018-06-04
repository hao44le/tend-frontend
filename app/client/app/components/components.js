import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Error from './error/error';
import Wsbn from './wsbn/wsbn';
let componentModule = angular.module('app.components', [
  Home,
  About,
  Wsbn,
  Error
])

.name;

export default componentModule;
