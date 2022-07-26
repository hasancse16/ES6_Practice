
function Calculations(...number) {
    let sum = 0;
    for (let i of number) {
        sum = sum + i;
    }
    console.log(sum)
}

Calculations(1, 2, 3);