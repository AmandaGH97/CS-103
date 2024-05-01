// getting element by class
let items = document.getElementsByClassName('carousel-item');

// starting from the first item
let current_item = 0;

// hide all items not in use
for(let i = 0; i < items.length; i++){
    items[i].style.display = "none";
}
items[current_item].style.display = "flex";

//buttons :)
let btn1 = document.getElementById('left');
let btn2 = document.getElementById('right');

btn1.addEventListener('click', function () {
    items[current_item].style.display = "none";
    current_item--;
    if (current_item < 0){
        current_item = items.length - 1;
    }
    items[current_item].style.display = "flex";
});

btn2.addEventListener('click', function () {
    items[current_item].style.display = "none";
    current_item++;
    if (current_item >= items.length){
        current_item = 0;
    }
    items[current_item].style.display = "flex";
});
