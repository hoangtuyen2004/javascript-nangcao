// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// // -> [Arr].reduce();
// console.log(sum); // Output: 15


// const arr = [3,4,6,7,8,9];
// arr.reduce(function (accumulator, item) {
//     return accumulator + item;
// })


const array1 = [1, 2, 3, 4]; //[Arr]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
// [Arr].reduce((<Giá trị kết quả>, <Giá trị mảng>) => <giá trị kết quả>+<giá trị mảng>,<giá trị ban đầu>)

// console.log(sumWithInitial);


var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ];

    // dùng hàm reduce
    // 1. trả về một đối tượng
    // Số lượng người vote từ 20-30 tuổi
    // Số lượng người vote từ 30-40 tuổi
    // Số lượng người vote từ 40 trở lên

// 1>

const countVoters_1 = voters.reduce((accumulator, currentValue) => {
    if (currentValue.age >= 20 && currentValue.age < 30 && currentValue.voted) {
      accumulator.count++;
    }
    return accumulator;
  }, {count: 0});
  
  console.log(countVoters_1); // {count: #}

//   2>

const countVoters_2 = voters.reduce(function(aLator,cValue){
    if (cValue.age>=30 && cValue.age<40 && cValue.voted) {
        aLator.count++;
    }
    return aLator;
},{count:0})
console.log(countVoters_2);

//  3>

const countVoters_3 = voters.reduce(function(accumuLator, currentValue){
    if (currentValue.age>=40 && currentValue.voted) {
        accumuLator +=1;
    }
    return accumuLator
}, 0);
console.log(countVoters_3);


