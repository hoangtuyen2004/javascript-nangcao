

const  weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sta', 'sun']
const  openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focacia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object lit terals
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    }
}

const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',    
])
console.log(ordersSet);

// console.log(new Set('John Smith'));
console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Rispttp');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('jonasschmadtmann').size);