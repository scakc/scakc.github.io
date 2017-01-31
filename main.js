(function (){
'use strict';

angular.module('MyPage',['ngAnimate'])
.controller('FrameController',FrameController)



function FrameController($scope,$window){

  $scope.name = 'home';
  $scope.color = {
    'home':'#2F4F4F',
    'projects':'#2D3A4D',
    'skills':'#00FA9A',
    'about':'#48D1CC'
  };
  $scope.wbl = 20;

  $scope.completetion = {
    html:0.9,
    css:0.9,
    js:0.8,
    jquery:0.8,
    bootstrap:0.67,
    android:0.7,
    java:0.7,
    c:0.85,
    python:0.8,
    git:0.68,
    ng:0.8,
    sql:0.77,
    ajax:0.65,
    matlab:0.88,
    da:0.7,
    ml:0.7,
    ai:0.75,
    fem:0.8,
    cfd:0.85,
    nodejs:0.67
  };


  $scope.skillStyle = {
    html:{'width':$scope.wbl*$scope.completetion.html + "vw"},
    css:{'width':$scope.wbl*$scope.completetion.css + "vw"},
    js:{'width':$scope.wbl*$scope.completetion.js + "vw"},
    jquery:{'width':$scope.wbl*$scope.completetion.jquery + "vw"},
    bootstrap:{'width':$scope.wbl*$scope.completetion.bootstrap + "vw"},
    android:{'width':$scope.wbl*$scope.completetion.android + "vw"},
    java:{'width':$scope.wbl*$scope.completetion.java + "vw"},
    c:{'width':$scope.wbl*$scope.completetion.c + "vw"},
    python:{'width':$scope.wbl*$scope.completetion.python + "vw"},
    git:{'width':$scope.wbl*$scope.completetion.git + "vw"},
    ng:{'width':$scope.wbl*$scope.completetion.ng + "vw"},
    sql:{'width':$scope.wbl*$scope.completetion.sql + "vw"},
    ajax:{'width':$scope.wbl*$scope.completetion.ajax + "vw"},
    matlab:{'width':$scope.wbl*$scope.completetion.matlab + "vw"},
    da:{'width':$scope.wbl*$scope.completetion.da + "vw"},
    ml:{'width':$scope.wbl*$scope.completetion.ml + "vw"},
    ai:{'width':$scope.wbl*$scope.completetion.ai + "vw"},
    fem:{'width':$scope.wbl*$scope.completetion.fem + "vw"},
    cfd:{'width':$scope.wbl*$scope.completetion.cfd + "vw"},
    nodejs:{'width':$scope.wbl*$scope.completetion.nodejs + "vw"}
  };


  // $scope.percent = {'width':''+widthbar*0.15+'px'};


  $scope.tabClicked = function (id){
    var cname = id;
    $scope.name = cname;





  };



  $scope.openPage = function (url){
    // console.log(url);
    if(url!=="http://scakc.github.io"){
      $window.open(""+url );
    }else{
      alert('You are on the same page!');
    }
  };

}



})();
