var echarts = require('echarts');
var _ = require('lodash');

var fsChart = function (type, value) {
    
    if (_.isEmpty(type) && _.isEmpty(value)) {
        throw new Error('Missing Argument Class or Id ');
    }
    this.selectorType = type;
    this.selector = value;
    this.domElement = '';

    /* Check If Echart Instance Exist */
    this.isInstanceExist = function () {
        this.getInstance();
        var flag = false;
        var chart = echarts.getInstanceByDom(this.domElement);
        if (chart) {
            chart.dispose();
            flag = true;
        }
        return flag;
    }
    /* Create Dom Instance for EChart Init */
    this.getInstance = function () {
        if (this.selectorType === 'class') {
            var elem = document.getElementsByClassName(this.selector);
            if (elem && elem.length > 1) {
                console.warn('Duplicate Class found ' + this.selector);
            }
            this.domElement = elem[0];
        } else if (this.selectorType === 'id') {
            this.domElement = document.getElementById(this.selector);
        }
        if (!this.domElement) {
            throw new Error('Invalid Selector Found');
        }
    }
    /* Draw Echart If Dom Instance Exists */
    this.draw = function (option) {
        if (!this.isInstanceExist()) {
            this.chartElement = echarts.init(this.domElement);
            if (_.isEmpty(option)) {
                throw new Error('Missing Argument Option');
            }
            this.chartElement.setOption(option);
            return this.chartElement;
        }
    }
}

module.exports = fsChart;

// Usage :
//
//var option = {
//     title: {
//         text: 'ECharts Bar'
//     },
//     tooltip: {},
//     legend: {
//         data:['month']
//     },
//     xAxis: {
//         data: ["jan","feb","march","April","may","june"]
//     },
//     yAxis: {},
//     series: [{
//         name: 'month',
//         type: 'bar',
//         data: [5, 20, 36, 10, 10, 20]
//     }]
// };

// Chart Api Calling :

// var chart = new fsChart('class', 'main').draw(option);
//         chart.on('click',function(){
//         	alert(1);
//         });
