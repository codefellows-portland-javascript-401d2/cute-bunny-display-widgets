import angular from 'angular';

const controller = angular.module( 'mainCtrl', [] )
  .controller( 'main', ($scope) => {
    $scope.foo = 'foo';
  });

export default controller.name;