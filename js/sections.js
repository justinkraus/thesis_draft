
var oldWidth = 0
function render(){
  if (oldWidth == innerWidth) return
  oldWidth = innerWidth

  var width = height = d3.select('#graph').node().offsetWidth
  var r = width/16


  if (innerWidth <= 925){
    width = innerWidth
    height = innerHeight*.7
  }

  // --------------------------------------------
  // graph #1 - Readability

  //Create Static Variables

  //setting margins and inner area for graph #1
  const MARGIN       = { top: 0, right: 0, bottom: 50, left: 0 };
  const INNER_WIDTH  = width - MARGIN.left - MARGIN.right;
  const INNER_HEIGHT = height - MARGIN.top - MARGIN.bottom;
  //create svg 1
  var svg1 = d3.select('.container-1 #graph').html('')
    .append('svg')
      .attrs({width: width, height: height})
      .append('g')
        .attr('transform', 'translate(' + MARGIN.left + ',' + MARGIN.top + ')');

  var readableimg = svg1.append('image')
                  .attr("xlink:href", './images/readableExample.svg')
                  .attr("width", 500)
                  .attr("height", 450)
                  .attr("x", 0)
                  .attr("y", 0 );

  var wireimg = svg1.append('image')
                    .attr("xlink:href", './images/AP.png')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 50 );

  var newsimg = svg1.append('image')
                    .attr("xlink:href", './images/newspaper.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 0 );

  var wsjImg = svg1.append('image')
                    .attr("xlink:href", './images/WSJ.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 100 );

  var nytImg = svg1.append('image')
                    .attr("xlink:href", './images/nyt.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 150 );

  var nytbsImg = svg1.append('image')
                    .attr("xlink:href", './images/nytbs.png')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 200 );

  var hsImg = svg1.append('image')
                    .attr("xlink:href", './images/hseng.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 250 );

  var insImg = svg1.append('image')
                    .attr("xlink:href", './images/inspolicy.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 300 );

  var twitterImg = svg1.append('image')
                    .attr("xlink:href", './images/twitter.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 350 );

  var facebookImg = svg1.append('image')
                    .attr("xlink:href", './images/facebook.svg')
                    .attr("width", 50)
                    .attr("height", 50)
                    .attr("x", 0)
                    .attr("y", 400 );

  // Create gridlines for graph 1
  var gridlines = svg1.append("g")
      .attr("class", "gridlines")

  // middle gridline
  gridlines.append('line')
      .style("stroke", "lightgreen")
      .style("stroke-width", 5)
      .attr("x1", INNER_WIDTH/2)
      .attr("y1", 0)
      .attr("x2", INNER_WIDTH/2)
      .attr("y2", INNER_HEIGHT); 

  //readability sectors
    gridlines.append('line')
      .style("stroke", "darkgrey")
      .style("stroke-width", 2.5)
      .attr("x1", INNER_WIDTH/6)
      .attr("y1", 0)
      .attr("x2", INNER_WIDTH/6)
      .attr("y2", INNER_HEIGHT + 25); 

    gridlines.append('line')
      .style("stroke", "darkgrey")
      .style("stroke-width", 2.5)
      .attr("x1", INNER_WIDTH/6 * 2)
      .attr("y1", 0)
      .attr("x2", INNER_WIDTH/6 * 2)
      .attr("y2", INNER_HEIGHT + 25);

    gridlines.append('line')
      .style("stroke", "darkgrey")
      .style("stroke-width", 2.5)
      .attr("x1", INNER_WIDTH/6 * 4)
      .attr("y1", 0)
      .attr("x2", INNER_WIDTH/6 * 4)
      .attr("y2", INNER_HEIGHT + 25); 

    gridlines.append('line')
      .style("stroke", "darkgrey")
      .style("stroke-width", 2.5)
      .attr("x1", INNER_WIDTH/6 * 5)
      .attr("y1", 0)
      .attr("x2", INNER_WIDTH/6 * 5)
      .attr("y2", INNER_HEIGHT + 25); 

  var gridLabels2 = svg1.append("g")
      .attr("class", "gridLabel2")

    gridLabels2.append("text")
      .attr("x", INNER_WIDTH/6 * 2.45)
      .attr("y", INNER_HEIGHT + 15)
      .text("Danger Line");

  var gridLabels = svg1.append("g")
      .attr("class", "gridLabel");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * .1)
      .attr("y", INNER_HEIGHT + 25)
      .text("Post-graduate");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * 1.25)
      .attr("y", INNER_HEIGHT + 25)
      .text("Graduate");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * 2.3)
      .attr("y", INNER_HEIGHT + 25)
      .text("College");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * 3.2)
      .attr("y", INNER_HEIGHT + 25)
      .text("H.S. Senior");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * 4.15)
      .attr("y", INNER_HEIGHT + 25)
      .text("H.S. Freshman");

    gridLabels.append("text")
      .attr("x", INNER_WIDTH/6 * 5.15)
      .attr("y", INNER_HEIGHT + 25)
      .text("Middle School");

  var gridLabels1 = svg1.append("g")
      .attr("class", "gridLabel1")

    gridLabels1.append("text")
      .attr("x", INNER_WIDTH/6 * 3.1)
      .attr("y", INNER_HEIGHT + 45)
      .text("More Readable >");

    gridLabels1.append("text")
      .attr("x", INNER_WIDTH/6 * 1.75)
      .attr("y", INNER_HEIGHT + 45)
      .text("< Less Readable");

   var gridlinesSelect = svg1.selectAll(".gridlines")
   var gridLabelsSelect = svg1.selectAll(".gridLabel")
   var gridLabels1Select = svg1.selectAll(".gridLabel1")
   var gridLabels2Select = svg1.selectAll(".gridLabel2")

    // grid opacity
    var gridOP = [0, 1, 1, 1, 1]
    // Opacity array
    var readableOP = [1, 0, 0, 0, 0]
    // Opacity of news Sources
    var newsOpacity = [0, 1, 1, 1]
    // Opacity of secondary sources
    var secondaryOpacity = [0, 0, 1, 1]

  // scrolling functionality

  var gs = d3.graphScroll()
      .container(d3.select('.container-1'))
      .graph(d3.selectAll('container-1 #graph'))
      .eventId('uniqueId2')  // namespace for scroll and resize events
      .sections(d3.selectAll('.container-1 #sections > div'))
      // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
      .on('active', function(i){

        
        // Readable SVG Transitions      
        readableimg.transition().duration(100)
            .attr("x", 0)
            .style('opacity', readableOP[i])
          .transition();

        //gridlines opacity transition

        gridlinesSelect.transition().duration(100)
            .style('opacity', gridOP[i])
          .transition();

        gridLabelsSelect.transition().duration(100)
            .style('opacity', gridOP[i])
          .transition();

        gridLabels1Select.transition().duration(100)
            .style('opacity', gridOP[i])
          .transition();

        gridLabels2Select.transition().duration(100)
            .style('opacity', gridOP[i])
          .transition();

        //newsWires
          var wirePos = [width/30 * 6,
                          width/30 * 6,
                          width/30 * 16,
                          width/30 * 16,
                          width/30 * 16][i]

        wireimg.transition().duration(1000)
            .attr("x", wirePos)
            .style('opacity', newsOpacity[i])
          .transition();

        //newspapers

        var newsPos = [width/30 * 16,
                          width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        newsimg.transition().duration(1000)
            .attr("x", newsPos)
            .style('opacity', newsOpacity[i])
          .transition();

        var wsjPos = [width/30 * 16,
                          width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        wsjImg.transition().duration(1000)
            .attr("x", wsjPos)
            .style('opacity', newsOpacity[i])
          .transition();

        var nytPos = [width/30 * 16,
                          width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        nytImg.transition().duration(1000)
            .attr("x", nytPos)
            .style('opacity', newsOpacity[i])
          .transition();


        //secondary sources
        var nytbsPos = [width/30 * 21,
                          width/30 * 21,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        nytbsImg.transition().duration(1000)
            .attr("x", nytbsPos)
            .style('opacity', secondaryOpacity[i])
          .transition();

        var hsengPos = [width/30 * 21,
                          width/30 * 21,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        hsImg.transition().duration(1000)
            .attr("x", hsengPos)
            .style('opacity', secondaryOpacity[i])
          .transition();

        var insPos = [width/30 * 6,
                          width/30 * 6,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        insImg.transition().duration(1000)
            .attr("x", insPos)
            .style('opacity', secondaryOpacity[i])
          .transition();

        var twitterPos = [width/30 * 26,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        var socialOP = [0, 0, 0, 1.0]

        twitterImg.transition().duration(1000)
            .attr("x", twitterPos)
            .style('opacity', socialOP[i])
          .transition();
        
        var facebookPos = [width/30 * 26,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        facebookImg.transition().duration(1000)
            .attr("x", facebookPos)
            .style('opacity', socialOP[i])
          .transition();
      })

// --------------------------------------------
// GRAPH 2

var margin2 = {top: 20, right: 80, bottom: 50, left: 70};
var INNER_WIDTH2  = width - margin2.left - margin2.right;
var INNER_HEIGHT2 = height - margin2.top - margin2.bottom;

// define colors
var color3 = d3.scaleOrdinal(d3.schemeCategory10);

// set the ranges
var x = d3.scaleLinear().range([0, INNER_WIDTH2]);
var y = d3.scaleLinear().range([INNER_HEIGHT2, 0]);

// define the line
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.score); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg2 = d3.select('.container-2 #graph').html('').append("svg")
    .attrs({width: width, height: height})
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");


var backgroundColors = svg2.append("g")
            .attr("class", "background3")

var redBox = backgroundColors.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", width)
  .attr("height", height/10)
  .attr("fill", "green")
  .attr("opacity", 0.6);

var greenBox = backgroundColors.append("rect")
  .attr("x", 0)
  .attr("y", height/10)
  .attr("width", width)
  .attr("height", height/3.6)
  .attr("fill", "green")
  .attr("opacity", 0.4);

var yellowBox = backgroundColors.append("rect")
  .attr("x", 0)
  .attr("y", height/10 + height/3.6)
  .attr("width", width)
  .attr("height", height/4.5)
  .attr("fill", "green")
  .attr("opacity", 0.2);

var blueBox = backgroundColors.append("rect")
  .attr("x", 0)
  .attr("y", height/10 + height/3.6 + height/4.5)
  .attr("width", width)
  .attr("height", height/2.5)
  .attr("fill", "green")
  .attr("opacity", 0.05);
  

var gs3 = d3.graphScroll()
  .container(d3.select('.container-2'))
  .graph(d3.selectAll('.container-2 #graph'))
  .eventId('uniqueId3')  // namespace for scroll and resize events
  .sections(d3.selectAll('.container-2 #sections > div'))
  .on('active', function(i){

d3.csv("NAEP_scores.csv", function(data) {

  color3.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }))

   var brackets = color3.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: +d.year, score: +d[name]};
      })
    };
  });

  // Scale the range of the data
  x.domain([1992, 2019]);
  y.domain([200, 360]);

  var bracket = svg2.selectAll(".bracket")
      .data(brackets)
    .enter().append("g")
      .attr("class", "bracket");

  // console.log(line(d.values))
  // animation from here
  // http://bl.ocks.org/larskotthoff/4aeb6299c61a42093562


  // national average
  // natlOP = [0,1,1]
if (document.getElementById('container-2-1').className == "graph-scroll-active") {
  var path = svg2.selectAll(".bracket").append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke-width", function(d) { if (d.name == "National Avg") 
                                        {return "6"}
                                      else {return "0";}
                                         })
      .style("stroke", function(d) { if (d.name == "National Avg") 
                                        {return "orange"}
                                      else {return "steelblue";}
                                         })
      .attr("stroke-dasharray", function() { return "0," + this.getTotalLength(); })
      .style("fill", "none")
      .transition()
      .delay(function(d, i) { return i * 0; })
      .duration(1950)
      .ease(d3.easeSin)
      .attrTween("stroke-dasharray", animateLine)
      .style('opacity', 1);
      
  svg2.selectAll(".bracket").append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.score) + ")"; })
      .attr("x", 3)
      .attr("dy", ".2em")
      .style("font-size", function(d) { if (d.name == "National Avg") 
                                        {return "10"}
                                      else {return "0";}
                                         })
      .text(function(d) { return d.name; })
      .transition()
      .duration(1950)
      .ease(d3.easeSin);

  }

  // percentiles

  percentOP = [0,0,1]

  if (document.getElementById('container-2-2').className == "graph-scroll-active") {

    var path1 = svg2.selectAll(".bracket").append("path")
      .attr("class", "line1")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke-width", function(d) { if (d.name == "National Avg") 
                                        {return "0"}
                                      else {return "2.5";}
                                         })
      .style("stroke", function(d) { if (d.name == "10th%" || d.name == "25th%" ) 
                                        {return "red"}
                                      else {return "steelblue";}
                                         })
      .attr("stroke-dasharray", function() { return "0," + this.getTotalLength(); })
      .style("fill", "none")
      .transition()
      .delay(function(d, i) { return i * 0; })
      .duration(1950)
      .ease(d3.easeSin)
      .attrTween("stroke-dasharray", animateLine)
      .attr("opacity", percentOP[i]);

  

  svg2.selectAll(".bracket").append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.score) + ")"; })
      .attr("x", 3)
      .attr("dy", ".2em")
      .style("font-size", "10px")
      .text(function(d) { return d.name; })
      .transition()
      .duration(1950)
      .ease(d3.easeSin);
    }

  // grid opacity and transition
  var lineOP = [0, 1, 1, 1]

  var linesSelect = svg2.selectAll(".bracket")
  // var linesSelect2 = svg2.selectAll(".gridLabel")


  linesSelect.transition().duration(100)
      .style('opacity', lineOP[i])
    .transition();

  // background opacity
  var backgroundOP = [0, 0, 0, 1]
  var backgroundselect = svg2.selectAll(".background3")

        backgroundselect.transition().duration(500)
            .style('opacity', backgroundOP[i])
          .transition();

    function animateLine() {
      var l = this.getTotalLength();
      i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) { return i(t); };
    }
  
  // Add the x Axis
  svg2.append("g")
      .attr("transform", "translate(0," + INNER_HEIGHT2 + ")")
      .call(d3.axisBottom(x)
      .ticks(5)
      .tickFormat(d3.format("d")));

  // Add the y Axis
  svg2.append("g")
      .call(d3.axisLeft(y));
    
    });
  })


