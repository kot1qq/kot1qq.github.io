function re(){
 document.getElementById("encoded").value = btoa(document.getElementById("toEncode").value)
}
setInterval(re, 0);
function co(){
if(!document.getElementById("toEncode").value){
 return;
} else {
 const x = document.getElementById("encoded").value;
 navigator.clipboard.writeText(x);
 alert(`Copied:\n${x}`)
}
}
function redirect(){
 location.href = '/decoder';
}
function clr(){
 document.getElementById("toEncode").value = "";
}