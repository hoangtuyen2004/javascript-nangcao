// TRuyền đối số vào hàm
//Với hình thức truyền theo giá trị và truyền theo tham sốsố

// khai báo hai biến dư liệu số hiệu chuyến bay và thông tin khách hàng
const flight = 'LH234';
const jonas = {
    name:'Jonas Schmedtmann',
    passport: 23456789,
};

// Hàm checkIn với hai đối số (flightNum, passenger)
const checkIn = function (flightNum, passenger) {
    // Bên trong hàm gán các giá trị mới cho biến 
    flightNum = 'LH999';
    passenger.name = 'Mr' + passenger.name;

    if (passenger.passport === 23456789) {
        alert('Checked in');
    }
    else {
        alert('Wrong passport');
    }
};

checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

// flightNum = flight;

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight,jonas);
