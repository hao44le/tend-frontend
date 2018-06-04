import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Error from './error/error';
import Wsbn from './wsbn/wsbn';
import Bottom from './bottom/bottom';
import Top from './top/top';
let componentModule = angular.module('app.components', [
  Home,
  About,
  Wsbn,
  Error,
  Bottom,
  Top
])

.name;

export default componentModule;
