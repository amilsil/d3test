var svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

var group = svg.append("g")
    .attr("transform", "translate(100,100)");

var path = group.append("path")
    .attr("d", "M 0 0, V 100, C 0 150, 0 150, 50 150, H 100")
    //.attr("d", "M 0 0, V 300")
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", "4")
    .attr("stroke-linecap", "round");

var length = path.node().getTotalLength();
console.log('length', length);
var gap = 20;
console.log('gap', gap);
var noOfArrows = parseInt(length / gap);
console.log('number of arrows', noOfArrows);

var duration = 5000;

var arrow = group.selectAll("circle")
    .data(d3.range(0, noOfArrows))
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "white")
    .attr("stroke", "red")
    .attr("stroke-width", "2")
    .attr("stroke-linecap", "round");

transition();

function transition() {
    var p = arrow.transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attrTween("transform", translateAlongPath(path.node()))
        .on("end", function () { d3.select(this).call(transition, false); });
}

function translateAlongPath(path) {
    return function (d, i, a) {

        return function (t) {
            var tOfThisArrow = t + (1/noOfArrows) * i;
            var l = (tOfThisArrow * length) % length;
            var point = path.getPointAtLength(l);
            return "translate(" + point.x + ", " + point.y + ")";
        };

    };
}
