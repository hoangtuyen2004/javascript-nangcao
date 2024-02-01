function checkDogs(dogsJulia, dogsKate) {
    // 1. Sao chép mảng của Julia
    const dogsJuliaCopy = JSON.parse(JSON.stringify(dogsJulia));
  
    // 2. Xóa 2 phần tử đầu và 2 phần tử cuối của mảng Julia
    dogsJuliaCopy.splice(0, 2);
    dogsJuliaCopy.splice(-2, 2);
  
    // 3. Tạo mảng kết hợp dữ liệu của Julia và Kate
    const combinedDogs = [...dogsJuliaCopy, ...dogsKate];
  
    // 4. Sử dụng map để kiểm tra tuổi của mỗi con chó và trả về mảng kết quả
    return combinedDogs.map((dogAge, index) => {
      if (dogAge >= 3) {
        return `Chó số ${index + 1} là người lớn và ${dogAge} tuổi`;
      } else {
        return `Chó số ${index + 1} vẫn là chó con `;
      }
    });
  }

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const results = checkDogs(dogsJulia, dogsKate);

// console.log(results);

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const results = checkDogs(dogsJulia, dogsKate);

console.log(results);

// 3.3

function calcAverageHumanAge(ages) {
    // 1. Tính tuổi của chó theo tuổi của người
    const humanAges = ages.map((dogAge) => {
      if (dogAge <= 2) {
        return dogAge * 2;
      } else {
        return 16 + dogAge * 4;
      }
    });
  
    // 2. Loại trừ những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi
    const adultHumanAges = humanAges.filter((humanAge) => humanAge >= 18);
  
    // 3. Tính tuổi trung bình của các chú chó trưởng thành
    if (adultHumanAges.length === 0) {
      return 0;
    }
    const sum = adultHumanAges.reduce((acc, age) => acc + age, 0);
    const averageHumanAge = sum / adultHumanAges.length;
  
    // 4. Trả về tuổi trung bình
    return averageHumanAge;
  }

//   
const ages = [5, 2, 4, 1, 15, 8, 3];

const averageHumanAge = calcAverageHumanAge(ages);

console.log(averageHumanAge); // 34

// 3.4

function analyzeDogs(dogs) {
    // 1. Thêm thuộc tính recommendedFood vào mỗi object
    dogs.forEach((dog) => {
      dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
    });
  
    // 2. Tìm ra chú chó của Sarah và in ra console xem chú chó đó ăn quá nhiều hay quá ít
    const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
    const sarahsDogEatingStatus = sarahsDog.curFood > sarahsDog.recommendedFood ? "ăn quá nhiều" : "ăn quá ít";
    console.log(`Chú chó của Sarah ${sarahsDogEatingStatus}`);
  
    // 3. Tạo mảng chứa chủ của những chú chó ăn quá nhiều và ăn quá ít
    const ownersEatTooMuch = [];
    const ownersEatTooLittle = [];
    dogs.forEach((dog) => {
      if (dog.curFood > dog.recommendedFood) {
        ownersEatTooMuch.push(...dog.owners);
      } else if (dog.curFood < dog.recommendedFood) {
        ownersEatTooLittle.push(...dog.owners);
      }
    });
  
    // 4. In ra chuỗi thông báo về chủ của những chú chó ăn quá nhiều và ăn quá ít
    console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
    console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);
  
    // 5. Kiểm tra xem có chú chó nào có khẩu phần ăn chính xác với khẩu phần ăn khuyến nghị
    const hasExactRecommendedFood = dogs.some((dog) => dog.curFood === dog.recommendedFood);
  
    // 6. Kiểm tra xem có chú chó nào có khẩu phần ăn ở mức hợp lý (không >10% hoặc <10% mức đề nghị)
    const hasFoodWithinRange = dogs.some((dog) => {
      const lowerBound = dog.recommendedFood * 0.9;
      const upperBound = dog.recommendedFood * 1.1;
      return dog.curFood > lowerBound && dog.curFood < upperBound;
    });
  
    // 7. In ra tất cả các chú chó có khẩu phần ăn hợp lý
    const dogsWithReasonableFood = dogs.filter((dog) => {
      const lowerBound = dog.recommendedFood * 0.9;
      const upperBound = dog.recommendedFood * 1.1;
      return dog.curFood > lowerBound && dog.curFood < upperBound;
    });
  
    // 8. Tạo mảng chứa các chú chó mới và sắp xếp theo khẩu phần ăn đề nghị theo thứ tự tăng dần
    const sortedDogs = dogs.slice().sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
  
    // In ra kết quả
    console.log(`Có chó có khẩu phần ăn chính xác: ${hasExactRecommendedFood}`);
    console.log(`Có chó có khẩu phần ăn hợp lý: ${hasFoodWithinRange}`);
    console.log("Danh sách chó có khẩu phần ăn hợp lý:");
    console.table(dogsWithReasonableFood);
    console.log("Danh sách chó được sắp xếp theo khẩu phần ăn đề nghị:");
    console.table(sortedDogs);
  }

//   
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  
  analyzeDogs(dogs);

  