function start_controller(){
    angular.module("test_app", []).controller("test_controller", function ($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "with AngularJS";

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
    });
};