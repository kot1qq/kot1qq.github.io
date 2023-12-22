// ген
function generate(){
 return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,
 function(c) {
 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
 return v.toString(16);
 });
}
// сетап
function change(){ let p = document.getElementById("did1"); p.innerHTML = generate().toUpperCase(); let p1 = document.getElementById("did2"); p1.innerHTML = generate().toUpperCase(); let p2 = document.getElementById("did3"); p2.innerHTML = generate().toUpperCase(); let p3 = document.getElementById("did4"); p3.innerHTML = generate().toUpperCase(); let p4 = document.getElementById("did5"); p4.innerHTML = generate().toUpperCase(); let p5 = document.getElementById("did6"); p5.innerHTML = generate().toUpperCase();let p6 = document.getElementById("did7"); p6.innerHTML = generate().toUpperCase();let p7 = document.getElementById("did8"); p7.innerHTML = generate().toUpperCase();let p8 = document.getElementById("did9"); p8.innerHTML = generate().toUpperCase();let p9 = document.getElementById("did10"); p9.innerHTML = generate().toUpperCase();} change();
// копи
function copy1(){let a1 = document.getElementById("did1").innerHTML;navigator.clipboard.writeText(a1);alert("Скопировано: " + a1);}function copy2(){let a2 = document.getElementById("did2").innerHTML;navigator.clipboard.writeText(a2);alert("Скопировано: " + a2);}function copy3(){let a3 = document.getElementById("did3").innerHTML;navigator.clipboard.writeText(a3);alert("Скопировано: " + a3);}function copy4(){let a4 = document.getElementById("did4").innerHTML;navigator.clipboard.writeText(a4);alert("Скопировано: " + a4);}function copy5(){let a5 = document.getElementById("did5").innerHTML;navigator.clipboard.writeText(a5);alert("Скопировано: " + a5);}function copy6(){let a6 = document.getElementById("did6").innerHTML;navigator.clipboard.writeText(a6);alert("Скопировано: " + a6);}function copy7(){let a7 = document.getElementById("did7").innerHTML;navigator.clipboard.writeText(a7);alert("Скопировано: " + a7);}function copy8(){let a8 = document.getElementById("did8").innerHTML;navigator.clipboard.writeText(a8);alert("Скопировано: " + a8);}function copy9(){let a9 = document.getElementById("did9").innerHTML;navigator.clipboard.writeText(a9);alert("Скопировано: " + a9);}function copy10(){let a10 = document.getElementById("did10").innerHTML;navigator.clipboard.writeText(a10);alert("Скопировано: " + a10);}
