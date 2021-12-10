// Lösung b) 
for (let i = 0; i < events.length; i++) {
    console.log(events[i][0], events[i][1]);
}
// Lösung d) 
function interpretSearch(array, interpret) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == interpret) {
            return true;
        }
    }
    return false;
}
console.log(interpretSearch(events, "Bee Gees"));

// Lösung e) 
let i = 1;
let fakultaet = 1;
function factorial(n = 4) {
    while (i <= n) {
        fakultaet *= i;
        i++;
    }
    console.log("Fakultät= ", fakultaet);
}
