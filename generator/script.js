function copyText(){
 var answer = document.getElementById("did").innerHTML;
 navigator.clipboard.writeText(answer);
 alert("скопировано: " + answer);
}
function generate() {
 return 'xxxxxxxx-xxxx-3xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
 function(c) {
 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
 return v.toString(16);
 });
}
function change(){
let p = document.getElementById("did");
p.innerHTML = generate();
}
function reload(){change();}
