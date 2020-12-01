function GettingInputString(){
	this.input = '';
}

const input1 = new GettingInputString();
const input2 = new GettingInputString();

GettingInputString.prototype.beSpacify = function (input){
	const array=[];
	const char = input.split('');
	char.forEach((i)=>{
		i = i+ ' ';
		array.push(i);
	});
	return (array.join(''));
}

input1.beSpacify("hello");  //"h e l l o "
input2.beSpacify("bestenlist"); //"b e s t e n l i s t "