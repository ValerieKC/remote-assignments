<<<<<<< HEAD
function twoSum(nums, target){
	const length = nums.length;
	for(let i = 0; i < length; i++){
		if((target - nums[i])<0){
			continue;
		}else{
			const diff = target - nums[i];
			const index = nums.findIndex(value => value === diff);

			return [i,index];
		}
	}

=======
function twoSum(nums, target){
	const length = nums.length;
	for(let i = 0; i < length; i++){
		if((target - nums[i])<0){
			continue;
		}else{
			const diff = target - nums[i];
			const index = nums.findIndex(value => value === diff);

			return [i,index];
		}
	}

>>>>>>> 19da42995f31f7493f108f48ca58e14c58e918a6
}