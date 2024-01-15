function hitungLuasDanKeliling() {
	var sisi = document.getElementById("sisi").value;
	var luas = sisi * sisi;
	var keliling = 4 * sisi;
	var hasil = "Luas persegi: " + luas + " dan Keliling persegi: " + keliling;
	document.getElementById("hasil").innerHTML = hasil;
}

function resetForm() {
	document.getElementById("sisi").value = "";
	document.getElementById("hasil").innerHTML = "";
}