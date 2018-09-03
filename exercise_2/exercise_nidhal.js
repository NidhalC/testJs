function myFunction() {
	var table = document.getElementById('myTable');
	var row = table.insertRow(0)
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = "NvllLigne Cellule1";
	cell2.innerHTML = "NvllLigne Cellule2";
}