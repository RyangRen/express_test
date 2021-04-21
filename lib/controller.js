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
    $scope.data=[];
    for (let index = 0; index < 30; index++) {
        $scope.data.push({date: datetime_format(new Date(2021, 3, index+1)),
                        x: random_num(0,5),
                        y: random_num(0,5),
                        oxygen: random_num(1,100)})
    }

    $scope.range = (start=0, end=0) => {
        var arr = [];
        for (let index = start; index < end; index++) {
            arr.push(index);
        }
        return arr;
    };
    function random_num (min=0, max=1) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    function datetime_format (d) {
        return d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
    };

    function plot_oxygen(){
        var figure = document.getElementById("plot_test");

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: 'AAPL High',
            x: [],
            y: [],
            line: {color: '#17BECF'}
          }
          $scope.data.forEach((element) => {
              trace1.x.push(element.date),
              trace1.y.push(element.oxygen)
          });

          
          var layout = {
            title: 'Oxygen',
            xaxis: {
                title:{
                    text:"Date"
                },
              type: 'date'
            },
            yaxis: {
              title:{
                text: "oxygen"
              },
              autorange: true,
              type: 'linear'
            }
          };
          
          Plotly.newPlot(figure, [trace1], layout);
          
    }
    plot_oxygen();
});