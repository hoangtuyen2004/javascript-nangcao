


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Wiegl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1:1.33,
        x:3.25,
        team2:6.5,
    },
};


// Lay ra doi bong team 1;
const teamMot = game.team1;
const teamHai = game.team2;

// console.log(team1);
// console.log(team2);

// Object destructoring -- Phân dã dữ liệu
// 
const {team1,team2, players} = game;

// Array destructoring -- phá vỡ cấu trúc mảng
const [team1Players, team2Players] = players;

console.log({team1Players});

// Modern operator - Toán tử 
/// ... :-Toán tử '...';
// The rest parameter - Các tham số còn lại
const [gk,...fieldPlayers] = team1Players;
console.log(gk, fieldPlayers);

// The spread operator - toán tử trải
const reserve = ["Coutinho", "Perisic"];
const team1AllPlayers = [...team1Players,...reserve];
console.log(team1AllPlayers);
