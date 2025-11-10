class Calculo {
    constructor() {
        this.tasas = {
            "USD": 1,
            "MXN": 18.45,
            "EUR": 0.86,
            "GBP": 0.76,
        };

        this.simbolo = {
            "USD": "🇺🇸 $",
            "MXN": "🇲🇽 $",
            "EUR": "🇪🇺 €",
            "GBP": "🇬🇧 £",
        };
    }

    calcularMoneda(cantidad, moneda, final) {
        let cantidadUSD = cantidad / this.tasas[moneda];
        let resultado = cantidadUSD * this.tasas[final];

        return `${this.simbolo[final]} ${resultado.toFixed(2)} `;
    }
}

    document.getElementById("btnConvertir").addEventListener("click", () => {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const moneda = document.getElementById("moneda").value;
    const final = document.getElementById("final").value;

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = "ingrese una cantidad válida pls";
        return;
    }

    const convertir = new Calculo();
    const res = convertir.calcularMoneda(cantidad, moneda, final);

    document.getElementById("resultado").innerHTML = res;
});
