const mysql= require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    database : 'ejemplo_db',
    user:'root',
    password:'root123',
    insecureAuth : true
})
conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion es ' + error);
        return
    }
    console.log('¡Conectado a la BD MySql');
})

module.exports = conexion;