angular.module("test_app", []).controller("test_controller", function ($scope, $http, $interval, $timeout) {

    $scope.current_time = new Date();
    $interval(() => { $scope.current_time = new Date(); }, 1000);

    $scope.helloTo = {};

    $timeout(
        $http({
            method: "GET",
            url: "test"
        }).then((response) => {
            $scope.helloTo.title = response.data;
        })
    , 1000);

    $scope.calculator = [
        {op: "+", result: 0},
        {op: "-", result: 0},
        {op: "*", result: 0},
        {op: "/", result: 0},
    ]

    $scope.calculate = () => {
        $scope.calculator[0].result = $scope.param_a + $scope.param_b;
        $scope.calculator[1].result = $scope.param_a - $scope.param_b;
        $scope.calculator[2].result = $scope.param_a * $scope.param_b;
        $scope.calculator[3].result = $scope.param_a / $scope.param_b;
    };
});