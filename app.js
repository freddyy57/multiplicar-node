// requires
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Tabla Creada: ', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

// let base = 4;

// let argv2 = process.argv;
// console.log(argv.base);
// console.log('limite', argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// let data = '';

// for (let i = 1; i <= 10; i++) {
//     // console.log("2*" + i + "=" + 2 * i);
//     //console.log(`${base} * ${i} = ${base * i }`);
//     data += `${base} * ${i} = ${base * i }\n `;

// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
// });