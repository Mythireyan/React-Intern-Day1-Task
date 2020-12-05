let sampleInput = [1,2,3,4,5,2,5];

Array.prototype.beGetDuplicate= function (){
	//FOR SORTING THE GIVEN ARRAY

	for (let i=0;i<sampleInput.length;i++){
		for (let j=0; j<sampleInput.length;j++){
			if(sampleInput[j]>sampleInput[j+1]){
				let temp = sampleInput[j];
				sampleInput[j] = sampleInput[j+1];
				sampleInput[j+1] = temp;
			}
		}
	}

	//FOR SEARCHING THE DUPLICATE ENTRIES

	const output = [];
	for(let i=0;i<sampleInput.length;i++){
		if(sampleInput[i]===sampleInput[i+1]){
			// console.log(sampleInput[i]);
			output.push(sampleInput[i]);
		}
	}
	console.log(output);
}

sampleInput.beGetDuplicate();    //[2,5]
