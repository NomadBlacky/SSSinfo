
var acNum="", acAlp=""
var defaultBgColor = document.bgColor

function setAccessNum() {
	acNum = this.innerHTML
	show()
}

function setAccessAlp() {
	acAlp = this.innerHTML
	show()
}

function show() {

	out = document.getElementById("out")
	out.innerHTML = acNum + "-" + acAlp

	if(acNum == "" || acAlp == "") { return }

	acNum = parseInt(acNum)

	console.log(acNum)
	console.log(acAlp)

	table = document.getElementById("server_view")
	clearTable(table)

	var folderAddress = 1
	switch (acAlp) {
	case "A": folderAddress = 1; break;
	case "B": folderAddress = 11; break;
	case "C": folderAddress = 21; break;
	}

	if(acNum < 4) {
		folderAddress += acNum - 1
	}
	else {
		folderAddress += acNum + 1
		console.log(folderAddress)
	}

	var matchCells = []
	for(var i=0; i<3; i++) {
		matchCells.push(folderAddress + i)
	}
	for(var i=5; i<8; i++) {
		matchCells.push(folderAddress + i)
	}

	for(var i in matchCells) {
		document.getElementById("no"+matchCells[i]).style.backgroundColor = "lightgreen"
	}
}

function clearTable(table) {
	tds = table.getElementsByTagName("td")
	for(var i=0; i<tds.length; i++) {
		tds[i].style.backgroundColor = defaultBgColor
	}
}

window.onload = function() {

	elements = document.getElementsByClassName("bt_num")
	for(var i in elements) {
		elements[i].onclick = setAccessNum
	}

	elements = document.getElementsByClassName("bt_alp")
	for(var i in elements) {
		elements[i].onclick = setAccessAlp
	}

	

}