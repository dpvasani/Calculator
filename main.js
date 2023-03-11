const displaytext = document.getElementById("display-text");
const onebtn = document.querySelector(".one")
const twobtn = document.querySelector(".two")
const threebtn = document.querySelector(".three")
const fourbtn = document.querySelector(".four")
const fivebtn = document.querySelector(".five")
const sixbtn = document.querySelector(".six")
const sevenbtn = document.querySelector(".seven")
const eightbtn = document.querySelector(".eight")
const ninebtn = document.querySelector(".nine")
const zerobtn = document.querySelector(".zero")
const decimalbtn = document.querySelector(".decimal")
const resetbtn = document.querySelector(".reset")
const equalsbtn = document.querySelector(".equals")
const addbtn = document.querySelector(".addbtn")
const subtractbtn = document.querySelector(".subtractbtn")
const multiplybtn = document.querySelector(".multiplybtn")
const dividebtn = document.querySelector(".dividebtn")
const delbtn = document.querySelector(".del")
let oprandone = null;
let oprandtwo = null;
let operator = null;
onebtn.addEventListener("click",displayNumber)
twobtn.addEventListener("click",displayNumber)
threebtn.addEventListener("click",displayNumber)
fourbtn.addEventListener("click",displayNumber)
fivebtn.addEventListener("click",displayNumber)
sixbtn.addEventListener("click",displayNumber)
sevenbtn.addEventListener("click",displayNumber)
eightbtn.addEventListener("click",displayNumber)
ninebtn.addEventListener("click",displayNumber)
zerobtn.addEventListener("click",displayNumber)
decimalbtn.addEventListener("click",displayNumber)
decimalbtn.addEventListener("click",displayNumber)
resetbtn.addEventListener("click",clearDisplay)
equalsbtn.addEventListener("click",showresult)
delbtn.addEventListener("click",cleardigit)
addbtn.addEventListener("click",operate)
subtractbtn.addEventListener("click",operate)
multiplybtn.addEventListener("click",operate)
dividebtn.addEventListener("click",operate)

function clearDisplay(){
    document.querySelector(".reference").innerHTML = ""
    displaytext.innerHTML = "";
    oprandone = null;
    oprandtwo = null;
    operator = null;
}

function displayNumber(event){
    if((displaytext.innerHTML).length < 10){
        displaytext.innerHTML += event.target.value;
        document.querySelector(".reference").innerHTML += event.target.value;
    }
    else{
        alert("only 10 inputs supported")
    }
}

function operate(){
    oprandone = parseFloat(displaytext.innerHTML)
    if (operator === null && oprandone) {
        displaytext.innerHTML += event.target.value;
        operator = event.target.value;
        document.querySelector(".reference").innerHTML += event.target.value
        oprandone = parseFloat(displaytext.innerHTML)
        displaytext.innerHTML = "";
    }else{
        alert("only one operator")
    }
}

function cleardigit(){
    if(displaytext.innerHTML){
        displaytext.innerHTML = (displaytext.innerHTML).slice(0,-1)
        document.querySelector(".reference").innerHTML = (displaytext.innerHTML).slice(0,-1)
    }
}

function showresult(){

    oprandtwo = parseInt(displaytext.innerHTML)
    let result = null
    if(operator == "+"){
         result = oprandone + oprandtwo;
        displaytext.innerHTML = result;
        document.querySelector(".reference").innerHTML += "=";
    }else if(operator === "-"){
         result = oprandone - oprandtwo;
        displaytext.innerHTML = result;
    }else if(operator === "*"){
         result = oprandone * oprandtwo;
        displaytext.innerHTML = result;
    }else if(operator === "/"){
         result = oprandone / oprandtwo;
        result = result.toFixed(2)
        displaytext.innerHTML = result;
    }
    oprandone = result
    oprandtwo = null
    operator = null
}

const element = document.querySelector(".element")
let count = 1

element.addEventListener("click",translate)


function translate(){

    if(count<3){
        element.style.transform += "translate(20px)";
        element.dataset.value = parseInt(element.dataset.value)+1
        const newvalue = parseInt(element.dataset.value)
        theme(newvalue)
    }else{
        element.style.transform = "translate(0px)";
        count = 0
        element.dataset.value = 1        
        const newvalue = parseInt(element.dataset.value)
        theme(newvalue)
    }
    count++
}

const r = document.querySelector(":root")

function theme(value){
    if(value === 1){
        r.style.setProperty("--box-shadow","5px 5px 10px #e6e6e6,-5px -5px 10px #ffffff")
        r.style.setProperty("--box-bg","#ffffff")
        r.style.setProperty("--text-color","black")
        r.style.setProperty("--btn-bg","#ffffff")
        r.style.setProperty("--accent-bg","#EE4266")
        r.style.setProperty("--equals-bg","#0EAD69")
        r.style.setProperty("--hover-color","#3BCEAC")
        r.style.setProperty("--btn-text-color","black")
    }
    if(value === 2){
        r.style.setProperty("--box-shadow","5px 5px 10px #7db2e4,-5px -5px 10px #99daff")
        r.style.setProperty("--box-bg","#8bc6fd")
        r.style.setProperty("--text-color","white")
        r.style.setProperty("--btn-bg","#8bc6fd")
        r.style.setProperty("--accent-bg","#EF476F")
        r.style.setProperty("--equals-bg","#06D6A0")
        r.style.setProperty("--hover-color","#FFD166")
        r.style.setProperty("--btn-text-color","black")
    }
    if(value === 3){
        r.style.setProperty("--box-shadow","5px 5px 10px #363b41,-5px -5px 10px #42494f")
        r.style.setProperty("--box-bg","#3c4248")
        r.style.setProperty("--text-color","white")
        r.style.setProperty("--btn-bg","#3c4248")
        r.style.setProperty("--accent-bg","#EE4266")
        r.style.setProperty("--equals-bg","#0EAD69")
        r.style.setProperty("--hover-color","#577399")
        r.style.setProperty("--btn-text-color","white")
    }
}