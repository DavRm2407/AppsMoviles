// 1.0 Funciones

/*
function hello()
{
    console.log('Hola js');
    console.log('Hola html');
    console.log('Hola css');
}
hello();
hello();
*/

// 2.0 retorno de una función

/*
function hello()
{
    return "hola js";
}

const result = hello();
console.log (result);
//hello();
*/

 // 3.0 retorna objeto vacio

 /*
function hello()
{
    return "hola js1";
}

console.log (hello());
*/

// 4.0 Retornar valor del objeto

/*
function hello()
{
    return{
        nombre: 'David'
    }
}
console.log(hello());
*/

// 5.0 función que retorna a otra función

/*
function hello()
{
    return function ()
    {
        return 'Hola js'
    }
}
console.log (hello()());
*/

// 6.0 === USO DE PARÁMETROS EN FUNCIONES ===
/*
function helpwithJs(name)
{
    return 'Hola ' + name
}

console.log('David');
console.log('Mily');
console.log('Fer');
console.log('Frank');
console.log('Axel');
*/

// 7.0 pasar más de un parámetro a la función
/*
function helpwithJs(x,y)
{
    return x + y;
}

console.log(helpwithJs(50,35));
*/

// 8.0 control de errores en parámetros

/*
function helpwithJs(x,y)
{
    if (y ==undefined)
    {
        y=0;
    }
    return x / y ;
}
console.log(helpwithJs(10));
*/

// ---OBJETOS---


const user = 
{
    nombre : 'David',
    apellidoP : 'Rojo',
    edad : 17,
    edoCivil: 'soltero',
    domicilio : 
    {
        ciudad : 'CDMX',
        calle : 'Lago Chalco',
        num : 4589
    
    },

    amigos: ['Mily','Valery','Camm','Ale','Emi'],
    activo : true, 
    sendMensaje : function () {
        return 'enviando msj'
    }
}


//alert: ciudad calle numeró...
alert(user.domicilio.ciudad, user.domicilio.calle, user.domicilio.num);
//consola: amigos 
//alert Activo o dado de baja
//consola: nombre, apellidos, estado civil...!
console.log(user.amigos, user.nombre, user.apellidoP, user.edoCivil);
//alert (estado del mensaje)
alert(user.sendMensaje(), user.activo);
