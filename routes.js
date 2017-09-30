//ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Pages/home.htm',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'Pages/forecast.htm',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {
            templateUrl: 'Pages/forecast.htm',
            controller: 'forecastController'
        })
});