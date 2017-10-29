function printLineChart(data) {

  var mapDays = {};
  var days = [];
  var formatedDays = [];
  var mapCats = {};
  var cats = [];
  var series = [];

  for (var cat in data) {
    mapCats[cat] = '';
    for (var date in data[cat]) {
      mapDays[date] = '';
    }
  }

  for (var cat in mapCats) {
    cats.push(cat);
  }

  for (var day in mapDays) {
    days.push(day);
  }

  days.sort(function(a,b) {
    return new Date(a) - new Date(b);
  } );

  for (var day in days) {
    formatedDays.push(dateFormat(new Date(days[day]), "d mmm"));
  }

  for (var cat in data) {
    var auxSerie = [];
    for (var day in days) {
      var valueDay = data[cat][days[day]];
      if ( valueDay === undefined ) {
        auxSerie.push(0);
      }else{
        auxSerie.push(valueDay);
      }
    }
    series.push({name: cat, data: auxSerie});
  }

  var xAxis = {
     categories: formatedDays
  };

  var yAxis = {
     plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
     }]
  };

  var legend = {
     layout: 'vertical',
     align: 'right',
     verticalAlign: 'middle',
     borderWidth: 0
  };

  var json = {};
  json.title =  {
     text: 'Diagrama de lineas'
  };
  json.xAxis = xAxis;
  json.yAxis = yAxis;
  json.legend = legend;
  json.series = series;

  $('#lineChart').highcharts(json);
  
}
