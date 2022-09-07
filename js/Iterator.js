const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//.forEach()用于对数组中的每个元素执行相同的代码，但不更改数组并返回undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// .filter()检查数组中的每个元素以查看它是否满足某些条件并返回一个新数组，其中包含为条件返回真值的元素。
const longCities = cities.filter(city => city.length > 7);

// .reduce()遍历数组并获取元素的值并返回单个值
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// .map()对数组中的每个元素执行相同的代码并返回一个包含更新元素的新数组。
const smallerNums = nums.map(num => num - 5);

// every()方法测试数组中的所有元素是否通过提供的函数实现的测试。它返回一个布尔值。
nums.every(num => num < 0);

//.findIndex()返回满足回调函数条件的数组的第一个元素的索引。-1如果数组中没有任何元素满足条件，则返回。
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3