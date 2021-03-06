/*
Module 31 + 32 practice problem
*/
/*
Question: 1.
1.১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। 
*/
// =============================ANSWER=========================
//using const 
const name = "Sanjoy Kundu";
console.log(name);


//using let
let mobileName = "Samsung Glaxy s15";
mobileName = "IPhone 10";
console.log(mobileName);



/*
Ouestion: 2
2. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/

//====================================Answer================================
//first declear a variable 
const fullName = "Sanjoy Kundu";
const address = "Madaripur-7902";
const eyeColor = "Black";
const phone = "+880197484...";

const aboutMyself = `My name is ${fullName}. I am form ${address}. My eye color is ${eyeColor}. And My cell number is ${phone}`;
console.log(aboutMyself);


//atfirst declear an object 







/* 3. QUESTION
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
*/
//=======================answer ==================

const onePara = x => x / 5;
const ouputPara = onePara(10);
console.log("One arrow function output is " + ouputPara);








/* 3.QUESTION
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো
*/
//======================Answer=======================
const doublePara = (num1, num2) => ((num1 + 2) * (num2 + 2));
const doubleParaValue = doublePara(10, 10);
console.log("Double para output is " + doubleParaValue);










/* 3. QUESTION
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। 
*/
// ====================Answer=======================
const threePara = (x, y, z) => (x * y * z);
const returnResult = threePara(10, 10, 10);
console.log("Three parameter multiple result is " + returnResult);








/* QUESTION 3
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
//=====================answer======================
const pearParameter = (first, second) => {
	const firstNumber = first + 2;
	const secondNumber = second + 2;
	const multiplication = firstNumber * secondNumber;
	return multiplication;
}

const pearParameterOuput = pearParameter(100, 100);
console.log(pearParameterOuput);








/*=========================================================================
==========GOGLE QUESTION =====================
QUESTION 4
৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।

QUESTION 4.5
৪.৫. [এক্সট্রা আরেকটা হোম ওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 

==========================================================================*/
/* 
1. jokhon amra var diye kono variable declar korbo tokhon var value amra jokhon iccha tokhon change korte parbo .

2. ler diye variable declear korbe akbr amra tar value poriborton korte parbo .

3. const diye tar value akbar declear korte parbo

*/








/*============================================================
QUESTION 5
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
==============================================================*/

const number1 = [10, 5, 4, 2];
const outputNumber = number1.map(num => num * 5);
console.log(outputNumber);









/*======================================================
//========================GOOGLE=======================
QUESTION 6
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
=======================================================*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const odds = arr.filter(number => {
	return number % 2 !== 0;
});

console.log(odds);


//odd array part 2

const oddArr = [1, 3, 5, 4, 2, 9, 19, 30, 44];
const oddNumber = oddArr.filter(numb => {
	return numb % 2 !== 0;
});

console.log(oddNumber);










/*===========================================================
QUESTION 7
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
============================================================*/

const products = [
	{ name: "mobile samsung", price: 1500, color: "cream" },
	{ name: "room Hitter", price: 5000, color: "black" },
	{ name: "laptop", price: 15000, color: "silver" },
	{ name: "speaker", price: 1000, color: "white" },
];
const fiveThousandPrice = products.find(product => product.price == 5000);
console.log(fiveThousandPrice);











/*============================================================
QUESTION 7.5
৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
=============================================================*/
/* 
Map() --  এর কাজ হচ্ছে  একটা  অ্যারের মধো প্রত্যকটি ইলিমেন্টের এর জন্য ফাংশনকে কল করে এবং সব ফাংশনের রেজাল্টকে একটা নতুন অ্যারের মধ্যে রেখে  রিটান করে।
example :
const number = [4, 6, 8, 10];
const output = numbers.map(number => number * 2);
cosole.log(output); === 8, 12, 16, 20



forEach()  একটি  অ্যারের প্রতিটি উপাদানের জন্য একটি মাত্র ফাংশন কল করে।
example :
const products = [
	{ name: "water-bottle", price: 50, color: "black"},
	{ name: "water", price: 15, color: "red"}
];
const productPrice = products.forEach(pro => pro.name);
console.log(productPrice);



filte() ----  ফিল্টারের কাজ হচ্ছে প্রতিটি  উপাদানের মধ্য যে উপাদান র্শত  ফুলফিল করে তাকে রিটান করে।
example :
const numbers = [10, 50, 12, 60];
cosnt biggestNumber = numbers.filter(number => number < 10);
console.log(biggestNumber);
*/


//forEach concepts
const items = [
	{ name: "water-bottle", price: 50, color: "black" },
	{ name: "water", price: 15, color: "red" }
];
const productPrice = items.forEach(pro => pro.color);
console.log("for each concept is " + productPrice);




//filter concept
const numbers = [10, 50, 12, 60];
const biggestNumber = numbers.filter(number => number > 10);
console.log("Filter biggest number is " + biggestNumber);







