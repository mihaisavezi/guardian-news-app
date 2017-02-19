import angular from 'angular';

import {coreModule} from './app/core/index';
import {sectionsModule} from './app/sections/index';
import {articlesModule} from './app/articles/index';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/layout/main';
import {header} from './app/layout/header/header';
import {title} from './app/layout/title';
import {footer} from './app/layout/footer/footer';

import './index.scss';

angular
  .module('app', [coreModule, sectionsModule, articlesModule, 'ui.router'])
  .constant('api', {
    key: 'a7a2bca3-6f31-4651-8020-d63319fc2bd3'
  })
  .config(routesConfig)
  .component('app', main)
  .component('guardianHeader', header)
  .component('guardianTitle', title)
  .component('guardianFooter', footer);
