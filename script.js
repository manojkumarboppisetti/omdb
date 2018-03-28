 angular.module('myApp', [])
     .controller('myCtrl', function ($scope, $http) {

         $scope.movie = "";
         $scope.moviesDetails = function (movie) {

             $http.get("http://www.omdbapi.com/?apikey=[your own api key]&t=" + $scope.movie)
                 .then(function (response) {
                     $scope.Movie = response.data;
                 })
         }
     })
