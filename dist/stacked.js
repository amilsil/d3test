"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var d3 = require("d3");
var points = [
    [0, 0],
    [0, 100],
    [70, 100]
];
var svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);
var path = svg.append("path")
    .attr("d", "M 0 0, V 70, C 0 100, 0 100, 30 100, H 60")
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", "4")
    .attr("stroke-linecap", "round");
var point = path.node().getPointAtLength(102);
console.log(point);
var circle = svg.append("circle")
    .attr("r", 13)
    .attr("transform", "translate(" + point.x + ", " + point.y + ")");
//# sourceMappingURL=stacked.js.map