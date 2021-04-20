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

    $interval($scope.calculate, 512);

    $scope.data = [
        {id: 1, date: "2021-04-01 12:34:56", x: 0.0, y:0.0},
        {id: 2, date: "2021-04-02 12:34:56", x: 1.0, y:0.1},
        {id: 3, date: "2021-04-03 12:34:56", x: 0.1, y:1.0},
        {id: 4, date: "2021-04-04 12:34:56", x: 1.1, y:1.1}
    ]

    $scope.range = (start=0, end=0) => {
        var arr = [];
        for (let index = start; index < end; index++) {
            arr.push(index);
        }
        return arr;
    }
});