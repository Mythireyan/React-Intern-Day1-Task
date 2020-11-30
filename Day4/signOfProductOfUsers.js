function signOfProductOfUser(n1,n2,n3){
	const b1= (n1.split(''));
	const b2 = (n2.split(''));
	const b3= (n3.split(''));
	if((b1[0]==='+' || b2[0]==='+' ||b3[0]==='+')&&(b1[0]==='-' || b2[0]==='-' ||b3[0]==='-')){
		alert("both signs are present");
	}else if(b1[0]==='+' || b2[0]==='+' ||b3[0]==='+'){
		alert("+ sign is present");
	}else if(b1[0]==='-' || b2[0]==='-' ||b3[0]==='-'){
		alert("- sign is present");
	}else{
		alert("nothing is present");
	}
}

signOfProductOfUser('1,-1,+1'); //Both are present