var margin2 = {top: 20, right: 80, bottom: 50, left: 70};
var INNER_WIDTH2  = width - margin2.left - margin2.right;
var INNER_HEIGHT2 = height - margin2.top - margin2.bottom;

var svg2 = d3.select('.container-2 #graph').html('').append("svg")
    .attrs({width: width, height: height})
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");

// ----------------------------------------------------------
// graph #3 - comprehension


// set variables

var margin3 = {top: 0, right: 0, bottom: 0, left: 0}
var INNER_WIDTH3 = margin3.left - margin3.right;
var INNER_HEIGHT3 = margin3.top - margin3.bottom;

// append the svg object to the body of the page
var svg3 = d3.select('.container-3 #graph').html('').append("svg")
    .attrs({width: width, height: height})
    // .attr("width", width4 + margin4.left + margin4.right)
    // .attr("height", height4 + margin4.top + margin4.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")");

//poloygon sizes
//these two set all
var topLeftX = width/4.5
var topY = height/1.5
// top right polygon
var topRightX = topLeftX + (width/6 * 2.25)
// bottom vars
var botRightX = topLeftX + (width/6 * 1.25)
var botLeftX = topLeftX - (width/6 * 1.25)
var botY = topY + topY/3

//spaces between polygons
var squareSpace = (height/1.4)/4
// additional offset of first polygon
var poly1Yoffset = squareSpace/2

