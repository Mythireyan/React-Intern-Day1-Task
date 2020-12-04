var sampleInput = [
	{
		name:"john",
		age:26,
		country:"India"
	},
	{
		name:"siva",
		age:27,
		country:"India"
	}
];
Array.prototype.beRemoveObject = function (input){
sampleInput.forEach((item) =>{
	delete item[`${input}`];	
})
return(sampleInput);
}
sampleInput.beRemoveObject("country");
