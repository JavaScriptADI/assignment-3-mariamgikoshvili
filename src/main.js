// write your code in this directory


// davaleba 1

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// davaleba 2

for(let i = 10; i >= 1; i--){
    console.log(i)
}

// davaleba 3
let sum = 0; /*გამოცხადდა ცვლადი*/
for (let i = 1; i <= 50; i++) { /*გავივლით რიცხვებს 1 დან 50ის ჩათვლით*/
    sum += i; /*მივუმატებთ გამოცხადებულ ცვლადს*/
}
console.log(sum); /*დაიბეჭდება საბოლოო ჯამი */

// davaleba 4
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

// 5 იტერაციაა - დაიბეჭდება 0, 2, 4, 6, 8

// davaleba 5
// What does the break statement do? Explain and give an example.

// შეწყვეტს ციკლს
for (let i = 0; i < 10; i += 2) {
    if(i==6) break
    console.log(i);  
}

// davaleba 6
// What does the break statement do? Explain and give an example.

// შეწყვეტს ციკლს
for (let i = 0; i < 10; i += 2) {
    if(i==6) continue
    console.log(i);  
}

// აქ გამოტოვებს 6 ს


// davaleba 7
let i ;

while (true){
    i = Math.random() * 100
    console.log(i)
    if (i == 27) break
}

// davaleba 8

for(let i = 1; i<=100; i++){
    if(i%15==0){
        console.log('FizzBuzz')
    }
    else if(i%3==0){
        console.log('Fizz')
    }
    else if(i%5==0){
        console.log('buzz')
    }
    else {
       console.log(i)
    }
}



// davaleba 9

for(let i = 0; i<100; i++){
    console.log(Math.floor(math.random() * 101)+1)
}

// davaleba 10

// write a program that prints the sum of all even numbers between 1 and 1000.

