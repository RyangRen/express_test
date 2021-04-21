angular.module("test_app", []).controller("test_controller", function ($scope, $http, $interval, $timeout) {

    $scope.current_time = new Date();
    $interval(() => { $scope.current_time = new Date(); }, 1000);

    // $scope.helloTo = {};

    // $timeout(
    //     $http({
    //         method: "GET",
    //         url: "test"
    //     }).then((response) => {
    //         $scope.helloTo.title = response.data;
    //     })
    // , 1000);

    // $scope.calculator = [
    //     {op: "+", result: 0},
    //     {op: "-", result: 0},
    //     {op: "*", result: 0},
    //     {op: "/", result: 0},
    // ]

    // $scope.calculate = () => {
    //     $scope.calculator[0].result = $scope.param_a + $scope.param_b;
    //     $scope.calculator[1].result = $scope.param_a - $scope.param_b;
    //     $scope.calculator[2].result = $scope.param_a * $scope.param_b;
    //     $scope.calculator[3].result = $scope.param_a / $scope.param_b;
    // };

    // $interval($scope.calculate, 512);

    // $scope.data = [
    //     {date: "2021-04-01 12:34:56", x: 0.0, y:0.0},
    //     {date: "2021-04-02 12:34:56", x: 1.0, y:0.1},
    //     {date: "2021-04-03 12:34:56", x: 0.1, y:1.0},
    //     {date: "2021-04-04 12:34:56", x: 1.1, y:1.1}
    // ];
    $scope.data = [];
    for (let index = 0; index < 30; index++) {
        $scope.data.push({
            date: datetime_format(new Date(2021, 3, index + 1)),
            flow: random_num(0, 100),
            oxygen: random_num(1, 100)
        })
    }
    // $interval(()=>{
    //     $scope.data.push(create_data());
    //     $scope.data.shift();
    //     plot_oxygen();
    //     plot_flow();
    // }, 1000);

    $scope.range = (start = 0, end = 0) => {
        var arr = [];
        for (let index = start; index < end; index++) {
            arr.push(index);
        }
        return arr;
    };
    function create_data() {
        return {date: datetime_format(new Date(2021, 3,30)), flow: random_num(0,100), oxygen: random_num(0,100)};
    }
    function random_num(min = 0, max = 1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    function datetime_format(d) {
        return d.getFullYear().toString() + "-" + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "-" + (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + " " + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) + ":00";
    };

    class Plot {
        constructor(element_id, title_name, key) {
            this.id = document.getElementById(element_id);

            this.data = {
                type: "scatter",
                mode: "lines",
                name: 'AAPL High',
                x: [],
                y: [],
                line: { color: '#17BECF' }
            };

            this.layout = {
                title: title_name,
                xaxis: {
                    title: {
                        text: "Date"
                    },
                    type: 'date',
                    // rangeslider: {range: [trace1.x[0], trace1.x[trace1.x.length-1]]},
                },
                yaxis: {
                    title: {
                        text: title_name
                    },
                    autorange: true,
                    type: 'linear'
                }
            };
            this.plot = () => {
                $scope.data.forEach((item) => { this.data.x.push(item.date), this.data.y.push(item[key]); });
                Plotly.newPlot(this.id, [this.data], this.layout);
            };
        }
    }
    var plot_oxygen = new Plot("oxygen", "oxygen", "oxygen");
    plot_oxygen.plot();
    
    var plot_flow = new Plot("flow", "flow", "flow");
    plot_flow.plot();

    
});