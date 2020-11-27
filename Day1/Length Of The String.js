function lengthOfTheString(input){
	if(input !== null || typeof(input)==="String"){
		const array =input.split('');
		return array.length;
	}
}

lengthOfTheString("React") //5
lengthOfTheString("javascript")  //10
lengthOfTheString(10) //Error