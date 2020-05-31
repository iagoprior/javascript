const array = [0,1,2,3,4,5];

array.forEach(item => {
    if(item %2 === 0) {
        console.log(`O número ${item} é par`);

    }else{
        console.log(`O ńúmero  ${item} é impar`);
    }
});


array.forEach(item => {
    if(item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    }else if(item % 3 === 0){
        console.log(`O número ${item} é divisível por 3`);
    }else if(item % 5 === 0){
        console.log(`O número ${item} ´e divisível por 5`);
    }
})