const arr = [1,2,3,4,5];

arr.forEach((value, index) =>  {
    console.log(`${index}: ${value}`);

});

arr.forEach(a => console.log(a));
arr.forEach((a,index) => console.log(index,a));