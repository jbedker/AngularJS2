

/*   This was created when I created the controller file with $scope
(function () {
    'use strict';

    angular
        .module('app')
        .controller('myController', myController);

    myController.$inject = ['$scope'];

    function myController($scope) {
        $scope.title = 'myController';

        activate();

        function activate() { }
    }
})();
*/


angular.module('myApp1', [])

    .controller('myCtrl1', function ($scope, $http) {

    $scope.firstName = "John1";
    $scope.lastName = "Doe1";

    $scope.fullName = function () { return $scope.firstName + " - " + $scope.lastName; };

    $scope.fullName2 = function () { return $scope.firstName + " ---- " + $scope.lastName; };

    $scope.names = ["Emil", "Tobias", "Linus"];

    $scope.names2 = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    $scope.orderByMe = function (x) { $scope.myOrderBy = x; };


    $http({
        method: "GET",
        url: "https://www.w3schools.com/angular/customers.php" })
        .then(function mySuccess(response) {
            $scope.mess = 'Success!!';
            $scope.myData = response.data.records;
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statusText;  
        },
            function myError(response) {
                $scope.mess = 'Error!!';
                $scope.myData = response.statusText;
                $scope.content = response.data;
                $scope.statuscode = response.status;
                $scope.statustext = response.statusText;  
            });

    })

.controller('myCtrl2', function ($scope) {
        $scope.firstName3 = "John3";
        $scope.lastName3 = "Doe3";

    });




/*

angular.module('myApp1',  []).controller('myCtrl1', function ($scope) {

    $scope.firstName = "John1",
    $scope.lastName = "Doe1",

    $scope.fullName = function () { return $scope.firstName + " - " + $scope.lastName; };
});



angular.module('myApp2', []).controller('myCtrl2', function ($scope) {

    $scope.firstName2 = "John2",
    $scope.lastName2 = "Doe2",

    $scope.fullName2 = function () { return $scope.firstName2 + " -- " + $scope.lastName2; };
});


angular.module('myApp3', []).controller('myCtrl3', function ($scope) {

    $scope.names = ["Emil", "Tobias", "Linus"];

});


angular.module('myApp4', []).controller('namesCtrl', function ($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
});


angular.module('myApp5', [])

        .filter('myFormat', function () {
            return function (x) {
                var i, c, txt = "";
                for (i = 0; i < x.length; i++) {
                    c = x[i];
                    if (i % 2 == 0) {
                        c = c.toUpperCase();
                    }
                    txt += c;
                }
                return txt;
            };
        })

            .controller('namesCtrl2', function ($scope) {
                $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];

});



angular.module('myApp6', []).controller('myCtrl6', function ($scope, $http) {
    $http({
        method: "GET",
        url: "welcome.htm"
    }).then(function mySuccess(response) {
        $scope.myWelcome = response.data;
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
});

*/



