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
var gap = 50;
var noOfArrows = parseInt(length / gap) + 1;

var duration = 500;
var delay = duration / noOfArrows;

var arrow = group.selectAll("path")
    .data(d3.range(0, noOfArrows))
    .enter()
    .append("path")
        .attr("d", "M-8 12, 0 0, 8 12")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", "4")
        .attr("stroke-linecap", "round")
        .call(transition, true);

function transition(path, firstTime) {
    var p = path.transition()
        .duration(duration);
    
    if(firstTime) {
        p = p.delay(function(d, i) { return d * delay });
    }

    p.ease(d3.easeLinear)
    .attrTween("transform", translateAlongPath)
    .on("end", function () { d3.select(this).call(transition, false); });
}

function translateAlongPath(d, i, a) {

    var l = gap * d,
        i = d3.interpolateNumber(gap * (d -1), gap * d);

    return function (time) { 
        var number = i(time); 
        var p1 = path.node().getPointAtLength(number);
        var p2 = path.node().getPointAtLength(number + 1);
        var angle = 90 + Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        return "translate(" + p1.x + ", " + p1.y + ") rotate(" + angle + ")";
    };
}
