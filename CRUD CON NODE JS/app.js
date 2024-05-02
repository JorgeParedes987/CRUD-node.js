//Aqui invocamos la la constante de express
const express = require ('express');
const app = express();
//definir codigo para las plantillas visuales del proyecto
app.set('view engine', 'ejs');
//invocar a listen con el localhost 5000 y muestre mensaje

//este metodo es para invocar las plantillas para que pueda capturar datos
app.use(express.urlencoded({extended:false}));
app.use(express(express.json));
app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000');
});
//referenciar el archivo router
app.use('/', require('./router'));