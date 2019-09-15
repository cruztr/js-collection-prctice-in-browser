'use strict';

function countSameElements(collection) {
	var results = [];

	for(var i in collection) {
		var getResult = results.find(result => collection[i].includes(result.key));
		
		if(getResult != undefined){
			getResult.count = getResult.count + 1;
		} else{
			if(collection[i].includes('-')){
				collection[i].split('-');
  				results.push({key: collection[i][0], count: parseInt(collection[i][2]) });
			} else
				results.push({key: collection[i], count: 1});
		}
	}

  return results;
}
