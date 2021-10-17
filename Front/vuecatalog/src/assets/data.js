export function getObjectsFromTSV(urlData, process){
  var jsonResult = null;
  fetch(urlData)
   .then( r => r.text() )
   .then( t => {
     var dataResult = getDataFromTsv(t);
     process(dataResult);
   } );
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

function getDataFromTsv(tsv){
  var lines=tsv.split("\r\n");
  var result = [];
  var headers=lines[0].split("\t");
  var obj = {}
  for(var i=0; i<headers.length; i++){
    obj[headers[i]] = []
  }
  for(var i=1;i<lines.length;i++){
	  var currentline=lines[i].split("\t");
	  for(var j=0;j<headers.length;j++){
      if(!isEmpty(currentline[j]))
		    obj[headers[j]].push(currentline[j]);
	  }
  }
  return obj;
}
