let prom1 = () => {
    let promesa = new Promise((resolve, reject) => {
        let n1 = 10;
        let n2 = 20;

        resolve(n1 + n2 + ' Funcion ejecutada.');
    });

    return promesa;
}

let valor = prom1().then(valor => console.log(valor));

// prom1().then(valor => {
//     console.log(valor);
// })