console.log('this is it');

var myApp =angular.module( 'myApp', [] );

myApp.controller('myFirstController', function() {
  // view model
  var vm = this;
  vm.oneThing = 'This is my first thing';
  vm.twoThing = 'This is my second thing';

  var sillyString = 'heyyyyy ';
  vm.bobString = addBob(sillyString);

  function addBob(aString) {
    console.log(this);
    return aString + 'Bob!';
  }
});
