'use strict';

function countSameElements(collection) {
	var results = [];

	for(var i in collection) {
		var getResult = results.find(result => result.name == collection[i]);
		
		if(getResult != undefined){
			getResult.summary = getResult.summary + 1;
		} else{
			if(collection[i].includes('-')){
				collection[i].split('-');
				var getRes = results.find(result => result.name == collection[i][0])
  					if(getRes == undefined)
  						results.push({name: collection[i][0], summary: parseInt(collection[i][2]) });
  					else
  						getRes.summary = getRes.summary + parseInt(collection[i][2]);
			} else if(collection[i].includes(':')){
				collection[i].split(':');
  				results.push({name: collection[i][0], summary: parseInt(collection[i][2]) });
			} else if(collection[i].includes('[')) {
				var getRes = results.find(result => result.name == collection[i][0])
				getRes.summary = getRes.summary + parseInt(collection[i].substring(collection[i].indexOf('[')+1, collection[i].indexOf(']')));
			} else
				results.push({name: collection[i], summary: 1});
		}
	}

  return results;
}
