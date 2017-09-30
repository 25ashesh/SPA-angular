//Inject the cityService to the controllers' array and also to the function

//two controllers

weatherApp.controller('homeController', ['$scope', 'cityService',
    function ($scope, cityService) {

        $scope.city = cityService.city;

        //watch the value of city from cityservice and when it changes
        //update it to the new value of city
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });

    }]);

weatherApp.controller('forecastController', ['$scope', '$resource','$routeParams', 'cityService',
    function ($scope, $resource,$routeParams, cityService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || '2';

        $scope.KEY = 'eab660208577500ac07ef6a225d11be2';

        $scope.weatherAPI =
            $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"},
                {get: {method: "JSONP"}});

        $scope.weatherResult = $scope.weatherAPI.get({appid: $scope.KEY, q: $scope.city, cnt: $scope.days});


        $scope.convertToFarenheit = function (degK) {
            return Math.round((1.8 * (degK - 273))+32);
        };

        $scope.convetToDate = function (dt) {
            return new Date(dt*1000);
        };
    }]);
