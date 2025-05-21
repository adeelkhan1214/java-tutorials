

let arr = [1,3,2,5,6,3,5,6,7,8,7]
for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
   if(arr[i] == arr[j]){
    console.log("Duplicate found:", arr[i])
   }
    }
}