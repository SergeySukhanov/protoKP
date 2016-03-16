/**
 * Created by DMitin on 15.03.2016.
 */
var AccountInfo = Ractive.extend({
    el:"#accountContainer",
    complete:function(){

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
        var widthAndHeight = $("#chart-item").width();


        if(widthAndHeight > 300){
            widthAndHeight = 300;
        }
        DrawPieChart3("#chart-item", data2, widthAndHeight, widthAndHeight);

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


    }
});