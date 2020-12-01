function gettingInputString(){
	this.input = '';
}

const input1 = new gettingInputString();
const input2 = new gettingInputString();

gettingInputString.prototype.beVowel= function (input){
	const array = input.split('');
	console.log(array);
	const output=[];
	for(let i=0; i<array.length;i++){
		if((array[i]==='a')|| (array[i]==='e')|| (array[i]==='i')|| (array[i]==='o')|| (array[i]==='u')){
			output.push(array[i]);
		}
	}
	return output.join('');
}	
input1.beVowel("hello"); //eo
input2.beVowel("encyclopedia"); //eoeia



