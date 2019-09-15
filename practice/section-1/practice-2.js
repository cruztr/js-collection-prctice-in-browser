'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];

	for(var i of collectionA)
		if(collectionB[0].includes(i))
			result.push(i);

	return result;
}
