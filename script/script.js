console.log('this is it');

var myApp = angular.module( 'myApp', [] );

myApp.controller('myFirstController', function() {
  // view model
  var vm = this;
  vm.oneThing = 'This is my first thing';
  vm.twoThing = 'This is my second thing';

  // two way binding example
  vm.something = '';
});

myApp.controller('myNestedController', function() {
  var vm = this;
  vm.nestedThing = 'Here is a nested thing!'
  vm.oneThing = 'This is our first thing inside nested'
});

myApp.controller('mySecondController', function($scope) {
  $scope.oneThing = 'This is my first thing';
});
