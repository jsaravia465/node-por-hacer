const fs = require('fs');


let lista = [];


let grabarDB = () => {

    let data = JSON.stringify(lista);



    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw Error('No se pudo grabar el archivo', err)
        else
            console.log('Archivo grabado');
    });
}


let cargarDB = () => {
    try {
        lista = require('../db/data.json');
    } catch (error) {
        lista = [];
    }


}
let agregar = (descripcion) => {

    cargarDB();

    let desc = {
        descripcion,
        completado: false
    }

    lista.push(desc);

    grabarDB();

    return desc;

}

let listar = () => {
    cargarDB();
    return lista;


}

let actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = lista.findIndex(desc => desc.descripcion === descripcion);
    if (index >= 0) {
        lista[index].completado = completado;
        grabarDB();
        return true;
    } else {
        return false;
    }

}


let borrar = (descripcion) => {
    cargarDB();
    let nuevalista = lista.filter(desc => { return desc.descripcion !== descripcion });
    if (nuevalista.length !== lista.length) {
        lista = nuevalista;
        grabarDB();
        return true;
    } else {
        return false;
    }



}

module.exports = {
    agregar,
    listar,
    actualizar,
    borrar
}