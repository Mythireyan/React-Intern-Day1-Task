function secondLargestNumber(arrayOfNumbers){
	if(arrayOfNumbers.length > 1){
			for(let i=0;i<arrayOfNumbers.length;i++){
			for(let j=0;j<arrayOfNumbers.length;j++){
				if(arrayOfNumbers[j+1] > arrayOfNumbers[j]){
					let temp = arrayOfNumbers[j];
					arrayOfNumbers[j]=arrayOfNumbers[j+1];
					arrayOfNumbers[j+1]=temp;
				}
			}
		}
	}else{
		return "There is some error in finding the second largest number."
	}
	// console.log(arrayOfNumbers);
	return arrayOfNumbers[1];
}

secondLargestNumber([23,89,45,17,10]); //45
