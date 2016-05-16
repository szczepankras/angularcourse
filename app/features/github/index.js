import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularFire from 'angularfire';
import firebase from 'firebase';

import routing from './github.routes';
import GitHubController from './github.controller';
import githubUser from './directives/github_user';
import userRepos from './directives/user_repos';
import GitHubService from './github.service';
import userInput from './directives/user_input';
import githubComments from './directives/github_comments';

export default angular.module('app.github', [uirouter, angularFire])
  .config(routing)
  .controller('GitHubController', GitHubController)
  .directive('githubUser', githubUser)
  .directive('userRepos', userRepos)
  .directive('userInput', userInput)
  .directive('githubComments', githubComments)
  .service('GitHubService', GitHubService)
  .name;
  
  