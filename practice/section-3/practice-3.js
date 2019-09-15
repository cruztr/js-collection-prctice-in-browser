'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var results = [];
	var collectionC = [];

	for(var i in collectionA) {
		var getResult = collectionC.find(result => result.key == collectionA[i]);
		
		if(getResult != undefined){
			getResult.count = getResult.count + 1;
		} else{
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
