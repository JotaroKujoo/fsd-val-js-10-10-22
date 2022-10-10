// // let caja1 = document.getElementById("1")
// // let caja2 = document.getElementById("2")
// // let caja3 = document.getElementById("3")
// // let caja4 = document.getElementById("4")




// //      IMPORTANTE ALGORITMO PARA VALIDAR ELEMENTOS DEL TIC TAC TOE

// let interruptor = false;

// let casillas = Array.from(document.getElementsByClassName("rectangulo"))

// //UTILIZAMOS MAP PORQUE NOS PERMITE TRATAR A CADA ELEMENTO DEL ARRAY COMO UN OBJETO 


// casillas.map((casilla)=> {
//     casilla.addEventListener("click", ()=>{
//         if (casilla.innerHTML == ""){
//             casilla.innerHTML = (interruptor) ? "X" : "O"
//             interruptor = !interruptor
//         }
//     })
// })


// //Modailidad sin refactorizar el codigo repitiendo muchas lineas de codigo

// // const marcarCasilla = (posicion) => {
// //     switch(posicion){
// //         case '1':
// //             caja1.innerHTML = (interruptor) ? "X" : "O";
// //             interruptor = !interruptor
// //         break;

// //         case '2':
// //             caja2.innerHTML =  (interruptor) ? "X" : "O";
// //             interruptor = !interruptor
// //         break;

// //         case '3':
// //             caja3.innerHTML = (interruptor) ? "X" : "O";
// //             interruptor = !interruptor
// //         break;


// //         case '4':
// //             caja4.innerHTML = (interruptor) ? "X" : "O";
// //             interruptor = !interruptor
// //         break;

// //     }

// // };












// // caja1.addEventListener("click", ()=>{
// //     console.log("Me has pulsado 1")


// // } )

// // caja2.addEventListener("click", ()=>{
// //     console.log("Me has pulsado 2")


// // } )

// // caja3.addEventListener("click", ()=>{
// //     console.log("Me has pulsado 3")


// // } )

// // caja4.addEventListener("click", ()=>{
// //     console.log("Me has pulsado 4")


// // } )


/*

    DOM + JSON




*/

// let palabras = document.createTextNode("Estamos en wayco")

// let cajon = document.createElement("div")

// cajon.appendChild(palabras)

// document.body.appendChild(cajon)

// let azul = document.getElementById("azul")

// const muevete = () => {
//     azul.classList.add("cajita2")
// }

// let salva = {
//     hobbie1 : "luchar",
//     hobbie2 : "ducha",
//     hobbie3 : "futbolin"

// }

// convertido = JSON.stringify(salva)

// console.log(salva)
// console.log(convertido)

// //Guardamos en el storage

// localStorage.setItem("datosSalva",convertido)

// //Obtenemos los datos del storage

// let datosStorage = localStorage.getItem("datosSalva")

// //Volvemos a convertir a objeto

// let objetoReconvertido = JSON.parse(datosStorage)

// console.log(objetoReconvertido)

const inputHandler = (ev) => {
    console.log(ev.target.value)
}