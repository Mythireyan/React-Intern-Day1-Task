function squareTheGivenNumber(number){
	if(typeof(number)==="number"){
		return number*number
	}else{
		return "You should enter a number not any other datatype!"
	}
}

squareTheGivenNumber(2) // 4
squareTheGivenNumber(15) //225
squareTheGivenNumber("abcd") //  You should enter a number not any other datatype!