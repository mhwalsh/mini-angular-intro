console.log('this is it');

var myApp =angular.module( 'myApp', [] );

myApp.controller('myFirstController', function() {
  this.test = 'This is my first thing';
});
