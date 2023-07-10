let dat = [10,12,2,23,52,5,8,9,2];
dat.splice(2,2,52000)
console.log(dat)
//code for adding a element in array
let data = [10,12,2,23,52,5,8,9,2];
function get(){
    let pos  = document.getElementById("in").value
    let num = document.getElementById("input").value;
    num = parseInt(num)
    for(let i = data.length -1 ;i >=0; i--){
        if(i >= pos){
          data[i+1] = data[i]
          if(i == pos){
            data[i] = num
          } 
        } 
      
    }
    console.log(data)
    }


    // code for delettition of an element from array
let pos  = 3
for(let i = pos; i < data.length ;i++){ 
      data[i] = data[i+1]
}
 data.length = data.length -1


 //  code for searching element 
let number = 23
let index = undefined
for(let i = 0;i <data.length -1;i++){
  if(data[i] == number){
    console.log(i)
    break;
  }
}

//code for marging an array 
let mar1 =[4,5,89,28,252,20]
let mar2 = [8,5,9,7,95]
let mar3 = []
for(let i = 0; i < mar1.length; i++){
  mar3[i] = mar1[i]
}
for(let i = 0; i <mar2.length ;i++){
  mar3[i + mar1.length] = mar2[i]
} // i made this problem with only a for loop and else if lets try 
// code for merging by while loop and prefer this one
let a1 = [1,5,8,9,9,45,78,99]
let a2 = [3,6,7,10,77,78]
let a3 = []
let v1 = 0
let v2 = 0
let v3 = 0
while(v1 < a1.length && v2 < a2.length){
  if(a1[v1] < a2[v2]){
    a3[v3] = a1[v1]
    v1++
  }
  else{
    a3[v3] = a2[v2]
    v2++
  }
  v3++
}
while(v1 < a1.length){
  a3[v3] = a1[v1]
    v1++
    v3++
}
console.log(a3)

