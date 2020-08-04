function double(number) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, Math.floor(Math.random()*100));
    }).then(function() {
        console.log(number*2);
    });
}

async function fiveTimes() {
    for (let i = 0; i <= 5; i++) {
        const i = await double(Math.floor(Math.random()*100));
    }    
}

// fiveTimes();

function doubleSum(first, second) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, Math.floor(Math.random()*100));
    }).then(function() {
        return first*2 + second;
    });
}

async function fourTimes() {
    let a = await doubleSum(1, 1);
    console.log(a);

    a = await doubleSum(1, a);
    console.log(a);

    a = await doubleSum(1, a);
    console.log(a);

    a = await doubleSum(1, a);
    console.log(a);    
}

// fourTimes();