/*===============================================================
QUESTION 8
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 

=============================================================*/
const company = {
	name: "Grammern-Phone",
	owner: "AKM Smsu",
	year: 1990
};
const variable = company.name;
console.log(variable);

//Opotional
// kake dorkar{year} = kothey ache(compnay)
const { year } = company;
console.log(year);






/*===========================================================
QUESTION 9
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। 
==============================================================*/

const nestedObject = {
	name: "Banglalink",
	age: 27,
	hobby: "Playing",
	work: {
		place: "Madaripur",
		place: "Faridpur",
		teach: {
			subject1: "bangla",
			subject2: "english",
			tree: "Mango"
		}
	}
};
console.log(nestedObject.work.teach.tree);









/*================================================================
QUESTION 10
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।
==================================================================*/


function additon(first, second, third = 7) {
	const output = first + second + third;
	return output;
}
const finalAdditonResult = additon(10, 20);
console.log(finalAdditonResult);


//using arrow funcation
const additon3 = (first, second, third = 7) => (first + second + third);
const additonOutput2 = additon3(100, 100);
console.log(additonOutput2);



/*==================================================
QUESTION 11
[অপশনাল]

১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
========================================================*/









/*========================================================
QUESTION 12
১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। 
===========================================================*/



















































/*===========================My Practice ================================
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  
MY PRCTICE ALL MY PRCTICE ALL MY PRCTICE ALL  MY PRCTICE ALL  MY PRCTICE ALL  

*/
//sprate operator
const first = [10, 20, 30, 40];
const second = [50, 60, 70, 80];
const name = ["sanjoy", "siraz", "robin", "likhon"];
const third = [...first, ...second, ...name];
console.log(third);




//============Highest and lowest value======================================
//finding biggeset number using array
const biggesetNumber = Math.max(100, 200, 50, 40, 44, 555, 5, 9);
console.log(biggesetNumber);

//finding lowest number 
const lowestNumber = Math.min(100, 200, 50, 40, 44, 555, 5, 9);
console.log(lowestNumber);
//===============================================




//====================dynamic string==================
const fName = "Sanjoy";
const lastName = "Kundu";
const idCard = 110;
const country = "Bangladesh"

const myBio = `Hello! This is ${fName} ${lastName}. I am form ${country}. My Card number is ${idCard}`;
console.log(myBio);
//====================================================




//===============destructruing Object ======================
/*kono akta object er property er value  akta object hoite pare*/
const place = {
	placeName: "Madaripur",
	schools:
	{
		one: "Kulpaddi High School",
		two: "United Islamia govt school",
		three: "Donovan govt girl high school",
		four: "Thank You"
	},
	students:
	{
		kulpaddiSchools: 110,
		donovanSchool: 200,
		uiSchool: 400
	},
	postCode: 7902,
}
console.log("Girls schools name is " + place.schools.three);
console.log("Madaripur postal code is" + place.postCode);
//============================================================







//=================array destructuring==========================

const [sri1, sri2, sri3, sri4] = ["Sanjoy", "Robiul", "Karim", "Kawsor"];
console.log("My name is " + sri2, "My name is " + sri3);

//========================================================












//==============arrow map to do one line magic=================

const square = [10, 5, 4, 3];
const squareResult = square.map(anyName => anyName * 2);
console.log(squareResult);

//======================================










// =======================just find the output of prduct array  using map and output all product name 
const products = [
	{ name: "Iphone", price: 200000, color: "black" },
	{ name: "vivo", price: 2400, color: "red" },
	{ name: "lenevo-Laptop", price: 29000, color: "green" },
	{ name: "Monitor", price: 15000, color: "black" },
];
//finding all product name
const allName = products.map(laptop => laptop.name);
console.log(allName);
//finding all product price 
const productPrice = products.map(price => price.price);
console.log(productPrice);
// finding all product color 
const productColor = products.map(colors => colors.color);
console.log(productColor);


//======================================================





/* =================filter ===========================*/
const useFilter = [
	{ name: "PC-1", motherBord: "gigabyte-1", price: 150000, color: "red" },
	{ name: "PC-2", motherBord: "gigabyte-2", price: 1500, color: "orange" },
	{ name: "PC-3", motherBord: "gigabyte-3", price: 20000, color: "blue" },
	{ name: "PC-5", motherBord: "gigabyte-5", price: 70000, color: "red" },
	{ name: "PC-6", motherBord: "gigabyte-7", price: 1500, color: "red" },
];

//filter loop cholaiye condition follow kore
/* const filter = useFilter.filter(anyName => anyName.price > 20000);
console.log(filter);

const filterColor = useFilter.filter(anyColor => anyColor.color == "red");
console.log(filterColor);
 */


//using find 
const useFind = useFilter.find(redFind => redFind.color = "red");
console.log(useFind);


