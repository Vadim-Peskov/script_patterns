let myArr = [-1, 0, 1, 2, 5, 7, 8, 9, 99];

let search = function (arr, target) {
	let left = 0;
	let right = arr.length - 1;
	let mid;
	
	while (left <= right) {
		mid = Math.round((right - left) / 2) + left;
		
		if (target === arr[mid]) {
			return mid;
		}
		else if (target < arr[mid]) {
			right = mid - 1;
		}
		else {
			left = mid + 1;
		}
	}
	
	return -1; // если число не найдено, вернет -1;
}

console.log(search(myArr, 9));