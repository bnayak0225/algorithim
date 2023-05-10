let arr = [23,5,8,3,7,27,87,9,50]

const insertionSort = (arr) => {
	for(let i=1; i<arr.length; i++){
  	let key = arr[i]
  	let j = i - 1;
    while(j >= 0 && arr[j] > key){
    	arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j+1]=key
  }
}
insertionSort(arr)
console.log(arr)
