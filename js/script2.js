document.getElementById("imcForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Aevita recargar la página

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = (peso / (altura * altura)).toFixed(1); // tofix sirve pararedondear a un decimal

    let categoria = "";
    let color = "";
    let imagen = "";

    if (imc < 18.5) {
        categoria = "Bajo Peso";
        color = "orange";
        imagen = "img/bajo.png";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso Normal";
        color = "green";
        imagen = "img/normal.png";
    } else if (imc >= 25.0 && imc <= 29.9) {
        categoria = "Sobrepeso";
        color = "goldenrod";
        imagen = "img/sobre.png";
    } else if (imc >= 30.0) {
        categoria = "Obesidad";
        color = "red";
        imagen = "img/obesidad.png";
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `IMC: ${imc} – ${categoria}`;
    resultado.style.color = color;

    document.getElementById("imagen").src = imagen;
});
