import angular from 'angular';

import {sectionsModule} from './app/sections/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/layout/main';
import {header} from './app/layout/header/header';
import {title} from './app/layout/title';
import {footer} from './app/layout/footer/footer';

import './index.scss';

angular
  .module('app', [sectionsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('guardianHeader', header)
  .component('guardianTitle', title)
  .component('guardianFooter', footer);
