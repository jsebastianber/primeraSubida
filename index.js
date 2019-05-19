const {obtenerPrmedio,argv} = require('./git.js')

console.log(argv)
if(argv._[0]=='promedio'){
    console.log('El promedio es de ',argv.n, 'es ')
}
else{
    console.log('Promedio no calculado')
}