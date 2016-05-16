import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';
import home from './features/home';
import github from './features/github';

const ngModule = angular
                        .module('app', [uirouter, home, github])
                        .config(routing);
