var app = angular.module('loginApp', []);

app.controller('loginController', function($scope) {
    $scope.login = function() {
        if ($scope.userType === 'employee') {
            // Handle employee login logic here
            console.log('Employee login with Username: ' + $scope.username + ' and Password: ' + $scope.password);
        } else if ($scope.userType === 'admin') {
            // Handle admin login logic here
            console.log('Admin login with Username: ' + $scope.username + ' and Password: ' + $scope.password);
        } else {
            // Invalid user type selected
            console.log('Invalid user type selected');
        }
    };
});
