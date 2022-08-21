function calculate(data){
	const discount = Object.values(data)[0];
	const goods = Object.values(data)[1];
	let total = 0;
	for(let i = 0 ; i < goods.length ; i++){
		const price = goods[i]['price'];
		total += price*discount;
	}
	return total;
}
