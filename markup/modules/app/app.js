;(function () {
  'use strict';

  angular
    .module('news-collector', [
      'ui.router',
      'ui.bootstrap',
      'news-collector.search'//,
      //'news-collector.newsList'
    ])
    .config(newsCollectorConfig)
    .controller('newsListCtrl', newsListCtrl)
    .filter('htmls', htmlsFilter)
  ;

  //конфигурируем в данном случае роутинг на дефолтную страницу
  function newsCollectorConfig($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/search');

    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
      })
      .state('newsList', {
        url: '/newsList',
        templateUrl: 'views/newsList.html',
        controller: 'newsListCtrl'
      })
      .state('newsRead', {
        url: '/newsRead',
        templateUrl: 'views/newsRead.html',
        controller: 'newsListCtrl'
      })
    ;
  }

  function newsListCtrl($scope, $rootScope, $state) {

    if ($rootScope.searchResults) {
      if ($rootScope.searchResults[0] === 0) {
        // если вернулось ноль статей, формируем
        // свепциальный массив с сообщением об этом
        $scope.items = [{
          text: 'К сожалению, ни одной новости по вашему запросу не найдено!',
          empty: true
        }];
      } else {
        // удаляем первый элемент поскольку новости в нём нет
        $rootScope.searchResults.splice(0, 1);
        $scope.items = $rootScope.searchResults;
      }
    } else {
      $state.go('search');
    }

    $scope.read = function (news) {
      console.log(news);
      $rootScope.currentNews = news;
      $scope.currentNews = $rootScope.currentNews;
      $state.go('newsRead');
    };

    $scope.showImage = function (image) {
      PopUpShow(image);
    };
  }
  // custom filter
  function htmlsFilter($sce) {
    return function (state) {
      return $sce.trustAsHtml(state);
    };
  }
})();
