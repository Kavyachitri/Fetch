
// const prompt=require('prompt-sync')();
// let books=true;
 
// if(books==true)
//  {
//   console.log("you can enter the class room");

//  }
//  else{
//   console.log("you cann't enter the class without your books");
//  }



// let marks=70;
  
// if(marks>=90){
//   console.log("Iphone");
// }
// else if(marks>=80){
//   console.log("Laptop");
// }
// else{
//   console.log("Watch");
// }


// let marks=65;

// if(marks>=95){
//   console.log("Trip");
// }
// else if(marks>=80){
//   console.log("Lunch");
// }
// else if(marks>=70){
//   console.log("movie");
// }
// else{
//   console.log("Pen");
// }


// Quedtions


// 
// for(i=0;i<=10;i++){
//   console.log(i);
// }

// 2
// let sum=0;
// for(i=0;i<=100;i++){
//   sum=sum+i;
//   console.log(sum);
// }

// // 3
// let factorial=1;
// for(i=1;i<=10;i++){
//   console.log(factorial*=i);
// }

// 4
// Fibonacci
// const prompt=require('prompt-sync')();
// const num=parseInt(prompt('Enter the number'))
// let nxt;
// let num1=0;
// let num2=1;
//   console.log(num1);
//   console.log(num2);
//   for(let i=2;i<=num;i++){
//     nxt=num1+num2;
//     console.log(nxt);
//     num1=num2;
//     num2=nxt;
//   }

//5
// const prompt=require('prompt-sync')();
// let num=parseInt(prompt('Enter the value'));
// for(let i=1;i<=10;i++){
//   let res= num*i;
//   console.log(`${num}*${i}=${res}`);
// }

// //6
// let books=[54,93,85,73.7,11,26,65,83];
// let max=books[0];
// for(let i=1;i<books.length;i++){
//   if(books[i]>max){
//     max=books[i];
//     console.log(max);
//   }
// }

// 7
// program to count the number of vowels in a string

// const prompt=require('prompt-sync')();
// let num=prompt('Enter the name');
// let vowelCount=0;
// for(let i=0;i<num.length;i++){
//   const char= num.charAt(i).toLowerCase();
//   if(char==='a'|| char==='e'|| char==='i'|| char==='o' || char==='u'){
//     vowelCount++;
//   }
// }
// console.log(vowelCount);

//8

// const num=parseInt(prompt('Enter a positive number : '));

// if(isNaN(num) || num<=1)
// {
//     console.log('Please enter valid number!!!!');
// }
// else{
//     let isPrime=true;
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i==0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(`Number ${num} is prime.`)
//     }
//     else{
//         console.log("Not a prime number")
//     }
// }

//9

// let array1=[23,45,79,64,95,85,85];
// let array2=[23,74,90,75,85,85];
// let empty_array=[];
// for(let i=0;i<array1.length;i++){
//   const element1=array1[i];
//   for(let j=0;j<array2.length;j++){
//     const element2=array2[j];
//     if(element1===element2){
//       empty_array.push(element1);

//     }
//   }

// }
// if(empty_array.length>0){   
//   console.log (empty_array);

  
// }
// else{
//   console.log("No common Element")
// }


// 10

// let array=[1,2,3,4,5,6,7,8,9];
// let empty_array=[];
// for(let i=array.length-1;i>=0;i--){
//   empty_array.push(array[i]);

// }
// console.log(empty_array);


// const ClaculateArea=(radius) => {
//   let area= 22/7* radius * radius;
//   return area;

// }
// const result = ClaculateArea(6.7);
// console.log(`Area of the cricle is : ${result} cm sq`);



// const Sharevalue=(totalincome)=>{
//     const Share = totalincome * 12/((12*1)+(6*2)+(4*3));
//     const aShare=Share*1;
//     return aShare;
// }
// const result= Sharevalue(1200);
// console.log(`The total share value is: Rs ${result}`)


// let num=[2,4,7,3,2,8]
// let greater=num.filter((number)=>{
//     return number>5;
// });
// console.log(greater);

// let num=[2,3,5]
// let sum=num.reduce((total,number)=>{
//     return total+=number;
// });
// console.log(sum);
 

// let fruits=["Apple","mango","Banana"]
// let fruitsAndveg=[...fruits,"Tomato","Potato"]
// console.log(fruits);
// console.log(fruitsAndveg);


// let a=10;
// let b=20;
// let c;
 
// c=a;
// a=b;
// b=c;
// console.log(a,b);
 
// let num=(a,b)=>{
//     let c;
//     c=a;
//     a=b;
//     b=c;

//     console.log(a,b)
// }
// num(10,20)

// let url="https://jsonplaceholder.typicode.com/users";

// fetch(url)
// .then((Response)=>{
//   return  Response.json();
// })
// .then ((data)=>{
//     for(let item in data){
//         console.log(data[item].email);
//     }
    
// })


// function add(a,b){
//     return a+b;
// }

// console.log(add (10,20));


// let array = [10,28,93,71,27,63,8,4]
// let large = 0;
//     for(let i=0;i<ytarray.length;i++){
//         if(large < array[i]){
//         large = array[i];
//     }
// }

// console.log(large);

// function greet(){
//     console.log("Hello");
// }
// setInterval(greet,3000);
// console.log("This msg is late");


// let num = [1,6,9,4,3];
// let sum =num.map((number)=>{
//     return number+7;
// });
// console.log(sum);

var arr = [1,2,3,4,5]
let sum = 0
arr.forEach((num)=>{
    sum +=num
    console.log(sum)
    const avg = sum/arr.length
    console.log(avg)
    
})