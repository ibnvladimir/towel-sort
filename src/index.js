
// You should implement your task here.

module.exports = function towelSort (arr) {
  for(let i = 1; i < arr.length; i += 2){
		arr[i].reverse();
	}
	return arr.flat();
}
