angular.module("test_app", []).controller("test_controller", function ($scope, $http, $interval, $timeout) {

    $scope.current_time = new Date();
    $interval(() => { $scope.current_time = new Date(); }, 1000);

    $scope.helloTo = {};

    $scope.result = {};
    $scope.result.sum = 0;
    $scope.result.dif = 0;
    $scope.result.mul = 0;
    $scope.result.div = 0;

    $scope.calculate = () => {
        $scope.result.sum = $scope.param_a + $scope.param_b;
        $scope.result.dif = $scope.param_a - $scope.param_b;
        $scope.result.mul = $scope.param_a * $scope.param_b;
        $scope.result.div = $scope.param_a / $scope.param_b;
    };

    $timeout(
        $http({
            method: "GET",
            url: "test"
        }).then((response) => {
            $scope.helloTo.title = response.data;
        })
    , 1000);
});