// let username = window.prompt("enter your email ?")
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLocaleLowerCase();
// username = letter + extrachars;
// console.log(username);

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);//its easy of the top easy and bettr


// let name = "";
// while(name === ""){
//     name = window.prompt('enter your name')
// }
// console.log(`hello ${username}`)

const cantymeter = document.getElementById('cm');

const kmtom = document.getElementById('tokm');
const mtokm = document.getElementById('tom');
const cmtokm= document.getElementById('tocm');
const kmtocm= document.getElementById('cmtokm');
const number = document.getElementById('numbers');
const meter = document.getElementById('m');
const natejah = document.getElementById('result');
let result;

function convert(){
    if(cantymeter.checked){
        result = number.value / 100;
        result = Number(result);
        natejah.textContent = result + 'cm';
    }
    else if(meter.checked){
        result = number.value * 100;
        result = Number(result);
        natejah.textContent = result + 'm';
    }
    else{
        natejah.textContent = 'please check one of this '
    }
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,8]
];
matrix[0]//this first is for row 
[0]//this is for column
= 'd'
matrix[1][1] = 'z'
for(let row of matrix){
    const rowstring = row.join(' ');//this for join all 
    console.log(rowstring);//this to display it
}

const food1 = 'pizza';
const food2 = 'burger';
const food3 = 'cheps';
const food4 = 'reman';
const food5 = 'angor';

function getfood(...foods){
    return foods;
}
const foods = getfood(food1,food2,food3,food4,food5);
console.log(foods);

//calback is a function that do like if say in console show hello then good buy it make first hello then good buy


hello(goodbye());


function hello(callback){
    console.log('hello');
}
function goodbye(){
    console.log('goodbye');
}


let numaric = [1,2,3,4,5,6,7];
numaric.forEach(display);

function display(element){
    console.log(element);
}//make all the eement of the numaric  in a new row   

const numberss = [1,2,3,4,5,6,7,8,9,10];
const squares = numberss.map(square);
const cubes = numberss.map(cube);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3); 
}



let adad = [1,2,3,4,5,6,7,8,9,10];
let evennums = adad.filter(iseven);
let oddnums = adad.filter(isodd);

console.log(oddnums);
console.log(evennums);//do felter like search if the adad taqsimed by tow fleter it or show it

function iseven(element){
    return element % 2 === 0;
}
function isodd(element){
    return element % 2 !== 0;
}


// element.length;
//show the charecter of the elements

function hello1(){
    console.log("hello");
}
setTimeout(hello1, 3000);//that show the hello function out in 3s later

setTimeout(function(){
    console.log('hi');
},3000);//you can write it in this form

const adad1 = [1,2,3,4,5,6,7,8,9]
const morabah = adad1.map(function(element){
    return Math.pow(element, 2);
})//you can also define a function like this
console.log(morabah);

const how = (namess,age) => {console.log(`hello ${namess}`)
console.log(`you are old ${age}`)}

how("bro, 25");


//object is the colocation like this in under their

const person = {
    firstname : "patrik",
    lastname : "nothave",
    age:30,
    isEmploied : true,
    sayhello: function(){console.log('hello how are you to day')}
}//this is an object

console.log(person.firstname);
person.sayhello();

//this we can use the this instead the obeject like 
const person1 ={
    name : "hello",
    lastname : "hi",
    sayhello : function(){console.log(`hi iam ${this.name}`)}//we used the this in this section instead name we can use only in one time or one object in one folder
}
person1.sayhello();

console.log(this)

//construction is the special type of object like

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}
const car1 = new Car("ford", "musting", 2024, "red");
const car2 = new Car("new", "mute", 2025, "blue");
const car3 = new Car("now", "mg", 2026, "green");
const car4 = new Car("ford", "musting", 2024, "red");

console.log(car1.model);
console.log(car2.make);

//class is the written an object better like this
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
    calculatetotal(salestax){
        return this.price + (this.price * salestax);
    }
}

const salestax = 0.5
const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.45);


product1.displayProduct();
product2.displayProduct();
const total = product1.calculatetotal(salestax)
console.log(`total price (with tax): $${total}`)


class Mathulet{
    static PI = 3.14159;
}
console.log(Mathulet.PI);

//inheritance make a cllas child of other class like this

class animal{
    alive = true;
    eat(){
        console.log(`this ${this.name} is eating`)
    }
    sleeping(){
        console.log(`this ${this.name} is sleeping`)
    }
}
class Rabbit extends animal{
    name = "rabit";
}//extends make rabbit child of animal class