var poly1 = [[{x: topLeftX, y:topY + poly1Yoffset}, {x: topRightX, y:topY + poly1Yoffset}, {x: botRightX, y:botY + poly1Yoffset}, {x: botLeftX, y:botY + poly1Yoffset}]]
var poly2 = [[{x: topLeftX, y:topY - (squareSpace)}, {x: topRightX, y:topY - (squareSpace)}, {x: botRightX, y:botY - (squareSpace)}, {x: botLeftX, y:botY - (squareSpace)}]]
var poly3 = [[{x: topLeftX, y:topY - (squareSpace * 2)}, {x: topRightX, y:topY - (squareSpace * 2)}, {x: botRightX, y:botY - (squareSpace * 2)}, {x: botLeftX, y:botY - (squareSpace * 2)}]]
var poly4 = [[{x: topLeftX, y:topY - (squareSpace * 3)}, {x: topRightX, y:topY - (squareSpace * 3)}, {x: botRightX, y:botY - (squareSpace * 3)}, {x: botLeftX, y:botY - (squareSpace * 3)}]]

var lineFunc = d3.line()
  .x(function(d) {return d.x })
  .y(function(d) {return d.y})

var poly1var = svg3.append('path')
.data(poly1)
.attr("class", "poly1")
.attr('d', lineFunc)
.attr('stroke', 'grey')
.attr('fill', 'white')
.style('opacity', .66);

