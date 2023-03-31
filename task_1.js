console.log('Задача 1')
list = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']

for (item in list){
    if (list[item] === 'молоко'){
        console.log('хорошо');
    }
    else
        console.log('плохо');
};
