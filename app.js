const argv = require('./config/yargs').argv;
const cargar = require('./por-hacer/por_hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'listar':
        {
            let lista = cargar.listar();
            for (let tarea of lista) {
                console.log('***********Por hacer**********************'.green);
                console.log(`Descripcion ${ tarea.descripcion }`);
                console.log(`Estado ${ tarea.completado }`);
                console.log('******************************************'.green);
            }
        }
        break;
    case 'crear':
        {
            console.log('crear');
            let resultado = cargar.agregar(argv.descripcion);
            console.log(resultado);
            // console.log(agregar(argv.descripcion));
        }
        break;
    case 'actualizar':
        {
            console.log('actulizar');
            resultado = cargar.actualizar(argv.descripcion, argv.completado);
            if (resultado) {
                console.log('Actualizacion exitosa');
            } else {
                console.log('Actualizacion erronea');
            }
        }
        break;
    case 'borrar':
        {
            console.log('borrar');
            resultado = cargar.borrar(argv.descripcion);
            if (resultado) {
                console.log('Se borro');
            } else {
                console.log('No se borro');
            }
        }
        break;


    default:
        {
            console.log('Opcion incorrecta');
        }

}