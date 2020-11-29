function squaringEveryDigits(number){
	if(typeof(number)==="number"){
		const numberArray = number.toString().split('');
		const individualItem = numberArray.map(item=>{
		return item*item;
		// return squareOfNumbers;
	})
	return individualItem.join('');
	}else{
		return "you should enter a number not any other datatype"
	}
}

squaringEveryDigits(123) //149
squaringEveryDigits(555) //252525