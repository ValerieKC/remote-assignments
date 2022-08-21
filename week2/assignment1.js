function max(numbers){
	const length = numbers.length;
	let theMAX = numbers[0];

	for(let i = 1; i <= length; i++){
		if((theMAX-numbers[i])<0){
			theMAX = numbers[i];
		}else{
			theMAX = theMAX;
		}
	}
	return theMAX;
}

