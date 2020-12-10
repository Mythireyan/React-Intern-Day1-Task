const array = [1,2,3];    //SAMPLE ARRAY
const clonedArray=[];	  //CLONED ARRAY	

function cloneArray(array){
	for (let i=0; i<array.length; i++){
		clonedArray.push(array[i]);
	}
	return(clonedArray);
}

cloneArray(array);