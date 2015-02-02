'use strict';

/**
 * @ngdoc overview
 * @name shopApp
 * @description
 * # shopApp
 *
 * Main module of the application.
 */
angular
  .module('shopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ngMockE2E'
  ])
  .config(function ($stateProvider , $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl:"views/main.html"
      })
      .state('item',{
        url: "/item",
        templateUrl:"views/item.html",
        controller:"ItemcontentCtrl"
      })
      .state('item.content',{
        url: "/item.content",
        templateUrl:"views/itemcontent.html",
        controller:"ItemcontentCtrl"
      });

  })
  .run(function ($httpBackend){
    var categorys = [ 
                  { 
                    id : 1 , 
                    name : "의류" , 
                    parent : null,
                    child : [  
                        { 
                          id : 100 , 
                          name : "여성의류" , 
                          parent : 1,
                          child : null
                        },

                        { 
                          id : 101 , 
                          name : "남성의류" , 
                          parent : 1,
                          child : null
                        }

                      ] 
                  },

                  { 
                    id : 2 , 
                    name : "화장품" , 
                    parent : null,
                    child : null
                  }



                ];

/*    여성의류
남성의류/캐주얼의류
빅사이즈/미시의류
언더웨어/잠옷/보정속옷
*/
    $httpBackend.whenGET('/items/categorys').respond(categorys);

    $httpBackend.whenGET(/views\//).passThrough();
  });
