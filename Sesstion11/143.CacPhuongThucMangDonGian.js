'use strict';


// const account1 = {
//     owner: 'Jonas Schmedtmann',
//     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1111,
// };

// const account2 = {
//     owner: 'Jessica Davis',
//     movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 2222,
// };

// const account3 = {
//     owner: 'Steven Thomas Williams',
//     movements: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 3333,
// };

// const account4 = {
//     owner: 'Sarah Smith',
//     movements: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// const labelWelcom = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelance = document.querySelector('.balance_value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelAumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const currencies = new Map([
//     ['USD','United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



///////////////////////////

let arr = ['a','b','c','d','e'];

//SLICE
// [Mảng].slice(tsbd,tskt);
console.log(arr.slice(2));//-> ['c','d','e'] 
console.log(arr.slice(2,4));//-> ['c','d']
console.log(arr.slice(-2));//mảng sẽ lấy ngược về cuỗi-> ['d','e'];
console.log(arr.slice(-1));//->['e'];
console.log(arr.slice(1,-2));//->['b','c']
console.log(arr.slice());//-> in ra cả mảng
console.log([...arr]);

// SPLICE--Cắt mảng gốc(Xóa phần tử mảng)
// [Mảng].splice(tsbd,tskt);
// console.log(arr.splice(2));//->['c','d','e'] 
console.log(arr);//-> ['a','b']
arr.splice(-1);
console.log(arr);//->['a','b','c','d']
arr.splice(1,2);
// console.log(arr);->['a','d']

// REVERSE->đảo ngược
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());//-> ['f','g','h','i','j'];
console.log(arr);// -> ['f','g','h','i','j'];

// CONCAT -> Được sử dụng để kết nối hai mảng(Không thay đổi mảng ban đầu)
const letters = arr.concat(arr2);
console.log(letters); // ->['a','b','c','d','e','f','g','h','i','j']
console.log(...arr, ...arr2);

// JOIN -ghép mảng
console.log(letters.join(' - '));

