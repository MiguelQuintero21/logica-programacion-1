
let input1 = prompt("Ingresa el primer número:");
let input2 = prompt("Ingresa el segundo número:");
let input3 = prompt("Ingresa el tercer número:");

let n1 = Number(input1);
let n2 = Number(input2);
let n3 = Number(input3);


if (isNaN(n1) || isNaN(n2) || isNaN(n3) || input1 === null || input2 === null || input3 === null || input1.trim() === "" || input2.trim() === "" || input3.trim() === "") {
    alert("Error: Debes ingresar únicamente números válidos.");
} else {
    let numeros = [n1, n2, n3];

    // aqui se verifica si los números son iguales
    if (n1 === n2 && n2 === n3) {
        let mensajeIguales = `Los tres números son iguales: ${n1}, ${n2}, ${n3}`;
        console.log(mensajeIguales);
        document.getElementById("resultado").innerHTML = `<p>${mensajeIguales}</p>`;
    } else {
        
        let menorAMayor = [...numeros].sort((a, b) => a - b);
        let mayorAMenor = [...numeros].sort((a, b) => b - a);

        console.log("Ordenados de menor a mayor:", menorAMayor.join(", "));
        console.log("Ordenados de mayor a menor:", mayorAMenor.join(", "));
        document.getElementById("resultado").innerHTML = `
            <p><strong>Números ingresados:</strong> ${n1}, ${n2}, ${n3}</p>
            <p><strong>De menor a mayor:</strong> ${menorAMayor.join(", ")}</p>
            <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(", ")}</p>
        `;
    }
}