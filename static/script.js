function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms))
}

function createBoxes(arr){

let container=document.getElementById("arrayContainer")
container.innerHTML=""

arr.forEach(num=>{

let box=document.createElement("div")
box.classList.add("box")
box.innerText=num

container.appendChild(box)

})

}

function getArray(){

let input=document.getElementById("arrayInput").value
return input.split(",").map(Number)

}

async function startBinarySearch(){

let arr=getArray().sort((a,b)=>a-b)
let target=parseInt(document.getElementById("searchInput").value)

createBoxes(arr)

let boxes=document.querySelectorAll(".box")

let left=0
let right=arr.length-1

document.getElementById("explanation").innerText=
"Binary Search works on sorted arrays. It repeatedly checks the middle element."

await sleep(1000)

while(left<=right){

let mid=Math.floor((left+right)/2)

boxes[mid].classList.add("active")

document.getElementById("explanation").innerText=
"Checking middle element: "+arr[mid]

await sleep(1000)

if(arr[mid]==target){

boxes[mid].classList.remove("active")
boxes[mid].classList.add("found")

document.getElementById("result").innerText=
"Element found at index "+mid

return
}

if(arr[mid]<target){

for(let i=left;i<=mid;i++)
boxes[i].classList.add("removed")

left=mid+1
}
else{

for(let i=mid;i<=right;i++)
boxes[i].classList.add("removed")

right=mid-1
}

boxes[mid].classList.remove("active")

await sleep(1500)

}

document.getElementById("result").innerText="Element not found"

}

async function startBubbleSort(){

let arr=getArray()

createBoxes(arr)

let boxes=document.querySelectorAll(".box")

document.getElementById("explanation").innerText=
"Bubble Sort repeatedly swaps adjacent elements if they are in wrong order."

await sleep(1500)

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length-i-1;j++){

boxes[j].classList.add("active")
boxes[j+1].classList.add("active")

await sleep(900)

if(arr[j]>arr[j+1]){

let temp=arr[j]
arr[j]=arr[j+1]
arr[j+1]=temp

boxes[j].innerText=arr[j]
boxes[j+1].innerText=arr[j+1]

}

boxes[j].classList.remove("active")
boxes[j+1].classList.remove("active")

}

boxes[arr.length-i-1].classList.add("sorted")

}

document.getElementById("result").innerText="Array Sorted Successfully"

}