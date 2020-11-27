function checkTheNumbers(num1,num2){
	if(typeof(num1) && typeof(num2) === "number"){
		if(num1 === 50 || num2 === 50 || num1 + num2 === 50){
			return true;
		}else{
			return "Oooops there is no value of fifty";
		}
	}
}

checkTheNumbers(25,25) //true
checkTheNumbers(50,70) //true
checkTheNumbers(46,38) //Oooops there is no value of fifty