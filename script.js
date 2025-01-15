
// Type: JavaScript

var predictPartyVictory = function(senate) {
    const republicanQueue = [];
    const democratQueue = [];

    // Populate queue with indicies
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') republicanQueue.push(i);
        else democratQueue.push(i);
    }

    const n = senate.length;

    // processing the queues
    while (republicanQueue.length > 0 && democratQueue.length > 0) {
        const rIndex = republicanQueue.shift();
        const dIndex = democratQueue.shift();

        if (rIndex < dIndex) {
            republicanQueue.push(rIndex + n);
        } else {
            democratQueue.push(dIndex + n);
        }
    }

    return republicanQueue.length > 0 ? "Republican" : "Democrat";

}

console.log(predictPartyVictory("RD")); // "Republican"
console.log(predictPartyVictory("DR")); // "Democrat"
console.log(predictPartyVictory("RDR")); // "Republican"
console.log(predictPartyVictory("RDD")); // "Democrat"
console.log(predictPartyVictory("DDR")); // "Democrat"
console.log(predictPartyVictory("RDR")); // "Republican"