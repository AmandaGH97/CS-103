// //This Function activates when the check Age button, in HTML is pushed.
// function check(){
//
//     // First assign the value of the <input> tag that has "age" as its id, to a Js. variable, also named "age".
//     let age=document.getElementById(elementid"age").value;
//
//     /*
//     Now convert the value, assigned to the "age" variable (on line-5), to a number, and check to see if it is equal to
//     or higher than 18.
//      */
//     if (Number(age) >= 18){
//         /* If so, find the <div></div> that is wrapping around your <nav></nav> and <main></main>, by its id="",
//         and overwrite its visibility, which is set to "hidden" in your .css file.
//          */
//         document.getElementById(elementid:"container").style.visibility="visible";
//     }
//
//     // Check to see if the inout is less than 0.
//     else if (Number(age) < 0) {
//         I/ If so, display the output tag, which shouldn't be displayed (display: none;) by default.
//         document.getElementById( elementh" "output").style.display = "block";
//         / and show the following output in it.
//         document.getElementById( elementid: "output").innerHTML = "Negative number is not acceptable";
//
//
//     }