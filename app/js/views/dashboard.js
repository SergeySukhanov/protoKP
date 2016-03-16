/**
 *
 * @author SNSukhanov <sergey.n.sukhanov@firstlinesoftware.com>
 * @version 03/15/2016
 * @see
 *
 * © 2016 All Rights Reserved
 */

var DashboardView = Ractive.extend({
    el:"#mainSection",

    complete:function(){
        Tools.loadAndRenderGrid(
            $(this.el).find(".accounts-wrapper"),
            Config.data.accounts.filter( function(a) {return a.new;})
            //Config.data.newAccaunts()
        );

        var data1 = [
            {
                label:"ООО «Финанс»",
                value:1570000
            },
            {
                label:"ЗАО «Стройтехинжиниринг» ",
                value:5780000
            },
            {
                label:"ООО «Релиф»",
                value:1260000
            },
            {
                label:"ОАО «ЛизингИнкорпорейтед»",
                value:9750000
            },
            {
                label:"Остальные",
                value:15700000
            }

        ];
        var data2 = [
            {
                label:"ООО «Финанс»",
                value:310000
            },
            {
                label:"ЗАО «Стройтехинжиниринг» ",
                value:740000
            },
            {
                label:"ООО «ЮнонаПлюс»",
                value:470000
            },
            {
                label:"ОАО «ЛизингИнкорпорейтед»",
                value:289000
            },
            {
                label:"Остальные",
                value:110000
            }

        ];
        var widthAndHeight = $("#accountsPie").width();

        if(widthAndHeight > 400){
            widthAndHeight = 400;
        }

        DrawPieChart3("#accountsPie", data1, widthAndHeight, widthAndHeight);
        DrawPieChart3("#discountPie", data2, widthAndHeight, widthAndHeight);
        DrawPieChart4();

        function DrawPieChart3(elem, data, w, h){
            var width = w,
                height = h,
                radius = Math.min(width, height) / 2;

            var color = d3.scale.ordinal()
                .range(["#0552B9", "#5978C7", "#247F71", "#233450", "#a05d56", "#d0743c", "#ff8c00"]);

            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(0);

            var labelArc = d3.svg.arc()
                .outerRadius(radius - 40)
                .innerRadius(radius - 40);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.value; });

            var svg = d3.select(elem).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var g = svg.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");

            g.append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color(d.value); });

        }

        function DrawPieChart4(){
            $('#container').highcharts({
                title: {
                    text: 'График доходности операций',
                    x: -20 //center
                },
                xAxis: {
                    categories: ['08.02.2016', '09.02.2016', '10.02.2016', '11.02.2016', '12.02.2016', '15.02.2016',
                        '16.02.2016', '17.02.2016', '18.02.2016', '19.02.2016']
                },
                yAxis: {
                    title: {
                        text: 'Сумма, руб'
                    },
                    min:0,
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'horizontal',
                    verticalAlign: 'bottom',
                    borderWidth: 0
                },
                series: [{
                    zIndex: 2,
                    type:'spline',
                    name: 'Сумма выставленных счетов',
                    data: [100000, 140000, 250000, 280000, 90000, 180000, 200000, 210000, 190000, 300000]
                }, {
                    zIndex: 2,
                    type:'spline',
                    color:'#43b02a',
                    name: 'Сумма выплат',
                    data: [90000, 120000, 100000, 250000, 80000, 150000, 150000, 200000, 160000, 280000]
                }, {
                    color:'#003087',
                    type:'area',
                    zIndex:1,
                    name: 'Суммарный размер прибыли',
                    data: [10000, 30000, 80000, 110000, 120000, 150000, 200000, 210000, 240000,260000]
                }]
            });
        }
    }
});