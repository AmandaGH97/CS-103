let first;
let second;

function add(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)+Number(second);
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
function subtract()
    {first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)-Number(second);
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";}
function multiply(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)*Number(second);
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}
function divide(){
    first=document.getElementById("input-1").value;
    second=document.getElementById("input-2").value;
    document.getElementById("output").innerHTML=Number(first)/Number(second);
    document.getElementById("input-1").value = "";
    document.getElementById("input-2").value = "";
}


