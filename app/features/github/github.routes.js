export default function routes($stateProvider) {
  $stateProvider
    .state('github', {
      url: '/github/:user',
      template: require('./github.html'),
      controller: 'GitHubController',
      controllerAs: 'github'
    })
}