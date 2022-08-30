const myAge = 25;//创建一个变量 年龄
let earlyYears = 2; //保存到此变量的值会发生变化
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Sun Fanxin'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears}
years old in dog years.` );