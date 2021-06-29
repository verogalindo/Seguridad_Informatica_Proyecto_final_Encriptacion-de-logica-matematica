

//////////////////////////////////////////////////PROYECTO DANIEL///////////////////////////////////////

const alfabeto = ["Z","Y","X","W","V","U","T","S","R","Q","P","O","Ñ","N","M","L","K","J","I","H","G","F","E","D","C","B","A"];//decraracion de constante con valor predefinido
const inputOriginal = document.getElementById('input-original');//decraracion de contante con valor predifinido,donde  document.getElementById devuelve el valor que esta entre parentesis
const cifrador = document.getElementById('cifrador');//decraracion de constante con valor predefinido, document.getElementById devuelve el valor de cifrador
const resultado = document.getElementById('resultado');//decraracion de constante con valor predefinido, document.getElementById  devuelve el valor de resultado
const rango = document.getElementById('rango');//declaracion de constante con valor predefinido, document.getElementById devuelve el valor de rango

const shifMessage = () => {  //declaracion de constante (shifMessage),donde la funcion flecha(=>) debuelve el valor de los siguientes 2 renglones
    const wordArray = [...inputOriginal.value.toUpperCase()];//declaracion de constante con valor predeterminado, wordArray pasa a bits el valor del mensaje en cada caso y el metodo toUpperCase devuelve letras MAYUSCULAS
    printChar(0, wordArray);//printChar imprime un caracter
}

const printChar = (currentLetterIndex, wordArray) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) - parseInt(rango.value)) % alfabeto.length + 2] : ////alfabeto.length
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
           spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;