var poly2var = svg3.append('path')
.data(poly2)
.attr("class", "poly2")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'blue')
.style('opacity', .33);

var poly3var = svg3.append('path')
.data(poly3)
.attr("class", "poly3")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'blue')
.style('opacity', .66);

var poly4var = svg3.append('path')
.data(poly4)
.attr("class", "poly34")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'blue')
.style('opacity', .90);


// Create full text block on white polygon
var fixedText = svg3.append('text')
.attr("class", "fixedText")
.attr("x", (topLeftX + botRightX)/2.8)
.attr("y", (topY + botY)/2 + poly1Yoffset/1.5)
.attr("dy", "0em")
.style('font-size', 12)
.style('opacity', 0)
.html(function (d){ 
  return "<tspan x='100' dy='1.2em'>" + "The turtle sat on a log." + "</tspan>" 
       + "<tspan x='100' dy='1.2em'>" + "A fish swam under the log." + "</tspan>";
});


// comprehension level titles

var leveltitles = [{"levelNumber":1, "text": "Linguistic Representation"},
                 {"levelNumber":2, "text": "Propostional Abstraction"},
                 {"levelNumber":3, "text": "Situation Model"}]

svg3.selectAll('text')
.select('text')
.data(leveltitles)
.enter()
.append('text')
.attr("id", function(d){return "leveltitle"+d.levelNumber})
.attr("class", "leveltitle")
.attr("x", topRightX)
.attr("y", function(d){return topY - (squareSpace * d.levelNumber) })
.attr("dy", ".9em")
.style('font-size', 12)
.style('opacity', 0)
.text(function(d){return d.text})



