var svg = d3.select("body").append("svg")
    .attr("width", 500)
    .attr("height", 500);

function renderMinigrid() {
    var icon1Group = svg.append("g")
        .attr('class', 'minigrid');
    icon1Group.append("path")
        .attr("d", "M376.42,480.15H346.34a1.4,1.4,0,0,1-1.4-1.4V477a1.4,1.4,0,0,1,0-.29l8.85-42.47a1.4,1.4,0,0,1,1.37-1.11h12.39a1.4,1.4,0,0,1,1.37,1.11l8.85,42.47a1.4,1.4,0,0,1,0,.29v1.77A1.4,1.4,0,0,1,376.42,480.15Zm-28.69-2.79H375v-.23l-8.59-41.22H356.32l-8.59,41.22Z")
    icon1Group.append("path")
        .attr("d", "M415.36,480.15H373.26a1.4,1.4,0,0,1,0-2.79H414v-14.9h-2.14a1.4,1.4,0,0,1-1.16-.62l-6.66-10h-1.4v9.22a1.4,1.4,0,0,1-1.4,1.4h-3.54a1.4,1.4,0,0,1-1.16-.62l-6.66-10h-1.4v9.22a1.4,1.4,0,0,1-1.4,1.4H383.5a1.4,1.4,0,0,1-1.16-.62l-6.66-10h-4.78a1.4,1.4,0,0,1,0-2.79h5.53a1.4,1.4,0,0,1,1.16.62l6.66,10h1.4v-9.22A1.4,1.4,0,0,1,387,449h3.54a1.4,1.4,0,0,1,1.16.62l6.66,10h1.4v-9.22a1.4,1.4,0,0,1,1.4-1.4h3.54a1.4,1.4,0,0,1,1.16.62l6.66,10h2.79a1.4,1.4,0,0,1,1.4,1.4v17.7A1.4,1.4,0,0,1,415.36,480.15Z")
    icon1Group.append("path")
        .attr("d", "M410,473.07h-5.31a1.4,1.4,0,0,1,0-2.79H410a1.4,1.4,0,0,1,0,2.79Z");
    icon1Group.append("path")
        .attr("d", "M398.55,473.07h-5.31a1.4,1.4,0,0,1,0-2.79h5.31a1.4,1.4,0,0,1,0,2.79Z");
    icon1Group.append("path")
        .attr("d", "M387,473.07h-5.31a1.4,1.4,0,0,1,0-2.79H387a1.4,1.4,0,0,1,0,2.79Z");
    icon1Group.append("path")
        .attr("d", "M366.33,430.59a1.39,1.39,0,0,1-.84-2.5,7.5,7.5,0,0,0-1.57-12.85,1.39,1.39,0,0,1-.84-1.11,7.4,7.4,0,0,0-7.29-6.55,7.23,7.23,0,0,0-3.3.83,1.39,1.39,0,0,1-2-.84,7.33,7.33,0,0,0-13.82-.75,1.39,1.39,0,0,1-2.08.61,9.1,9.1,0,0,0-14.09,5.6,9.38,9.38,0,0,0,1.87,7.87,9.07,9.07,0,0,0,14.34-.29,1.9,1.9,0,0,1,1.82-.74,1.92,1.92,0,0,1,1.52,1.25A7.4,7.4,0,0,0,347,426a7.32,7.32,0,0,0,4.89-1.92,1.39,1.39,0,0,1,2.24.56,7.51,7.51,0,0,0,2.5,3.41A1.39,1.39,0,1,1,355,430.3a10.25,10.25,0,0,1-2.65-3,10,10,0,0,1-5.3,1.53,10.17,10.17,0,0,1-9-5.45,11.85,11.85,0,0,1-17.8-.72,12.15,12.15,0,0,1-2.43-10.19,11.89,11.89,0,0,1,17.05-8.13,10.1,10.1,0,0,1,17.78,1,9.72,9.72,0,0,1,3.15-.53,10.17,10.17,0,0,1,9.92,8.22,10.28,10.28,0,0,1,1.45,17.29A1.38,1.38,0,0,1,366.33,430.59Z");
}

function renderHouse() {
    var icon1Group = svg.append("g")
        .attr('class', 'house');
    icon1Group.append("path")
        .attr("d", "M307.6,336a2.33,2.33,0,0,1-2.33-2.33V259.24L254.5,227.15l-50.76,32.09v74.39a2.33,2.33,0,1,1-4.67,0V258a2.33,2.33,0,0,1,1.09-2l53.1-33.57a2.33,2.33,0,0,1,2.5,0L308.84,256a2.33,2.33,0,0,1,1.09,2v75.68A2.33,2.33,0,0,1,307.6,336Z")
    icon1Group.append("path")
        .attr("d", "M329.8,260.29a2.32,2.32,0,0,1-1.25-.36L254.5,213.11l-74.05,46.81A2.33,2.33,0,0,1,178,256l75.3-47.6a2.33,2.33,0,0,1,2.5,0L331,256a2.34,2.34,0,0,1-1.25,4.31Z")
}

