let btns = document.querySelectorAll("button");



for(let i=0;i<btns.length;i++){
    btns[i].classList.add("style");
}


let ac = document.querySelector(".btn4");
let screen = document.querySelector(".screen");

ac.addEventListener("click",function(){
    console.log(" data cleared!");
    screen.value = "";
})

let lpar = document.querySelector(".btn1");
 lpar.addEventListener("click",function(){
    screen.value = screen.value + "(";
 })

 let rpar = document.querySelector(".btn2");
 rpar.addEventListener("click",function(){
    screen.value = screen.value + ")";
 })

let seven = document.querySelector(".btn5");
let eight = document.querySelector(".btn6");
let nine = document.querySelector(".btn7");
let four = document.querySelector(".btn9");
let five = document.querySelector(".btn10");
let six = document.querySelector(".btn11");
let one = document.querySelector(".btn13");
let two = document.querySelector(".btn14");
let three = document.querySelector(".btn15");
let zero = document.querySelector(".btn17");

let Numbtn = [one,two,three,four,five,six,seven,eight,nine,zero];

for(let i=0;i<Numbtn.length;i++){
    Numbtn[i].addEventListener("click",function(){
        screen.value = screen.value + Numbtn[i].innerText;
    })
};

let point = document.querySelector(".btn18");

point.addEventListener("click",function(){
    screen.value = screen.value + ".";
})

let plus = document.querySelector(".btn20");

plus.addEventListener("click",function(){
    screen.value = screen.value + "+";

})

let minus = document.querySelector(".btn16");

minus.addEventListener("click",function(){
    screen.value = screen.value + "-";
})


let multiply = document.querySelector(".btn12");

multiply.addEventListener("click",function(){
    screen.value = screen.value + "*";
})


let divide = document.querySelector(".btn8");

divide.addEventListener("click",function(){
    screen.value = screen.value + "/";

})

let percentage = document.querySelector(".btn3");

percentage.addEventListener("click",function(){
    screen.value = screen.value + "%"
    
})


let equal = document.querySelector(".btn19");

function equalTo(){
    try{screen.value = eval(screen.value);
    }
    catch(error){
        console.log("error");
        screen.value = "error";
    }

}

equal.addEventListener("click",equalTo);

