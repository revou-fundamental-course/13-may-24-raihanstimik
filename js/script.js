function hitungLuas(){
    const alas = parseFloat(document.getElementById('alas'). value);
    const tinggi = parseFloat(document.getElementById('tinggi'). value);
    const luas = (alas*tinggi)/2;
    document.getElementById('luas'). value = luas;
}

function resetLuas() {
    document.getElementById('alas'). value = '';
    document.getElementById('tinggi'). value = '';
    document.getElementById('luas'). value = '';
}

//keliling segitiga

function calculatePerimeter() {
    // Mengambil nilai input dari pengguna
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    // Memeriksa apakah input adalah angka dan lebih besar dari 0
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Silakan masukkan nilai yang valid untuk semua sisi.");
        return;
    }

    // Menghitung keliling segitiga
    const perimeter = sideA + sideB + sideC;

    // Menampilkan hasil
    document.getElementById('result').innerText = perimeter;
}
function resetKeliling() {
    document.getElementById('sideA'). value = '';
    document.getElementById('sideB'). value = '';
    document.getElementById('sideC'). value = '';
}

