function hitung() {
	var sisi = document.getElementById("sisi").value;
	var keliling = 4 * sisi;
	var luas = sisi * sisi;

	document.getElementById("keliling").innerHTML = keliling;
	document.getElementById("luas").innerHTML = luas;
}