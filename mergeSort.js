const merge = (arr, p, q, r) => {
	let leftLen = q - p
  let rightLen = r - (q + 1)
  let leftArr = []
  let rightArr = []
  for(let i= p; i<=q; i++){
  	leftArr.push(arr[i])
  }
  for(let i= q + 1; i<=r; i++){
  	rightArr.push(arr[i])
  }
  let j=0, k=0
  for(let i=p; i <= r; i++){
  	console.log(i, p, r, leftArr, rightArr, leftArr[j], rightArr[k],  j, k)
  	if(leftArr[j] <= rightArr[k] || rightArr[k]===undefined){
    	arr[i] = leftArr[j]
      console.log("left")
      j++
    }
    else {
    	/* console.log(rightArr, rightArr[k], k) */
    	arr[i] = rightArr[k]
      console.log("right")
      k++
    }
  }
  
}
const mergeSort = (arr, p, r) => {
	if(p < r){
  	let q = Number(((p + r)/2).toFixed())-1
    mergeSort(arr, p, q)
    mergeSort(arr, q + 1, r)
  	merge(arr, p, q, r)
  }
}
let arr = [3, 4, 1, 4, 1, 234,4,1,435,6,8, "a",1,54,75,2,585,3,64,247,79435,246]
let p = 0
let r = arr.length - 1
mergeSort(arr, p, r)
console.log(arr)
