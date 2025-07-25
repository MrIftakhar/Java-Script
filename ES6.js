// function say(message="Add Some thing"){
//     console.log(message);
// };
// say(55)

// function num(a,b,...number){
//     console.log(a,b, number);
// }
// num(55,66,44,77);


// const array1 = [1,2,3];
// const array2 = [...array1,4,5,6];
// console.log(array2)


// function show(message, name){
//     return{
//         message,
//         name
//     }
// }

// console.log(show("Yoo", "Buddy"));



// const array1 = [1,2,3,4,5]

// for(NewArray of array1){
//     console.log(NewArray)
// }

// const array2 = [6,7,8,9,10]
// for(NewArray2 in array2){
//     console.log(NewArray2)
// }


// const name = `ifty`;
// const age = 24;

// console.log(`My name is ${name} & I am ${age}`)


// const array = [1,2,3,4,5,6,7,8,9];
// let[a,b,c,...z] = array;
// console.log(a,b,c,z)


// const Obj ={
//     name:"Ifty",
//     age:24,
//     Id:4028,
// }
// const {name,age,Id}= Obj;
// console.log(name, age, Id);

// class Book {
//     constructor(BookName, Price){
//         this.BookName = BookName;
//         this.Price = Price;
//     }
// }

// let bookDetails = new Book("Rich but not", "500 Tk");
// console.log(bookDetails);

// let Person = class{
//     constructor(name){
//         this.name = name;
//     }
// }

// let NewPerson = new Person("I am New person");
// console.log(NewPerson);


// class Book{
//     static Fun(){
//         console.log("Hello");
//     }
// }
// Book.Fun()


// class Parents{
//     Assets1(){
//         console.log("It my GrandFather");
//     }
//     Assets2(){
//         console.log("It is my Father");
//     }
// }
// class Me extends Parents{
//     MyAssets(){
//         super.Assets1();
//         super.Assets2();
//     }
// }
// let MyAssets = new Me();
// MyAssets.MyAssets()


// let fun = function(x,y){
//     return x+y
// }
// console.log(fun("a", "b"));

// let fun = (x,y) =>{
//     return x+y
// }
// console.log(fun(40,20));


// let sym = Symbol("hello");
// let sym1 = Symbol("hello");

// console.log(sym===sym1);

// let array = [1,2,3,4,5];
// for(Element of array){
//     console.log(Element)
// }

// let array = [1,2,3,4,5]
// array.forEach(MyFun)

// function MyFun(z){
//     console.log(z)
// }

// let array = [1,2,3,4,5];
// let array1 = array.map(myArr);

// function myArr(x){
//     return x
// }
// console.log("array1 =",array1);

// let array = [1,2,3,4,5];
// let array1 = array.filter(myArr);

// function myArr(x){
//     return x < 4
// }
// console.log(array1)


// let fun1 = ()=> {
//     console.log(12);
// }

// let LoadingTime = () => {
//     console.log(13);
// }

// let fun2 = ()=> {
//     setTimeout(LoadingTime, 2000);
// }

// let fun3 = ()=> {
//     console.log(14);
// }
// fun1();
// fun2();
// fun3();


// let Display = (Info) => {
//     console.log(Info);
// }
// let HigherOrderFun = (Name, Id, CallBackFun) => {
//     const Details =`My Name is ${Name} & My Id is ${Id}`;
//     CallBackFun(Details);
// }
// HigherOrderFun("Iftakhar", 4028, Display);


// try{
//     console.log("Hello");
//     console.log(num);
//     let age = 25;
//     if(age < 17){
//         throw "Not Adult";
//     }
//     else if(age > 18){
//         throw "Older";
//     }
// }catch(ErrorHandle){
//     console.log(ErrorHandle);
//     console.log(ErrorHandle.name);
//     console.log(ErrorHandle.message);
// }finally{
//     console.log("By");
// }


// let message = true;

// let promise = new Promise((reslove,reject)=>{
//     if(message){
//         reslove([
//             {username:"ifty", Id:4028},
//             {username:"Nafiz", Id:4029}
//         ])
//     }else{
//         reject("ID is Increct")
//     }
// })
// promise.then((s)=>{
//     console.log(s)
// })
// promise.catch((error)=>{
//     console.log(error)
// })



