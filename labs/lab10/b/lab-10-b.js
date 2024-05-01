let first;
let second;
let result;

function power(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;

    let temp=1;

for (let limit=0; limit<Number(second); limit=limit+1){

    temp=Number(first)*temp
}

    document.getElementById("output").innerHTML=String(temp);

}

function clearOut(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=" ";
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}

function add(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
  result = document.getElementById("output").innerHTML=Number(first)+Number(second);
    if(result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black"
    }
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
function subtract()
    {first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)-Number(second);
        if(result < 0) {
            document.getElementById("output").style.color = "red";
        } else {
            document.getElementById("output").style.color = "black"
        }
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";}
function multiply(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    result = document.getElementById("output").innerHTML=Number(first)*Number(second);
    if(result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black"
    }
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
function divide(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    result = document.getElementById("output").innerHTML=Number(first)/Number(second);
    if(result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black"
    }
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}

