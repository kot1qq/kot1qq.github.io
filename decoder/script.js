function re(){
 document.getElementById("decoded").value = atob(document.getElementById("toDecode").value)
}
setInterval(re, 0);
function co(){
if(!document.getElementById("toDecode").value){
 return;
} else {
 const x = document.getElementById("decoded").value;
 navigator.clipboard.writeText(x);
 alert(`Copied:\n${x}`)
}
}
function redirect(){
 location.href = '/encoder';
}
function clr(){
 document.getElementById("toDecode").value = "";
}