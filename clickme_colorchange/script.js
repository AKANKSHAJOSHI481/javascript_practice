const array1 = ["yellow" ,"green" ,"yellowgreen","blue" ,"maroon","violet"];
const random = Math.round(Math.random()*5);

function Colorchange(){
    document.getElementById("tochange").innerHTML = array1[random];
    document.getElementById("container").style.backgroundColor = array1[random];
}

console.log("AKanksha")