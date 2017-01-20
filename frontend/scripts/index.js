import angular from 'angular';

import '../styles/index.css';

const divElement = document.getElementById('app_div')
divElement.innerHTML = "<div ng-app='app' ng-controller='appCtrl'><img src='{{angularpic}}' /></div>"

const app = angular.module('app', [])

app.controller('appCtrl', function($scope) {
    $scope.angularpic = '/static/images/angular.png'
})
