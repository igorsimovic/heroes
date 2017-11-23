var app = angular.module('heroesApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/heroes',
        {
            controller: 'HeroesController',
            templateUrl: '/app/partials/heroes.html'
        })
        //Define a route that has a route parameter in it (:heroID)
        .when('/heroDetails/:heroID',
        {
            controller: 'HeroeDetailsController',
            templateUrl: '/app/partials/heroDetails.html'
        })
        .otherwise({ redirectTo: '/heroes' });
});

