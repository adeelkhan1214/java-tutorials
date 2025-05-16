
const numbers = [1, 2, 1, 2, 3, 4, 2, 4, 5, 3, 5, 65];
const duplicate = [];
const seen = [];
let i = 0;
while (i<numbers.length) {
let isduplicate =false;
let isNextDuplicate = true;


let j = 0;
while (j< seen.length) { if (seen[j] === numbers[i]){
    isduplicate = true;
    break;}
   j++; 
}
if (isduplicate) {
    let k = 0 ;
    while (k<duplicate.length) {
        if(duplicate[k] === numbers[i])

       { isNextDuplicate = false;
        break ;


       }
       k++  
    }
    if (isNextDuplicate) {
        duplicate[duplicate.length] = numbers[i]

        
    }
}
else{
    seen[seen.length] =numbers[i];
}
i++
}
console.log("duplicate number is :",duplicate)
