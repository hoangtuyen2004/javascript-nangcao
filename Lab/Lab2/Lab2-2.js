const input = `underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure`;

const events = input.split("\n");

const convertToCamelCase = (event) => {
    const words = event.split("_");
    return words[0] + words.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
};

const results = events.map(convertToCamelCase);

results.forEach((result) => {
    console.log(`${result} ✅`);
});
