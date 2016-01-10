;(function () {
  'use strict';
  angular
    .module('news-collector.newsList', [
    ])
    .controller('newsListCtrl', newsListCtrl)
    .filter('htmls', htmlsFilter)
  ;

  // @ngInject
  function newsListCtrl($rootScope, $scope, $state) {
    if ($rootScope.searchResults) {
      if ($rootScope.searchResults[0] == 0) {
        // если вернулось ноль статей, формируем
        // свепциальный массив с сообщением об этом
        $scope.items = [{
          text: 'К сожалению, ни одной новости по вашему запросу не найдено!'
        }];
      } else {
        // удаляем первый элемент поскольку новости в нём нет
        $rootScope.searchResults.splice(0, 1);
        $scope.items = $rootScope.searchResults;
      }
    } else {
      $state.go('search');
    }
  }

  function htmlsFilter($sce) {
    return function (state) {
      return $sce.trustAsHtml(state);
    };
  }
})();