// comprehension level definitions

var defs = [{"levelNumber":1, "text": "Words and sentence structure"},
                 {"levelNumber":2, "text": "How words relate to one another"},
                 {"levelNumber":3, "text": "Integrate with prior knowledge"}]

svg3.selectAll('text')
.select('text')
.data(defs)
.enter()
.append('text')
.attr("id", function(d){return "leveldef"+d.levelNumber})
.attr("class", "leveldef")
.attr("x", topRightX)
.attr("y", function(d){return topY - (squareSpace * d.levelNumber) })
.attr("dy", "3em")
.style('font-size', 10)
.style('opacity', 0)
.text(function(d){return d.text})

// comprehension level examples

var examples = [{"levelNumber":1,"innerLevel":1, "img": './images/fish.svg', "text": 'fish', "width": 30, "height": 30},
                 {"levelNumber":1,"innerLevel":2, "img": './images/turtle.svg', "text": 'turtle', "width": 30, "height": 30},
                 {"levelNumber":1,"innerLevel":3, "img": './images/log.svg', "text": 'log', "width": 30, "height": 30},
                 {"levelNumber":2,"innerLevel":1, "img": './images/turtle_fish.svg', "text": 'log', "width": 50, "height": 60},
                 {"levelNumber":3,"innerLevel":0, "img": './images/log_scene.svg', "text": 'log', "width": 100, "height": 100}
                 ]

svg3.selectAll('image')
.select('image')
.data(examples)
.enter()
.append('image')
.attr("id", function(d){return "exampleimgs"+d.levelNumber+d.innerLevel})
.attr("class", "exampleimgs")
.attr("x", topRightX)
.attr("y", function(d){return topY - (squareSpace * d.levelNumber) + (d.innerLevel * 22) })
// .attr("dy", function(d){return 2 * d.levelNumber + "em" })
.attr("width", function(d){return d.width})
.attr("height", function(d){return d.height})
.style('opacity', 0)
.attr("xlink:href", function(d){return d.img})
// .text(function(d){return d.text})

// reading lines on white polygon
var lines = [[0,1,2,3,4,5,6,7,8,9,10]]


svg3.selectAll('g')
    .data(lines)
  .enter().append('g')
    .each(function(d,i){
        d3.select(this).selectAll('g')
        .data(d)
      .enter().append('line')
        .attr("class", "readinglines")
        .attr('x1', function(d,j) { return topLeftX + width/20; })
        .attr('y1', function(d,j) { return topY - (squareSpace * 3) + (height/20 * 2) + (j*height/15); })
        .attr('x2', function(d,j) { return (topRightX + topRightX/4) - width/20; })
        .attr('y2', function(d,j) { return topY - (squareSpace * 3) + (height/20 * 2) + (j*height/15); })
        .style('stroke', 'black')
        .style("stroke-width", 1.5)
        .style("opacity", 0)
    });

