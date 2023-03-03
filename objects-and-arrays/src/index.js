function numberOfDuplicates(arr) {

	let obj = {};

	let finalArr = [];

	for (let i = 0; i < arr.length; i++){
		let element = arr[i];
		if (!(element in obj)) {
			obj[element] = 1;
			finalArr.push(1);
		} else {
			obj[element] += 1;
			finalArr.push(obj[element]);
		}
	}
	return finalArr;
}

function countObjectStrength (obj) {

	const specificity = {
		undefined : 0,
		boolean : 1,
		number : 2,
		string : 3,
		object : 5,
		function : 7,
		bigint : 9,
		symbol : 10
	}


	let arr = Object.getOwnPropertyDescriptors(obj);
	let typeArr =[];
	let count = 0;

	for (let property in arr) {
		typeArr.push(typeof arr[`${property}`]['value']);
	}

	typeArr.forEach(element => {
		count += specificity[element]
	});

	return count;
}

//countObjectStrength({some: 'value'});

/*const array1 = [1, 2, 1, 1, 3];
//output: [1, 1, 2, 3, 1]
const array2 = ['a', 'a', 'aa', 'a', 'aa'];
//output: [1, 2, 1, 3, 2]


console.log(numberOfDuplicates(array1));
console.log(numberOfDuplicates(array2)); */