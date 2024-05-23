for (i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0) {
        console.log('FizzBuzz');
    } else if  (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else console.log(i);
    
}

//Exercise 1: FizzBuzz - If a number is divisible by 3 and 10 log Fizzbuzz, if just by 3 log Fizz, if just 5 Buzz, otherwise just log the number.

