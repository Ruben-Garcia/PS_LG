// Parseador del formato 1
function data1Parser(data, accData){
  result = accData;
  for (var item in data) {
    var category = data[item].cat.toUpperCase();
    var date = dateFormat(new Date(data[item].d), "yyyy-mm-dd");
    result = addData(date, category, data[item].value, result);
  }
  return result;
}

// Parseador del formato 2
function data2Parser(data, accData){
  result = accData;
  for (var item in data) {
    var category = data[item].categ.toUpperCase();
    var date = dateFormat(new Date(data[item].myDate), "yyyy-mm-dd");
    result = addData(date, category, data[item].val, result);
  }
  return result;
}

// Parseador del formato 3
function data3Parser(data, accData){
  var result = accData;
  for (var item in data) {
    var date = dateFormat(new Date(data[item].raw.match(/\d{4}-\d{1,2}-\d{1,2}/)[0]), "yyyy-mm-dd");
    var category = data[item].raw.match(/#[cC][aA][tT]\s\d#/)[0].substr(1, 5).toUpperCase();
    result = addData(date, category, data[item].val, result);
  }
  return result;
}

// Funcion generica para anadir datos
function addData(date, cat, val, accData){
  var result = accData;
  if ( result[cat] === undefined ) {
    result[cat] = {};
    result[cat][date] = val;
  }else{
    var value = result[cat][date];
    if ( value === undefined ) {
      result[cat][date] = val;
    } else {
      result[cat][date] = val + value;
    }
  }
  return result;
}
