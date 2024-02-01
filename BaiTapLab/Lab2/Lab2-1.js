


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
const log = [
    [1, "⚽ ghi bàn"],
    [5, "thay người"],
    [20, "🟧 nhận thẻ đỏ"],
    [64, "🟨 Thẻ vàng"],
  ];

const action = [
    'Thay người',
    '⚽ Ghi bàn',
    '🟧 Nhận thẻ đỏ',
    '🟨 Nhận thẻ vàng',
];

//   dùng hàm map để chuyển đổi 
const events = log.map((event=>({
    key: event[0],
    value: event[1],
})));

// Hiển thị
// console.log(events);


// 1>
const events_1 = [
    { key: 17, value: "⚽ ghi bàn" },
    { key: 25, value: " Thay người" },
    { key: 30, value: "🟨 Thẻ vàng" },
    { key: 38, value: "⚽ ghi bàn" },
    { key: 45, value: "🟨 Thẻ vàng" },
    { key: 55, value: " Thay người" },
    { key: 60, value: "🟧 Thẻ đỏ" },
    { key: 64, value: "🟨 Thẻ vàng" },
    { key: 70, value: "⚽ ghi bàn" },
    { key: 80, value: " Thay người" },
  ];
  
  

  const uniqueEvents = events_1.reduce((acc, event) => {
    if (!acc.includes(event.value)) {
      acc.push(event.value);
    }
    return acc;
  }, []);
  
  console.log(uniqueEvents); // ['⚽ Ghi bàn', ' Thay người', '🟨 Thẻ vàng', '🟧 Thẻ đỏ']
  
// 2>
  
  const eventsWithoutYellowCard64 = events.filter((event) => event.minute !== 64);
  
  console.log(eventsWithoutYellowCard64); //

// 3>

const totalEvents = events.length;
const totalMinutes = 90;
const averageEventsPerMinute = totalEvents / totalMinutes;

console.log(`1 sự kiện xảy ra, trung bình mỗi ${averageEventsPerMinute} phút`); // Sự kiện sảu ra trung bình một thời gian

// 4>
const event_all = events.concat(events_1);
for (const event of event_all) {
    const half = event.key < 45 ? "HIỆP MỘT" : "HIỆP HAI";
    console.log(`[${half}] Phút ${event.key}: ${event.value}`);
}

