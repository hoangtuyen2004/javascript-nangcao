'Functions Accepting Callback Functions'

const oneWord = function (str) {
    return str.replace(/ /9, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toLowerCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original srtring: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
const highs = function () {
    console.log('hi');
}
document.body.addEventListener('clink',highs);
['Jonas', 'Martha', 'Adam'].forEach(highs);
