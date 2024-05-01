let counter = 0;

function checkCounter() {
    counter++;
    if (counter % 5 === 0) {
        console.log("Amanda");
    }
}

function printInput() {
    const input = document.getElementById("inputField").value;
    const outputElement = document.getElementById("output");
    outputElement.innerText = `Input value: ${input}`;
}