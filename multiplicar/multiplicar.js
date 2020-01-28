/**
 * Require
    1.- Librerias que Node trae por dafault 
    const fs = require('fs');
    2.- Librerias que instalamos y mandamos a llamar
    const fs = require('fs');
    3.- Archivos que tenemos en una determinada carpeta y empiezan con ./
    const fs = require('./fs');
 */

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base} ó el Limite ${limite} No son valores Numericos`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i }\n`.magenta;
        }
        resolve(data);

    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido (${base}) no es un Número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

module.exports = {
    // crearArchivo : crearArchivo
    crearArchivo,
    listarTabla
}