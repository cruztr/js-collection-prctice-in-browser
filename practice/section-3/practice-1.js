'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var results = [];

	for(var i of collectionA){
		if(objectB.value.includes(i.key))
			i.count = i.count - 1;
			
		results.push(i);
	}
	return results;
}
