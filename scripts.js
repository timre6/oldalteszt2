let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");

let rowcounter=0;

addBtn.addEventListener("click", function(){
    let newItem = document.querySelector("#new-item").value;
    let li = document.createElement("li");
    li.innerHTML = newItem + "<span><img id='check_mark"+rowcounter+"' src='tick.svg' alt='check-mark'>" + " <img id='delete_icon' src='delete_icon.svg' alt='Delete Icon'></span>";
    list.appendChild(li);
    newItem = "";

    let check_mark = document.querySelector("#check_mark"+rowcounter);
    ++rowcounter;
    check_mark.addEventListener("click", function(){
        this.parentElement.parentElement.style.opacity = "0.4";
        this.style.background = "green";
    })
})




// $('label').click(() => {
//     let newItem = $('input').text();
//     $('ul').append('<li></li>');
//     $('li:last').text(newItem);
//     $('input').text('');
// });