console.log('Задача 2')
let avgFunc = function(list){
    let sum = list.reduce((total, value) => total + value, 0);
    let lenght = list.length
    return sum / lenght
};

listOne = [1, 5, 12, 4, 3]
listTwo = [2, 3, 4, 5, 6, 7, 8, 9, 10]
listThree = [3, 10, 17]


console.log(avgFunc(listOne));
console.log(avgFunc(listTwo));
console.log(avgFunc(listThree));
