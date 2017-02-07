import angular from 'angular'

const app = angular.module('app', [require('angular-route')])

app.controller('appCtrl', function($scope) {
  const teleportWelcome = JSON.parse(window.TELEPORT_WELCOME_STRING)
  $scope.templates = teleportWelcome.templates ? teleportWelcome.templates : []
})

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'static/angular-templates/index.html',
        controller: 'appCtrl'
    })
});

window.addEventListener('load', function() {
  const divElement = document.getElementById('app_div')
  divElement.innerHTML = "<div id='app_view_div' ng-view></div>"

  const divViewElement = document.getElementById('app_view_div')
  angular.bootstrap(angular.element(divViewElement), ['app'])
})

export default app