function renderSolar() {
    var icon1Group = svg.append("g")
        .attr('class', 'solar');
    icon1Group.append("path")
        .attr("d", "M119.85,165.92a12.66,12.66,0,1,1,12.66-12.66A12.67,12.67,0,0,1,119.85,165.92Zm0-22a9.34,9.34,0,1,0,9.34,9.34A9.35,9.35,0,0,0,119.85,143.92Z");
    icon1Group.append("path")
        .attr("d", "M119.85,136.5a1.66,1.66,0,0,1-1.66-1.66V126a1.66,1.66,0,0,1,3.31,0v8.81A1.66,1.66,0,0,1,119.85,136.5Z");
    icon1Group.append("path")
        .attr("d", "M119.85,182.14a1.66,1.66,0,0,1-1.66-1.66v-8.81a1.66,1.66,0,0,1,3.31,0v8.81A1.66,1.66,0,0,1,119.85,182.14Z");
    icon1Group.append("path")
        .attr("d", "M132.88,141.89a1.66,1.66,0,0,1-1.17-2.83l6.23-6.23a1.66,1.66,0,0,1,2.34,2.34L134,141.41A1.65,1.65,0,0,1,132.88,141.89Z");
    icon1Group.append("path")
        .attr("d", "M100.6,174.17a1.66,1.66,0,0,1-1.17-2.83l6.23-6.23a1.66,1.66,0,1,1,2.34,2.34l-6.23,6.23A1.65,1.65,0,0,1,100.6,174.17Z");
    icon1Group.append("path")
        .attr("d", "M147.08,154.92h-8.81a1.66,1.66,0,0,1,0-3.31h8.81a1.66,1.66,0,0,1,0,3.31Z");
    icon1Group.append("path")
        .attr("d", "M101.44,154.92H92.63a1.66,1.66,0,0,1,0-3.31h8.81a1.66,1.66,0,0,1,0,3.31Z");
    icon1Group.append("path")
        .attr("d", "M139.11,174.17a1.65,1.65,0,0,1-1.17-.49l-6.23-6.23a1.66,1.66,0,1,1,2.34-2.34l6.23,6.23a1.66,1.66,0,0,1-1.17,2.83Z");
    icon1Group.append("path")
        .attr("d", "M106.83,141.89a1.65,1.65,0,0,1-1.17-.49l-6.23-6.23a1.66,1.66,0,1,1,2.34-2.34l6.23,6.23a1.66,1.66,0,0,1-1.17,2.83Z");
}

function renderBattery() {
    var icon1Group = svg.append("g")
        .attr('class', 'battery');
    icon1Group.append("path")
        .attr("d", "M150.17,479.21H77.4a1.5,1.5,0,0,1-1.5-1.5v-41.4a1.5,1.5,0,0,1,1.5-1.5h72.77a1.5,1.5,0,0,1,1.5,1.5v4.13h7.91a1.5,1.5,0,0,1,1.5,1.5v6.37h5.23a1.5,1.5,0,0,1,1.5,1.5v14.43a1.5,1.5,0,0,1-1.5,1.5h-5.23v6.35a1.5,1.5,0,0,1-1.5,1.5h-7.91v4.13A1.5,1.5,0,0,1,150.17,479.21Zm-71.27-3h69.77v-4.13a1.5,1.5,0,0,1,1.5-1.5h7.91v-6.35a1.5,1.5,0,0,1,1.5-1.5h5.23V451.3h-5.23a1.5,1.5,0,0,1-1.5-1.5v-6.37h-7.91a1.5,1.5,0,0,1-1.5-1.5v-4.13H78.9Z");
    icon1Group.append("path")
        .attr("d", "M150.17,462a1.5,1.5,0,0,1-1.5-1.5V441.65a1.5,1.5,0,0,1,3,0v18.82A1.5,1.5,0,0,1,150.17,462Z");
    icon1Group.append("path")
        .attr("d", "M159.57,469.4a1.5,1.5,0,0,1-1.5-1.5V449.08a1.5,1.5,0,0,1,3,0V467.9A1.5,1.5,0,0,1,159.57,469.4Z");
}

