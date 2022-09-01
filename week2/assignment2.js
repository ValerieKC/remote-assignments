<<<<<<< HEAD
function calculate(args){

	const data = Object.values(args);
	const length = data.length;
	const arr = data.join().split(',');

	if(data[length-1]==='+'){
		return Number(arr[0])+Number(arr[1]);
	}else if(data[length-1]==='-'){
		return Number(arr[0])-Number(arr[1]);
	}else if(data[length-1]==='*'){
		return Number(arr[0])*Number(arr[1]);
	}else if(data[length-1]==='/'){
		return Number(arr[0])/Number(arr[1]);
	}else{
		return('Not Supposed')
	}
=======
function calculate(args){

	const data = Object.values(args);
	const length = data.length;
	const arr = data.join().split(',');

	if(data[length-1]==='+'){
		return Number(arr[0])+Number(arr[1]);
	}else if(data[length-1]==='-'){
		return Number(arr[0])-Number(arr[1]);
	}else if(data[length-1]==='*'){
		return Number(arr[0])*Number(arr[1]);
	}else if(data[length-1]==='/'){
		return Number(arr[0])/Number(arr[1]);
	}else{
		return('Not Supposed')
	}
>>>>>>> 19da42995f31f7493f108f48ca58e14c58e918a6
}