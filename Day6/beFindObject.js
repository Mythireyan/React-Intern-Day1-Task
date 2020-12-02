var sampleInput = [
	{
		name:"john",
		age:28	
	},
	{
		name:"siva",
		age:30
	}
];
Array.prototype.beFindObject= function(input){
	let output = [];
	if(input === name){
		for(let i=0; i<sampleInput.length; i++){
			output.push(sampleInput[i].name);
		}
	}
	console.log(output);
}

sampleInput.beFindObject(name);
