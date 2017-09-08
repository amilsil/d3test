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

var duration = 2000;
var delay = duration / noOfArrows;

var arrow = group.selectAll("path")
    .data(d3.range(0, noOfArrows))
    .enter()
    .append("path")
        .attr("d", "M-8 12, 0 0, 8 12")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", "4")
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
    var l = path.getTotalLength();
    return function(d, i, a) {
      return function(t) {
        var p = path.getPointAtLength(t * l);
        
        var p1 = path.getPointAtLength(t * l);
        var p2 = path.getPointAtLength(t * l + 0.01);
        var angle = 90 + Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        return "translate(" + p1.x + ", " + p1.y + ") rotate(" + angle + ")";
      };
    };
}
