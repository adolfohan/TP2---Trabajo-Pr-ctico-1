const fs = require('fs')

function leerArchivoComoString() {
    let datos = fs.readFileSync('./texto.txt','utf-8')
    console.log(datos)
}

//leerArchivoComoString()

const textoNuevo = "Reemplazando texto"

function escribirTextoEnArchivo(ruta, flag, texto){
    if(flag === true){
        fs.writeFileSync('./texto2.txt',textoNuevo)
        console.log("Archivo escrito exitosamente!");
    } else console.log("El archivo no existe");
}

//escribirTextoEnArchivo('./texto3.txt', false, textoNuevo)

let str = '123 | 456 | 789 | 1bc | 10'

function transformarStringEnArrayDeNumeros(texto){
    let separador = texto.split(' | ')

    console.log(separador.map(x => parseInt(x)))
}

//transformarStringEnArrayDeNumeros(str)

const arrayNumeros = [123, 456, 789, 10]

function transformarArrayDeNumerosAUnSoloString(array){
    console.log(array.toString());
}

//transformarArrayDeNumerosAUnSoloString(arrayNumeros)

const array1 = [1, 5, 10]
const array2 = [2, 3, 8, 11]

function combinarDosArrays(arr1, arr2){
    const nuevoArray = arr1.concat(arr2)

    //nuevoArray.sort((a, b) => a - b )

    for(let i=0; i < nuevoArray.length; i++){
      for(let j=0; j < nuevoArray.length; j++){
        if(j+1 !== nuevoArray.length){
          if(nuevoArray[j] > nuevoArray[j+1]){
            let cambiarElemento = nuevoArray[j+1];
            nuevoArray[j+1] = nuevoArray[j];
            nuevoArray[j] = cambiarElemento;
          }
        }  
      }
    }
    console.log(nuevoArray)
}

//combinarDosArrays(array1, array2)


const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

function combinarNArrays(arr){
    const resultado = [arr].flat()

    console.log(resultado);
}

combinarNArrays(arrays)