function renderCommunity() {
    var icon1Group = svg.append("g")
        .attr('class', 'community');
    icon1Group.append("path")
        .attr("d", "M367,189.84a1.39,1.39,0,0,1-1.39-1.39V173.11l-11.78-6.41-11.78,6.41v15.33a1.39,1.39,0,0,1-2.78,0V172.29a1.39,1.39,0,0,1,.73-1.22l13.17-7.17a1.4,1.4,0,0,1,1.33,0l13.17,7.17a1.39,1.39,0,0,1,.73,1.22v16.16A1.39,1.39,0,0,1,367,189.84Z");
    icon1Group.append("path")
        .attr("d", "M335.17,171.86a1.39,1.39,0,0,1-.67-2.61l18.68-10.16a1.4,1.4,0,0,1,1.33,0l18.68,10.16a1.39,1.39,0,1,1-1.33,2.44l-18-9.8-18,9.8A1.38,1.38,0,0,1,335.17,171.86Z");
    icon1Group.append("path")
        .attr("d", "M386.34,176.68a1.39,1.39,0,0,1-1.39-1.39V160l-11.78-6.41L361.39,160v3.67a1.39,1.39,0,1,1-2.78,0v-4.5a1.39,1.39,0,0,1,.73-1.22l13.17-7.17a1.4,1.4,0,0,1,1.33,0L387,157.91a1.39,1.39,0,0,1,.73,1.22v16.16A1.39,1.39,0,0,1,386.34,176.68Z");
    icon1Group.append("path")
        .attr("d", "M354.49,158.7a1.39,1.39,0,0,1-.67-2.61l18.68-10.16a1.4,1.4,0,0,1,1.33,0l18.68,10.16a1.39,1.39,0,1,1-1.33,2.44l-18-9.8-18,9.8A1.38,1.38,0,0,1,354.49,158.7Z");
    icon1Group.append("path")
        .attr("d", "M403.21,162.16a1.39,1.39,0,0,1-1.39-1.39V145.44L390,139l-11.78,6.41V149a1.39,1.39,0,0,1-2.78,0v-4.41a1.39,1.39,0,0,1,.73-1.22l13.17-7.17a1.4,1.4,0,0,1,1.33,0l13.17,7.17a1.39,1.39,0,0,1,.73,1.22v16.16A1.39,1.39,0,0,1,403.21,162.16Z");
    icon1Group.append("path")
        .attr("d", "M371.35,144.19a1.39,1.39,0,0,1-.67-2.61l18.68-10.16a1.4,1.4,0,0,1,1.33,0l18.68,10.16a1.39,1.39,0,1,1-1.33,2.44l-18-9.8L372,144A1.38,1.38,0,0,1,371.35,144.19Z");
    icon1Group.append("path")
        .attr("d", "M423.84,186.81a1.5,1.5,0,0,1-1.5-1.5V127.69a1.5,1.5,0,0,1,3,0v57.62A1.5,1.5,0,0,1,423.84,186.81Z");
    icon1Group.append("path")
        .attr("d", "M414.52,148.79a1.5,1.5,0,0,1-1.06-2.56l17.06-17.06a1.5,1.5,0,0,1,2.12,2.12l-17.06,17.06A1.5,1.5,0,0,1,414.52,148.79Z");
    icon1Group.append("path")
        .attr("d", "M414.52,158.77a1.5,1.5,0,0,1-1.06-2.56l17.06-17.06a1.5,1.5,0,1,1,2.12,2.12l-17.06,17.06A1.5,1.5,0,0,1,414.52,158.77Z");
}

var timeTakenPerPixel = 20;
var gap = 15;

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
                if (reverse) {
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
    var timeTakenPerPixel = 1000 / speed;
    var duration = length * timeTakenPerPixel;

    var circleSel = group.selectAll("circle")
        .data(d3.range(0, noOfArrows))
        .enter()
        .append("circle")
        .attr("r", 4)
        .classed("circle", true);

    transition();
}

function renderSolarFlow(speed) {
    var solarFlowGroup = svg.append('g')
        .attr('transform', 'translate(120, 190)')
        .classed('solar', true)
        .classed('flow', true);

    var solarFlow = solarFlowGroup.append('path')
        .attr('d', 'M 0 0, V 70, C 0 100, 0 100, 30 100, H 60')

    renderOneFlow(solarFlowGroup, solarFlow, speed);
}

function renderBatteryFlow(speed, reverse) {
    var group = svg.append('g')
        .attr('transform', 'translate(120, 420) scale(1, -1)')
        .classed('battery', true)
        .classed('flow', true);

    var flow = group.append('path')
        .attr('d', 'M 0 0, V 70, C 0 100, 0 100, 30 100, H 60')

    renderOneFlow(group, flow, 30, speed, reverse);
}

function renderExportFlow(speed) {
    var group = svg.append('g')
        .attr('transform', 'translate(390,190) scale(-1,1)')
        .classed('community', true)
        .classed('flow', true);

    var flow = group.append('path')
        .attr('d', 'M 0 0, V 70, C 0 100, 0 100, 30 100, H 60')

    renderOneFlow(group, flow, speed);
}

function renderGridFlow(speed) {
    var group = svg.append('g')
        .attr('transform', 'translate(390,420) scale(-1,-1)')
        .classed('minigrid', true)
        .classed('flow', true);

    var flow = group.append('path')
        .attr('d', 'M 0 0, V 70, C 0 100, 0 100, 30 100, H 60')

    renderOneFlow(group, flow, speed);
}

function render() {

    renderMinigrid();
    renderHouse();
    renderSolar();
    renderBattery();
    renderCommunity();

    renderSolarFlow(10);
    renderBatteryFlow(20, true);
    renderExportFlow(30);
    renderGridFlow(5);
}

render();