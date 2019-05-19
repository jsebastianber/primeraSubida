const opciones={
    matematicas :{
        default:0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias: 'i'
    },
    programacion :{
        demmand:true,
        alias: 'p'
    }
}

let obtenerPromedio = (num1,num2,num3)/3

const argv = require('yargs')
            .command('promedio','Calcular el promedio',opciones)
            .argv;

module.exports = {
    obtenerPromedio,
    argv
}