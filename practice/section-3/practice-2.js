'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var results = [];

	for(var i of collectionA){
		if(objectB.value.includes(i.key))
			i.count = i.count - Math.floor(i.count/3);
		
		results.push(i);
	}
	return results;
}
