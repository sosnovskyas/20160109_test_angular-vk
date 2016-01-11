;(function () {
  'use strict';
  angular
    .module('news-collector.search', [
    ])
      .controller('searchCtrl', searchCtrl)
  ;
  // @ngInject
  function searchCtrl($scope, $state, $rootScope) {
    $scope.submit = function () {
      if ($scope.text){
        //console.log('submit: ', $scope.text);
        sendStat($scope.text);
        VK.Api.call('newsfeed.search', {
            q: $scope.text,
            extended: 1
          },
          function (data) {
            console.log(data);
            $rootScope.searchResults = data.response;
            $state.go('newsList');
          }
        );
        //VK.Auth.getLoginStatus(function (response) {
        //    if (response.session) {
        //      console.log('user: ' + response.session.mid);
        //    } else {
        //      console.log('not auth');
        //    }
        //  }
        //);
      } else {
        console.warn('submit: ', $scope.text);
      }
    };
  }
})();
