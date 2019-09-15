'use strict';

function collectSameElements(collectionA, objectB) {
  	var result = [];

	for(var i of collectionA)
		if(objectB.value.includes(i))
			result.push(i);

	return result;
}
