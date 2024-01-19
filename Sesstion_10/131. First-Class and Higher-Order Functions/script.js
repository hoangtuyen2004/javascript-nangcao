// first-class function
const myFunction = function () {
    console.log("Hello, world!");
  };
  
  const myVariable = myFunction;//Hàm myFunction có thể được gán cho biến
  
  myFunction(); // "Hello, world!"
  myVariable(); // "Hello, world!"

  
// higher-order function
const filter = function (arr, fn) {
    const results = [];
    for (const item of arr) {
      if (fn(item)) {
        results.push(item);
      }
    }
    return results;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  
  const evenNumbers = filter(numbers, function (num) {
    return num % 2 === 0;
  });
  
  console.log(evenNumbers); // [2, 4]
  