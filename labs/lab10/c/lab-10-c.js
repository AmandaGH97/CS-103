const arr = [];

function add() {
    arr.push(document.getElementById("input").value);
    document.getElementById("input").value = "";
}

function reveal() {
    let output = document.getElementById("output");
    for (let i = 0; i < arr.length; i = i + 1) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        output.appendChild(li);
    }
}
