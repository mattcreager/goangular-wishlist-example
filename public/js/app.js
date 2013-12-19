/* jshint browser: true */
/* global angular, CONFIG, _ */

'use strict';

angular.module('WishList', ['goangular'])
  .config(function(goConnectionProvider) {
    goConnectionProvider.set(CONFIG.connectUrl);
  })
  .controller('ListCtrl', function($scope, goConnection) {
    var itemsKey;

    goConnection.ready().then(function(goinstant) {
      return goinstant.room('a-list').join().get('room');
    }).then(function(room) {
      itemsKey = room.key('items');

      return itemsKey.get().get('value');
    }).then(function(value) {
      $scope.items = value || {};

      $scope.addWish = function() {
        if (_.isEmpty($scope.wish)) {
          return;
        }

        itemsKey.add($scope.wish);
        $scope.wish = '';
      };

      $scope.removeWish = function(key) {
        itemsKey.key(key).remove();
      };

      itemsKey.on('remove', {
        local: true,
        bubble: true,
        listener: function(value, context) {
          $scope.$apply(function() {
            delete $scope.items[(_.last(context.key.split('/')))];
          });
        }
      });

      itemsKey.on('add', {
        local: true,
        listener: function(value, context) {
          $scope.$apply(function() {
            $scope.items[(_.last(context.addedKey.split('/')))] = value;
          });
        }
      });
    }).finally(function() {
      $scope.$apply();
    });
  });