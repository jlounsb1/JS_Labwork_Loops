let number =6;
for (i=2; i<= number-1; i++){
    while (number%i==0) {
        number++;
    }
}   
console.log(number);



const num = 11;

mainloop: for (let i=num; i<100; i++) {
    if(i===1) continue;
    for(let j=num; j>1; j--) {
        if(i%j==0) continue mainloop;
        //this part starts with a yes, so 11/11 does =0, then i changes to 12 and j changes to 10.
    }

    console.log(i);
    break;
}