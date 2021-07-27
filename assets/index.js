//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
const arr = [4, -2, 5, 19, -130, 0, 10]

function getMin(arrayOfNumbers) {
  let minNumber = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < minNumber) {
      minNumber = arrayOfNumbers[i];
    }
  }
  return minNumber;
}

function getMax(arrayOfNumbers) {
  let maxNumber = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > maxNumber) {
      maxNumber = arrayOfNumbers[i];
    }
  }
  return maxNumber;
}
//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
//=========(Math.random + Math.ceil/Math.floor/Math.round)==========
//Выведите на экран случайное целое число от 1 до 100 с помощью функции.
//Заполните массив 10-ю случайными целыми числами.

//concat
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = array1.concat(array2);

console.log(array3)

//reverse
const arrReverse = [1,2,3];
const reserved = arrReverse.reverse();

console.log(arrReverse)

//push
const arr123 = [1,2,3];
const push = arr123.push(4,5,6);

console.log(arr123)

//unshift
const arr456 = [1,2,3];
const unshift = [4,5,6];
arr456.unshift(4,5,6)

console.log(arr456)

//shift
const arrShift = ['js', 'css', 'jq'];
const shifted = arrShift.shift();

console.log(shifted)
console.log(arrShift)

//pop
const arrPop = ['js', 'css', 'jq'];
const popped = arrPop.pop();

console.log(popped)
console.log(arrPop)

//slice
const arrSlice = [1,2,3,4,5];
const sliced = arrSlice.slice(0,3)

console.log(sliced)

const sliced2 = arrSlice.slice(3,5)

console.log(sliced2)

//splice
const arrSplice1 = [1,2,3,4,5];
const spliced145 = arrSplice1.splice(1,2)

console.log(arrSplice1)

const arrSplice2 = [1,2,3,4,5];
const spliced2 = arrSplice2.splice(0,1);
const spliced3 = arrSplice2.splice(3,1);

console.log(arrSplice2)

const arrSplice3 = [1,2,3,4,5];
const spliced4 = arrSplice3.splice(3,0,'a', 'b', 'c')

console.log(arrSplice3)

const arrSplice4 = [1,2,3,4,5];
const spliced5 = arrSplice4.splice(1,0, 'a', 'b');
const spliced6 = arrSplice4.splice(6,0, 'c');
const spliced7 = arrSplice4.splice(8,0, 'e');

console.log(arrSplice4)

//sort
const arrSort = [3,4,1,2,7];
arrSort.sort();

console.log(arrSort)

//object.keys
