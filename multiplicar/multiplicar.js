// requires
const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================='.green);
    console.log(`======tabla de ${ base } limite ${ limite } ======`.green);
    console.log('================================='.green);

    return new Promise((resolve, reject) => {
        // Si no es un número no hacer nada
        if (!Number(base)) {
            reject(`El valor ${ base } no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n `;
        }

        resolve(data);


        // fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
        //     if (err)
        //         reject(err);
        //     else
        //         resolve(`tabla-${base}.txt`);
        //     // console.log(`El archivo tabla-${base}.txt ha sido creado!`);

        // });
    });

};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // Si no es un número no hacer nada
        if (!Number(base || limite)) {
            reject(`El valor ${ base } no es un número`);
            return;
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n `;
        }

        fs.writeFile(`tablas/tabla-${base}-limite${ limite }.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-limite${ limite }.txt`);
            // console.log(`El archivo tabla-${base}.txt ha sido creado!`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}