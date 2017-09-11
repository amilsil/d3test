var svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

var timeTakenPerPixel = 20;
var gap = 20;

function renderOneFlow(group, path, speed, reverse) {
    
    function transition() {
        var p = circleSel.transition()
            .duration(duration)
            .ease(d3.easeLinear)
            .attrTween("transform", translateAlongPath(path.node()))
            .on("end", function () { d3.select(this).call(transition, false); });
    }

    function translateAlongPath(path) {
        return function (d, i, a) {

            return function (timeFraction) {
                if(reverse) {
                    timeFraction = 1 - timeFraction;
                }
                var tOfThisArrow = timeFraction + (1 / noOfArrows) * i;
                var l = (tOfThisArrow * length) % length;
                var point = path.getPointAtLength(l);
                return "translate(" + point.x + ", " + point.y + ")";
            };

        };
    }

    var length = path.node().getTotalLength();
    var noOfArrows = parseInt(length / gap);
    var timeTakenPerPixel = gap * 10 / speed;
    var duration = length * timeTakenPerPixel;

    var circleSel = group.selectAll("circle")
        .data(d3.range(0, noOfArrows))
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("fill", "white")
        .attr("stroke", "red")
        .attr("stroke-width", "2")
        .attr("stroke-linecap", "round");

    transition();
}


function render() {
    
    var flow2Group = svg.append("g")
        .attr("transform", "translate(100,100)");

    var flow2Path = flow2Group.append("path")
        .attr("d", "M 0 0, V 100, C 0 150, 0 150, 50 150, H 400")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", "4")
        .attr("stroke-linecap", "round");
    
    renderOneFlow(flow2Group, flow2Path, 10);


    var flow2Group = svg.append("g")
    .attr("transform", "translate(200,150)");

    var flow2Path = flow2Group.append("path")
        .attr("d", "M 0 0, V 100, C 0 150, 0 150, 50 150, H 400")
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", "4")
        .attr("stroke-linecap", "round");

    renderOneFlow(flow2Group, flow2Path, 20, true);
}

render();