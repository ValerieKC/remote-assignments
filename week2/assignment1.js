<<<<<<< HEAD
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

=======
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

>>>>>>> 19da42995f31f7493f108f48ca58e14c58e918a6
