/**
 * EJERCICIO 1: SIMULADOR DE TRANSFERENCIA DE CALOR
 */
function calcCalor() {
    // Capturas breves usando document.getElementById().value
    const t0 = parseFloat(document.getElementById('t0').value);
    const ts = parseFloat(document.getElementById('ts').value);
    const k = parseFloat(document.getElementById('k').value);
    const t = parseFloat(document.getElementById('t').value);
    const box = document.getElementById('res-calor');

    // Validaciones abreviadas
    if (isNaN(t0) || isNaN(ts) || isNaN(k) || isNaN(t)) {
        box.className = "res-box error";
        box.innerHTML = "Complete todos los campos numéricamente.";
        return;
    }
    if (t < 0) {
        box.className = "res-box error";
        box.innerHTML = "El tiempo (t) no puede ser negativo.";
        return;
    }

    // Procesamiento matemático: T = Ts + (T0 - Ts) * e^(-k * t)
    const tempFin = ts + (t0 - ts) * Math.exp(-k * t);
    const res = Math.round(tempFin); // Redondeo obligatorio al entero cercano

    // Renderizado en interfaz
    box.className = "res-box success";
    box.innerHTML = `Temperatura Final: ${res} °C`;
}

/**
 * EJERCICIO 2: CALCULADOR DE COMBINACIONES COMPLEJAS
 */

// Función iterativa propia para el cálculo del factorial
function fact(num) {
    if (num === 0 || num === 1) return 1;
    let r = 1;
    for (let i = 2; i <= num; i++) r *= i;
    return r;
}

// Ecuación de combinaciones C(n,r)
function comb(n, r) {
    return fact(n) / (fact(r) * fact(n - r));
}

// Lógica principal de procesamiento para el Sorteo
function calcComb() {
    const n1 = parseInt(document.getElementById('n1').value);
    const r1 = parseInt(document.getElementById('r1').value);
    const n2 = parseInt(document.getElementById('n2').value);
    const r2 = parseInt(document.getElementById('r2').value);
    const box = document.getElementById('res-comb');

    // Validación lógica obligatoria (r no puede ser mayor a n)
    if (r1 > n1) {
        box.className = "res-box error";
        box.innerHTML = "Error Grupo 1: r1 no puede ser mayor que n1.";
        return;
    }
    if (r2 > n2) {
        box.className = "res-box error";
        box.innerHTML = "Error Grupo 2: r2 no puede ser mayor que n2.";
        return;
    }
    if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
        box.className = "res-box error";
        box.innerHTML = "Los valores numéricos no pueden ser negativos.";
        return;
    }

    // Operación final: multiplicación de combinaciones de ambos grupos
    const total = comb(n1, r1) * comb(n2, r2);

    // Salida dinámica formateada
    box.className = "res-box success";
    box.innerHTML = `Total de Combinaciones: ${total.toLocaleString('es-BO')}`;
}