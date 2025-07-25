let title = document.querySelector(".title");
let turn = 'x';
let user1;
do {
    user1 = prompt("Enter your name (Player 1):");
} while (user1 === null || user1.trim() === "");

let valueuser1;
do {
    valueuser1 = prompt("Choose your char (x or o):");
} while (valueuser1 === null || valueuser1.trim() === "" || (valueuser1 !== "x" && valueuser1 !== "o"));

// اللاعب التاني بياخد الحرف العكسي تلقائي
let user2;
do {
    user2 = prompt("Enter your name (Player 2):");
} while (user2 === null || user2.trim() === "");

let valueuser2 = valueuser1 === "x" ? "o" : "x";
function proparties(num1,num2,num3){
        document.getElementById("item"+num1).style.background="#000";
        document.getElementById("item"+num2).style.background="#000";
        document.getElementById("item"+num3).style.background="#000";
        setInterval(function(){
            title.innerHTML +='.';
        },1000)
        setTimeout(function(){
            location.reload();
        },4000)
}
function winner() {
    for(let x = 1; x < 10; x++) {
        arr[x] = document.getElementById("item" + x);
    }
    
    // تحقق من الصفوف
    if(arr[1].innerHTML && arr[1].innerHTML == arr[2].innerHTML && arr[2].innerHTML == arr[3].innerHTML&&arr[2].innerHTML!='') {
        if(arr[1].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }
        proparties(1,2,3);
        return;
    }
    if(arr[4].innerHTML && arr[4].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[6].innerHTML&&arr[4].innerHTML!='') {
         if(arr[4].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }
        proparties(4,5,6);

        return;
    }
    if(arr[7].innerHTML && arr[7].innerHTML == arr[8].innerHTML && arr[8].innerHTML == arr[9].innerHTML&&arr[7].innerHTML!='') {
         if(arr[7].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }
        proparties(7,8,9);
        return;
    }
    
    // تحقق من الأعمدة
    if(arr[1].innerHTML && arr[1].innerHTML == arr[4].innerHTML && arr[4].innerHTML == arr[7].innerHTML&&arr[1].innerHTML!='') {
        if(arr[1].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }

        proparties(1,4,7);
        return;
    }
    if(arr[2].innerHTML && arr[2].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[8].innerHTML&&arr[2].innerHTML!='') {
        if(arr[2].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }

        proparties(2,5,8);
        return;
    }
    if(arr[3].innerHTML && arr[3].innerHTML == arr[6].innerHTML && arr[6].innerHTML == arr[9].innerHTML&&arr[3].innerHTML!='') {
        if(arr[3].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }
        proparties(3,6,9);
        return;
    }
    
    // تحقق من القطرين
    if(arr[1].innerHTML && arr[1].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[9].innerHTML&&arr[1].innerHTML!='') {
        if(arr[1].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }

        proparties(1,5,9);
        return;
    }
    if(arr[3].innerHTML && arr[3].innerHTML == arr[5].innerHTML && arr[5].innerHTML == arr[7].innerHTML&&arr[3].innerHTML!='') {
        if(arr[3].innerHTML==valueuser1){
            title.innerHTML = user1 + ' is winner';
        }else{
            title.innerHTML = user2 + ' is winner';
        }
        proparties(3,5,7);
        return;
    }
}

function game(id) {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == "") {
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if(turn === 'o' && element.innerHTML == "") {
        element.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }

    winner();
}
