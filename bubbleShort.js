const bubbleSort = (arr) => {
	for(let i = 0; i < arr.length; i++){
    for(let j = arr.length; j >= i + 1; j--){
    	console.log(arr[j], arr[j-1], arr[j] < arr[j-1])
			if(arr[j] < arr[j-1]){
      	[arr[j], arr[j-1]] = [arr[j-1], arr[j]]
      }
    }
  }
}
let arr = [4,1,435,6,8, 1,54,75,2]
bubbleSort(arr)
console.log(arr)
