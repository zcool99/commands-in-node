const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crea elemento en sistema', {
        descripcion
    })
    .command('actualizar', 'Actualizar estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    //exportamos funcion
    argv
}