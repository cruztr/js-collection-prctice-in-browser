'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	var results = [];
	var collectionC = [];

	for(var i in collectionA) {
		var getResult = collectionC.find(result => collectionA[i].includes(result.key));
		
		if(getResult != undefined){
			getResult.count = getResult.count + 1;
		} else{
			if(collectionA[i].includes('-')){
				collectionA[i].split('-');
  				collectionC.push({key: collectionA[i][0], count: parseInt(collectionA[i][2]) });
			} else
				collectionC.push({key: collectionA[i], count: 1});
		}
	}

	for(var i of collectionC){
		if(objectB.value.includes(i.key))
			i.count = i.count - Math.floor(i.count/3);
		
		results.push(i);
	}
	return results;
}


		