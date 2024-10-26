// Задание 6.6.3
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Введите число ', number => {
    
    number = Number(number);
    const arr = [0];
    for(let i=1; i < number+1; i++){
        arr.push(i);
    }
    console.log(arr);

    readline.close();
  });