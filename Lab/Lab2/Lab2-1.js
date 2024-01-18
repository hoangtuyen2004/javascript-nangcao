


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

// Tạo mảng các sự kiện
const events = [
    [1, "ghi bàn"],
    [1, "thay người"],
    [20, "nhận thẻ đỏ"]
  ];
  
  // Tạo mảng kết hợp
  const eventsDict = {};
  for (const [minute, event] of events) {
    eventsDict[minute] = event;
  }
  
  // In mảng kết hợp
  console.log(eventsDict);
  
//