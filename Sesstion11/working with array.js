const list = ["😟","😊", "😘", "d", "b"];
list.find(function(char){
    return char === "😊";
});

list.splice(0, 2);
console.log(list);

// push và Splice
