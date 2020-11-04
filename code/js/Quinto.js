function home1() 
{
    dato.style = "background: rgb(60, 184, 60);"
}
function home2() 
{
    var t2= document.getElementById("t2");
    t2.style="border: 5px solid ; background: green; text-align: justify;";
    
    
}
function home3() 
{
    var t3= document.getElementById("t3");
    t3.style="border: 5px solid #000000; background: yellow; text-align: justify;";
}
function suma() {
    var su = document.getElementById("su");
    su.innerHTML = "<span>+</span> ";
}
function resta() {
    var su = document.getElementById("re");
    su.innerHTML = "<span>-</span> ";
}
function multiplicacion() {
    var su = document.getElementById("mu");
    su.innerHTML = "<span>*</span> ";
}
function division() {
    var su = document.getElementById("di");
    su.innerHTML = "<span>/</span> ";
}