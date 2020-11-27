function daysLeftForChristmas(){
	const date1 = Date.now();
	const date2 = new Date('12/25/2020');
	const dateDiffference = date2 - date1;
	let daysLeft = (dateDiffference /(60*60*24*1000)) % 365;
	return Math.floor(daysLeft) + 1; 
}

daysLeftForChristmas();

27 Days //on the current date 28th Nov 2020