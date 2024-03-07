/*
* File: app.js
* Author: Hosszú Tamás
* Copyright: 2024, Hosszú Tamás
* Group: Szoft I/1/N
* Date: 2024-03-07
* Github: https://github.com/hosszutamas/
* Licenc: GNU GPL
*/
const aInput=document.querySelector("#a")
const bInput=document.querySelector("#b")
const cInput=document.querySelector("#c")
const dInput=document.querySelector("#d")
const areaInput=document.querySelector("#area")
const calcButton=document.querySelector("#calcButton")

calcButton.addEventListener('click',()=>{
    startCalc();
});

function startCalc() {
    const a=Number(aInput.value)
    const b=Number(bInput.value)
    const c=Number(cInput.value)
    const d=Number(dInput.value)
    const kerulet=Number((a+b+c+d)/2)
    const area=calcArea(a,b,c,d,kerulet)
    console.log("Terület",area)
    areaInput.value=area
}

function calcArea(a,b,c,d,kerulet) {
    return Math.sqrt(kerulet-a)*(kerulet-b)*(kerulet-c)*(kerulet-d)/2;
}



