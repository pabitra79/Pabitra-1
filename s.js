const randomcolor = function(){
    const hex = "0123456789abcdef";
    let color = "#";
    for(let i=0;i<6;i++){
color+=hex[Math.floor(Math.random()  * 16)];
    }
    return color;
}
let breaktimebro;
const startchangecolor = function(){
    breaktimebro = setInterval(contimouslychangethecolor,1000);
    function  contimouslychangethecolor(){
    document.body.style.backgroundColor=randomcolor();}
};
const stopchangecolor = function(){
    clearInterval(breaktimebro);
};
document.querySelector("#start").addEventListener("click",startchangecolor);

document.querySelector("#stop").addEventListener("click",stopchangecolor);
