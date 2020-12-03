var sampleInput = [
	{
		name:"john",
		age:26,
	},
	{
		name:"siva",
		age:27,
	}
];
Array.prototype.beAddObject = function (input){
sampleInput.forEach((item,i) =>{
	item.country = input;
})
return(sampleInput);
}
sampleInput.beAddObject("India");
