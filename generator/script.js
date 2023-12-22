function redirect(){location.href = '/generator2';}
function copy(){
 var a = document.getElementById("did").innerHTML;
 navigator.clipboard.writeText(a);
 alert("Скопировано: " + a);
}
function generate(){
 return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,
 function(c) {
 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
 return v.toString(16);
 });
}
function change(){
let p = document.getElementById("did");
p.innerHTML = generate().toUpperCase();
}
function reload(){change();}
