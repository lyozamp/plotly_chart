console.log(cityGrowths);

var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
  
  function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] 
    }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("body").on("change", updatePage);

  function updatePage() {
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;
  
    console.log(dropdownMenuID);
    console.log(selectedOption);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
    function updatePlotly() {
      var dropdownMenu = d3.select("#dropdownMenu");
      var dataset = dropdownMenu.property("value");
    
      var xData = [1, 2, 3, 4, 5];
      var yData = [];
    
      if (dataset === 'dataset1') {
        yData = [1, 2, 4, 8, 16];
      };
    
      if (dataset === 'dataset2') {
        yData = [1, 10, 100, 1000, 10000];
      };
    
      var trace = {
        x: [xData],
        y: [yData],
      };
      Plotly.restyle("plot", trace);
    };
    
    init();
  
  function init() {
      var selector = d3.select("#selDataset");
    
      d3.json("samples.json").then((data) => {
        console.log(data);
        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
          selector
            .append("option")
            .text(sample)
            .property("value", sample);
        });
    })}
    
    init();