// circles by line
//original idea to redo nested variable:
//https://stackoverflow.com/questions/32974794/update-display-in-loop-when-drawing-many-d3-svg-objects
//implementation
//https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739

function gridData() {
    var data = new Array();
    var xpos = topLeftX + width/20; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = topY - (squareSpace * 3) + (height/20 * 2);
    var radius = Math.random() * (6 - 15) + 15
    var rowheight = 10
    var circleNum = 1;

    // iterate for rows 
    for (var row = 0; row < 11; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < 10; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                r: radius,
                c: circleNum
            })
            // increment the x position. I.e. move it over
            xpos += Math.random() * (20 - 25) + width/20;
            radius = Math.random() * (6 - 15) + 15
            circleNum += (row + column)

        }
        // reset the x position after a row is complete
        xpos = topLeftX + width/20;
        radius = Math.random() * (6 - 15) + 15;
        // increment the y position for the next row. Move it down 
        ypos += (height/30 * 2); 
    }
    return data;
}

//run the gridData function
var gridData = gridData();    

var row = svg3.selectAll(".row")
    .data(gridData)
    .enter().append("g")
    .attr("class", "row");

var column = row.selectAll(".circle")
    .data(function(d) { return d; })
    .enter().append("circle")
    .attr("class","linearcircle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    // .attr("id", function(d,i) {return "circle" + d[i]})
    .attr("id", function(d) {return "circle"+d.c})
    .style("fill", "#fff")
    .style("stroke", "#222")
    .style("opacity", 0);

// circles for skimming lines
function skimData() {
    var data = new Array();
    var xpos = topLeftX + width/20; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = topY - (squareSpace * 3) + (height/20 * 2);
    var radius = Math.random() * (6 - 15) + 15
    var rowheight = 10
    var circleNum = 1;
    var columnNum = 8

    // iterate for rows 
    for (var row = 0; row < 11; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < columnNum; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                r: radius,
                c: circleNum
            })
            // increment the x position. I.e. move it over
            xpos += Math.random() * (20 - 25) + width/16;
            radius = Math.random() * (6 - 15) + 15
            circleNum += (row + column)

        }
        // reset the x position after a row is complete
        xpos = topLeftX + width/20;
        radius = Math.random() * (6 - 15) + 15;
        // increment the y position for the next row. Move it down 
        ypos += (height/30 * 2); 
        columnNum -= 1
        columnNum = (columnNum>0)? columnNum:1;

    }
    return data;
}

//run the gridData function
var skimData = skimData();    

var skimrow = svg3.selectAll(".rowskim")
    .data(skimData)
    .enter().append("g")
    .attr("class", "row");

