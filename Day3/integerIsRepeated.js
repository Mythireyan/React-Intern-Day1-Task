function isIntegerRepeated(number){
	if(typeof(number) === 'number'){
		const stringifiedIndividualNumber = number.toString().split('');
	const firstValue = stringifiedIndividualNumber.length-1;
	const secondValue = stringifiedIndividualNumber.length-2;
	
	if(stringifiedIndividualNumber[firstValue] === stringifiedIndividualNumber[secondValue]){
		return true;
	}else{
		return false;
	}
}else {
	return "you should enter a number not any other datatype"
}	
}

isIntegerRepeated(22) //true
isIntegerRepeated(1234323499) //true
isIntegerRepeated(123456)  //false