const rabbit = new Rabbit();
console.log(rabbit.alive)

//super is the parent like this = this object 
//super is the this parent super = the parent

class Animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Cow extends Animals{
    constructor(name, age ,runspeed){
        super();//we used super in this section if we doesnot use this code doesnot work
        this.name = name;
        this.age = age;
        this.runspeed = runspeed;
    }
}

class Cat extends Animals{
    constructor(name, age, flyspeed){
        super()
        this.name = name;
        this.age = age;
        this.flyspeed = flyspeed;
    }
}
class Dog extends Animals{
    constructor(name, age ,runspeed){
        super()
        this.name = name;
        this.age = age;
        this.runspeed = runspeed;
    }
}
const cow = new Cow("cow, 1, 25");
const cat = new Cat("cat, 5, 25");
const dog = new Dog("dog, 2, 32");
console.log(cow);

//getter = make property readable
//setter = make property writable

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        } else {
            console.error("Width must be a positive number");
        }
    }

    get width() {
        return this._width;
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            console.error("Height must be a positive number");
        }
    }

    get height() {
        return this._height;
    }
}

const rectangle = new Rectangle(5, 10);

rectangle.width = 5;
rectangle.height = 10;

console.log(rectangle.width);  // خروجی: 5
console.log(rectangle.height); // خروجی: 10


//destructuring 
//برای استخراج مقادیر از یک آرایه و نسبت دادن آنها به متغیرها می‌توانید از سینتکس [] استفاده کنید.
//برای استخراج مقادیر از یک شیء و نسبت دادن آنها به متغیرها از سینتکس {} استفاده می‌شود.
//like this
//sweping element

let a = 1; 
let b = 2;

[a, b] = [b, a];
console.log(a);//now it show b and show 2 from b
console.log(b);//it show a and show 1 from a

const colors = ["red","blue","green","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);

const [firstcolor, secondcolor,thirdcolor, ...extracolors] = colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);


function displaypeople({firstname, lastname, age, job}){
    console.log(`name:${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const people1 ={ 
    firstname : "jhon",
    lastname : "alexe",
    age : 30,
    job : "cooker"
}
const people2 = {
    firstname : "jhony",
    lastname : "star",
    age : 40,
}
const {firstname, lastname, age ,job} = people2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

displaypeople(people2);

//nested object is object inside another object
 const shakhs ={
    fullname : "bob",
    age: 30,
    student: false,
    hobbies:["karat", "fishing", "cooking"],//this is object inside shakhs object
    address: {
        street: "124 street",
        city: "balkh",
        country: "afghanistan"
    }//this is another object inside the shakhs object
 }

console.log(shakhs.address.street);
console.log(person.hobbies);


//array of the object
const fruits = [{name: "apple", color: "red",calories:"95"},//they are the object inside the fruits
                {name: "bannana", color: "red",calories:"95"},
                {name: "lemon", color: "red",calories:"95"},
                {name: "graps", color: "red",calories:"95"},
                {name: "banananna", color: "red",calories:"95"}]
console.log(fruits[3].name);

fruits.forEach(fruits => console.log(fruits));

fruits.forEach(fruits => console.log(name));

//sort()mean moratab kardan

let numberses = [1,10,11,2,9,,3,8,6,7,4,5];
numberses.sort((a, b) => a - b);
console.log(numberses);//now it mratab like 1 2 3 and more

const date = new Date()
console.log(date)//it show date and time first year then day then hour then minute then seocond then milysecond

const now = new Date(2024, 0, 1, 2, 3, 4, 5,);
console.log(now)

const year = date.getFullYear();
console.log(year)//only show the years

const month = date.getMonth();
console.log(month);

//closure is a function between another function

function outer(){
    let message = "hello"
    function inner(){
        console.log(message)
    }
    inner(); //it show now not outside
}
outer();
message = "GoodBye"

//setTimeout use to show do this function after this ms
//like this

// function sayhello(){
//     window.alert("hello")
// }
// setTimeout(sayhello,3000);   this the example



 
//console.time show how long your code taked like this

let numbersss = 1234567.89;

// تبدیل به فرمت محلی افغانستان (دری)
numbersss = numbersss.toLocaleString("fa-AF");//fa mean farsi af mean afghanistan

console.log(numbersss); // خروجی: ۱٬۲۳۴٬۵۶۷٫۸۹


let usdt = 1234.56;

console.log(usdt.toLocaleString("en-US", { style: "currency", currency: "USD" })); // $1,234.56
