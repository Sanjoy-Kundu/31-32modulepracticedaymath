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



