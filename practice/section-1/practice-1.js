'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];

	for(var i of collectionA)
		if(collectionB.includes(i))
			result.push(i);

	return result;
}
