function printPieChart(data) {
  var total = 0;
  var values = [];

  for (var cat in data) {
    var catValue = 0;
    for (var date in data[cat]) {
      catValue += data[cat][date];
      total += data[cat][date];
    }
    values.push({name: cat, y: catValue})
  }

  for (var value in values) {
    values[value].y = values[value].y / total;
  }

  var chart = {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  }

  var plotOptions = {
     pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
           enabled: true,
           format: '<b>{point.name}</b>: {point.percentage:.1f} %',
           style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
              'black'
           }
        }
     }
  };

  var json = {};
  json.title =  {
     text: 'Diagrama de queso'
  };
  json.series = [{name: 'Value', type: 'pie', data: values}];
  json.tooltip = {pointFormat: '<b>{point.percentage:.2f} %</b>'};
  json.chart = chart;
  json.plotOptions = plotOptions;

  $('#pieChart').highcharts(json);
}
