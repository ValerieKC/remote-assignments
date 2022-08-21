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
}