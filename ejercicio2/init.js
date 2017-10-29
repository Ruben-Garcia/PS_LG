$(document).ready(function() {
  var globalData = {};

  // Llamada ajax "sincrona" (para simplificar el problema, me ahoro mezclar los resultados)
  // aunque lo aconsejado para una experiencia de usuario satisfactoria sería
  // usar llamadas asincronas para no "bloquear" la página.
  function getSyncFileAndParse(myURL, parseFunction) {
    $.ajax({
      async: false,
      url: myURL,
      data: {
        format: 'json'
      },
      dataType: 'json',
      error: function() {
        console.error('Error obteniendo: ' + myURL);
      },
      success: function(data) {
        globalData = parseFunction(data, globalData);
      },
      type: 'GET'
    });
  }

  //Primer fichero
  getSyncFileAndParse('http://s3.amazonaws.com/logtrust-static/test/test/data1.json', data1Parser);

  //Segundo fichero
  getSyncFileAndParse('http://s3.amazonaws.com/logtrust-static/test/test/data2.json', data2Parser);

  //Tercer fichero
  getSyncFileAndParse('http://s3.amazonaws.com/logtrust-static/test/test/data3.json', data3Parser);

  //Pintar diagrama de lineas
  printLineChart(globalData);

  //Pintar el diagrama de "queso"
  printPieChart(globalData);

});
