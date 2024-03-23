function generateUUIDv4() { const version = 4; const variant = 0b10000000; const data = new Uint8Array(16); for (let i = 0; i < data.length; i++) { data[i] = Math.floor(Math.random() * 256)} data[6] = (data[6] & 0x0F) | (version << 4); data[8] = (data[8] & 0xBF) | variant; let uuid = "" ;for (const byte of data) {uuid += byte.toString(16).padStart(2, "0")} uuid = uuid.slice(0, 8) + "-" + uuid.slice(8, 12) + "-" + uuid.slice(12, 16) + "-" + uuid.slice(16, 20) + "-" + uuid.slice(20); return uuid;} function did(){ let uuid = generateUUIDv4(); const secondDashPos = uuid.indexOf('-', uuid.indexOf('-') + 1); if (secondDashPos !== -1 && secondDashPos + 1 < uuid.length) {uuid = uuid.slice(0, secondDashPos + 1) + '3' + uuid.slice(secondDashPos + 2)} return uuid;}

function refresh(){
document.getElementById("did").innerHTML = did();
}
function copy(){
const y = document.getElementById("did").innerHTML;
navigator.clipboard.writeText(y);
document.getElementById("did").innerHTML = 'Скопировано!';
setTimeout(() => {
document.getElementById("did").innerHTML = y;
}, 1250)
}