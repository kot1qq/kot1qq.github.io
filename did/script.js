function didpc() { return "xxxxxxxx-xxxx-3xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) { var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8; return v.toString(16)})} function didpe() { return "xxxxxxxxxxxx3xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) { var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8; return v.toString(16).toUpperCase()})} function menu(){if(document.getElementById("menu").style.display === "block"){document.getElementById("bg").style.display = "none"; document.getElementById("menu").style.display = "none"} else {document.getElementById("bg").style.display = "block"; document.getElementById("menu").style.display = 'block'}}; function pc(){document.getElementById("center").style.display = 'none'; document.getElementById("divpc").style.display = 'block'; document.getElementById("hdidpc").innerHTML = didpc()}; function pe(){document.getElementById("center").style.display = 'none'; document.getElementById("divpe").style.display = 'block'; document.getElementById("hdidpe").innerHTML = didpe()}; function turnback(){location.reload()}; function updpc(){document.getElementById("hdidpc").innerHTML = didpc()}; function copypc(){navigator.clipboard.writeText(document.getElementById("hdidpc").innerHTML); function uspeshnopc(){document.getElementById("hdidpc").innerHTML = "Скопировано!"; setTimeout(updpc, 1500)} uspeshnopc()}; function updpe(){document.getElementById("hdidpe").innerHTML = didpe()}; function copype(){navigator.clipboard.writeText(document.getElementById("hdidpe").innerHTML); function uspeshnope(){document.getElementById("hdidpe").innerHTML = 'Скопировано!'; setTimeout(updpe, 1500)} uspeshnope()};




/* ДЛЯ ЕБЛАНОВ КОТОРЫЕ СМОТРЯТ КОД:
Мне было лень делать 'let menu = document.get...', потому что оно блять не работало */ 