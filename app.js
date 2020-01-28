const argv = require('./config/yargs').argv;
const colors = require('colors');

// Destructuracion 
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');



//console.log( 'Limite', argv.limite );
// let argv2 = process.argv;
// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split("=")[1];

let comando = argv._[0];

switch( comando ) {
    
    case 'listar':
        listarTabla( argv.base, argv.limite )
            .then( archivo => {
                console.log( archivo );
            })
            .catch(e => console.log(e));
        break;
    
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then( archivo => {
                console.log(`Archivo creado: ${ archivo }`.magenta);
            })
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


