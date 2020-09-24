const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion por actulaizar'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca comp0letado o pendiente la tarea'
}

const argv = require('yargs').command('crear', 'Crear un elemento por hacer ', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}