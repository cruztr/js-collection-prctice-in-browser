'use strict';

function countSameElements(collection) {
	var results = [];
	
	for(var i in collection) {
		var getResult = results.find(result => result.key == collection[i]);
		
		if(getResult != undefined){
			getResult.count = getResult.count + 1;
		} else{
			results.push({key: collection[i], count: 1});
		}
	}

  return results;
}
