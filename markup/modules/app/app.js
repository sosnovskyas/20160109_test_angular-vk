;(function () {
  'use strict';

  angular
    .module('news-collector', [
      'ui.router',
      'news-collector.search',
      'news-collector.newsList'
    ])
    .config(NewsCollectorConfig)
  ;

  //конфигурируем в данном случае роутинг на дефолтную страницу
  function NewsCollectorConfig($urlRouterProvider, $stateProvider, $locationProvider) {
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
        templateUrl: 'views/newsList.html'
        //,
        //controller: 'searchCtrl'
      })
      .state('newsRead', {
        url: '/newsRead',
        templateUrl: 'views/newsRead.html'
        //,
        //controller: 'searchCtrl'
      })
    ;

    //$locationProvider.html5Mode({
    //  enabled: true,
    //  requireBase: false
    //});
  }
})();