var skimcolumn = skimrow.selectAll(".circle")
    .data(function(d) { return d; })
    .enter().append("circle")
    .attr("class","skimcircle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    // .attr("id", function(d,i) {return "circle" + d[i]})
    .attr("id", function(d) {return "circle"+d.c})
    .style("fill", "#fff")
    .style("stroke", "#222")
    .style("opacity", 0);



// trigger graph scroll

var gs4 = d3.graphScroll()
  .container(d3.select('.container-3'))
  .graph(d3.selectAll('.container-3 #graph'))
  .eventId('uniqueId4')  // namespace for scroll and resize events
  .sections(d3.selectAll('.container-3 #sections > div'))
  .on('active', function(i){

//titles 
svg3.append('text')
.attr("class", "Construction")
.attr("x", topLeftX - topLeftX/2 )
.attr("y", 0)
.attr("dy", '1em')
.style('font-size', 28)
.style('fill', "grey")
.text("Construction-Integration")

//polygon opacity transitions

poly1OP = [0,0,1,1,1,1,1,1]
poly23OP = [0,.66,.66,.33,0,0,0]
ploy4OP = [0,.66,.66,1,0,0,0]

// white polygon size transition
poly1size = [
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX + topRightX/4, topY - (squareSpace * 3)], [topRightX + topRightX/4, botY + poly1Yoffset], [topLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX + topRightX/4, topY - (squareSpace * 3)], [topRightX + topRightX/4, botY + poly1Yoffset], [topLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX + topRightX/4, topY - (squareSpace * 3)], [topRightX + topRightX/4, botY + poly1Yoffset], [topLeftX, botY + poly1Yoffset]]
            ].map(function(d){ return 'M' + d.join(' L ') })

poly1var.transition().duration(1000)
            .style('opacity', poly1OP[i])
            .attr('d', poly1size[i])
            .transition();

poly2var.transition().duration(1000)
            .style('opacity', poly23OP[i])
          .transition();

poly3var.transition().duration(1000)
            .style('opacity', poly23OP[i])
          .transition();

poly4var.transition().duration(1000)
            .style('opacity', ploy4OP[i])
          .transition();


// fixed text transition
fixedtextOP = [0,0,1,1,0,0,0]

fixedText.transition().duration(1000)
            .style('opacity', fixedtextOP[i])
          .transition();


//transition for the level titles
leveltitlesOP = [0,1,1,1,0,0,0]

var leveltitles = svg3.selectAll(".leveltitle")

leveltitles.transition().duration(1000)
            .style('opacity', leveltitlesOP[i])
          .transition();


//transition for the level definitions

leveldefsOP = [0,1,0,0,0,0,0]

var leveldefs = svg3.selectAll(".leveldef")

leveldefs.transition().duration(1000)
            .style('opacity', leveldefsOP[i])
          .transition();

// transition for the level examples
levelexsOP = [0,0,1,0,0,0,0]

var levelexs = svg3.selectAll(".exampleimgs")

levelexs.transition().duration(1000)
            .style('opacity', levelexsOP[i])
          .transition();


//animation of the "floating" text

if (document.getElementById('container-3-3').className == "graph-scroll-active") {
// Floating text array
textArray = [" The ", "  turtle ", " sat ", " on ", " a ", " log. ", " A ", " fish ", " swam  ", "    under ", "   the  ", "   log. "]

// Floating text function loop 
// create arrays
svg3.each(function(d){
  for(var i = 0; i < textArray.length; i++){
    d3.select(this).append('text')
    // .attr('with-space-preserve', true)
    .style("fill", "white")
    .style('opacity', 0.8)
    // .attr("x", (((topLeftX + botRightX)/6) + ((topRightX + botLeftX)/6) + (i*10)))
    .attr("x", (((topLeftX + botRightX)/6) + ((topRightX + botLeftX)/8) + ((((((textArray[i==0?textArray.length-1:i-1].length) + textArray[i].length) * 4))))))
    .attr("y", ((topY + botY)/2) - 20 + poly1Yoffset)
    .style('font-size', 12)
    .style('width', "100px")
    .text(function(d) {return textArray[i]})
    // .html(function(d) {return textArray[i]})
    .attr("class", "letters")
  }
  repeat();
  //chained transition of floating text
  // a take on chained transition to loop https://bl.ocks.org/mbostock/1125997
    function repeat(){
  d3.selectAll(".letters")
  .transition()
      // .duration(10000)
      .delay(function(d,i) { return (i * 400)})
      .on("start", function repeat() {
        d3.active(this)
        .attr("y", ((topY + botY)/2) - 10 + poly1Yoffset)
        .style('opacity', 0.8)
        .transition()
        .duration(5000)
        .ease(d3.easeQuadOut)
        .attr("y", (topY - (squareSpace * 4)/1.3))
        .style('opacity', 0)
        .transition()
        .style('opacity', 0)
        .attr("y", ((topY + botY)/2) - 10 + poly1Yoffset)
        .transition()
        .duration(800)
        .on("start", repeat);
      })
  };

})
// examples 

}
else {
  d3.selectAll(".letters")
  .remove()
}

//lines transitions
linesOP = [0,0,0,0,1,1]

var levelexs = svg3.selectAll(".readinglines")

levelexs.transition().duration(1500)
            .style('opacity', linesOP[i])
          .transition();

//linear circles transition
linearcirclesOP = [0,0,0,0,0,1,0]

var linearcircles = svg3.selectAll(".linearcircle")

linearcircles.transition().duration(1500)
          .style('opacity', linearcirclesOP[i])
          .transition()
           .delay(function(d, i) { return (i * 100) + (d.r); })
           .style("fill", "blue");

// skim circles transition
skimcirclesOP = [0,0,0,0,0,0,1]

var skimcircles = svg3.selectAll(".skimcircle")

skimcircles.transition().duration(1500)
          .style('opacity', skimcirclesOP[i])
          .transition()
           .delay(function(d, i) { return (i * 100) + (d.r); })
           .style("fill", "blue");


})


  d3.select('#source')
      .styles({'margin-bottom': window.innerHeight - 450 + 'px', padding: '100px'})
}


render()
d3.select(window).on('resize', render)
