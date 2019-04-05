/**
 * 
 */
//d3.select('h1').style('color', 'red')
//.text('updated heading');

//d3.select('body').append('p').text("first paragraph");
//d3.select('body').append('p').text("second paragraph");
//d3.select('body').append('p').text("third paragraph");

//d3.selectAll('body').style('color', 'blue');

var dataset = [80, 100, 50, 100, 180, 30, 40, 120, 160];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;

/*echo dataset.length;*/
d3.select("h1").text("bar chart");
var barWidth = (svgWidth / dataset.length);
var svg = d3.select("svg")
	.attr("width", svgWidth)
	.attr("height", svgHeight);
			
var barChart = svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("y", function(d)
						{
					return svgHeight - d
						})
	.attr("height", function(d)
						{
					return d;
						})
	.attr("width", barWidth - barPadding)
	.attr("transform", function(d,i)
						{
					var translate = [barWidth*i, 0];
					return "translate("+translate+")";
						});