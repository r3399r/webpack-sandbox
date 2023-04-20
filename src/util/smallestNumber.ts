export function smallestNumber(arr:number[]) {
    let smallestNumber = arr[0]
    let smallestIndex = 0
    for(let i = 1; i < arr.length; i++) {
       if(arr[i] < smallestNumber) {
         smallestNumber = arr[i]
         smallestIndex = i 
       }
    }
    // let i=0;
    // i = i+1
     return [smallestNumber,smallestIndex];
}