export function getObjectsFromTSV(urlData, process){
  var jsonResult = null;
  fetch(urlData)
   .then( r => r.text() )
   .then( t => {
     var dataResult = getDataFromTsv(t);
     process(dataResult);
   } );
}

function getDataFromTsv(tsv){
  var lines=tsv.split("\n");
    var result = [];
    var headers=lines[0].split("\t");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split("\t");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return result;
}
