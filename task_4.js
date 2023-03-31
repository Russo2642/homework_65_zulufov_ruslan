console.log('Задача 4')
let name = 'Дональд';
let color = 'белый';
let age = 1;
let toStr = (name, color, age) => console.log(name + ', ' + color + ', ' + age);
let say = () => console.log('кря кря')

let duck = {name, color, age, toStr, say};

duck.toStr(name, color, age)
duck.say()