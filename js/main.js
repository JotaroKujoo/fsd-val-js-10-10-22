// // let caja1 = document.getElementById("1")
// // let caja2 = document.getElementById("2")
// // let caja3 = document.getElementById("3")
// // let caja4 = document.getElementById("4")






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

// const inputHandler = (ev) => {
//     console.log(ev.target.value)
// }



// const operation = (onFinish) => {
//     timeout = 0;
//     const result = "?????";
//     timeout = timeout + tiempotardado;
//     onFinish(result,timeout)
// };


// const showResult = (resString, timeoutNumber) =>{
//     console.log(`He  acabado con resultado ${resString} en ${timeoutNumber} ms`)
// }

// const storageResult = (value) => {
//     localStorage.setItem("result",value)
// }

// operation(showResult)

// fetch("https://google.com")

// const Sumar = (num1, num2) => {
//     return num1 + num2
// }

// const Restar = (num1, num2) => {
//     return num1 - num2
// }

// const Multiplicar = (num1, num2) => {
//     return num1 * num2
// }

// const Dividir = (num1, num2) => {
//     return num1 / num2
// }

// let buttons = Array.from(document.getElementsByClassName("butons"))

// buttons.map((buton) => {
//     buton.addEventListener("click", () => {
//         switch (buton.innerHTML) {
//             case "sumar":
//                 console.log(Sumar(num1, num2))
//                 break;
//             case "restar":
//                 console.log(Restar(num1, num2))
//                 break;
//             case "multiplicar":
//                 console.log(Multiplicar(num1, num2))
//                 break;
//             case "dividir":
//                 console.log(Dividir(num1, num2))
//                 break;
            
//         }
//     })

// })







// cascarHuevo('huevo 1',(huevoAbierto1) => {
//     cascarHuevo('huevo 2', (huevoAbierto2) => {
//         cascarHuevo('huevo 3', (huevoAbierto3) => {
//             cascarHuevo('huevo 4', (huevoAbierto4) => {
//                 batir([huevoAbierto1, huevoAbierto2, huevoAbierto3, huevoAbierto4], (huevosBatidos) => {
//                     freir(huevosBatidos,'sarten',(tortillaCalentita) => {
//                         console.log('ñam ñam', tortillaCalentita)
//                 })
//             })
//         })
//     })
//     })
// })




//                  TRABAJANDO CON PROMESAS


// batir = (huevosAbiertos, cuandoTermines) => {

//     return new Promise( (res,rej)=>{
//         console.log(huevosAbiertos);
//         setTimeout (() => cuandoTermines('toma huevos batidos'),5000)
//     } );
    
// }

// freir = (huevosBatidos, sarten, cuandoTermines) => {
//     return new Promise ((res)=>{
//         console.log(huevosBatidos, sarten);
//         setTimeout (() => cuandoTermines('toma una tortilla calentita'),10000)
//     })
// }

// cascarHuevo = (huevo) => {
//     return new Promise((resolve,reject)=>{
//         if (huevo == "huevo podrido"){
//             reject("El huevo esta podrido")
//         }else{
//             console.log(huevo)
//             setTimeout(()=> resolve("toma un huevo abierto"),1000)
//         }
//     });
// }

//  let quePromesaSoy = cascarHuevo("1 Huevo").then((huevoAbierto)=>{
//     return "hola"
//  })




// let huevoAbiertoPromise1 = cascarHuevo("huevo1")
// let huevoAbiertoPromise2 = cascarHuevo("huevo2")
// let huevoAbiertoPromise3 = cascarHuevo("huevo3") 
// let huevoAbiertoPromise4 = cascarHuevo("huevo4")

// let todosLosHuevosAbiertosPromise = Promise.all([huevoAbiertoPromise1,huevoAbiertoPromise2,huevoAbiertoPromise3,huevoAbiertoPromise4])

// todosLosHuevosAbiertosPromise
// .then(()=> {
//     let huevosBatidosPromise = batir(huevosAbiertos);
//     huevosBatidosPromise.then((huevosBatidos)=>{
//         let tortillaPromise = freir(huevosBatidos,"sarten")
//         tortillaPromise.then((tortillaCalentita)=>{
//             console.log("ñam ñam",tortillaCalentita)
//         })
//     })
// })
// .catch((error)=>{
//     /* Manejamos el error */
// })


// let promesaDe4HuevosAbiertos = Promise.all([
//     cascarHuevo("huevo1"),
//     cascarHuevo("huevo2"),
//     cascarHuevo("huevo3"),
//     cascarHuevo("huevo4")
// ])

// promesaDe4HuevosAbiertos
// .then(batir)
// .then((huevosBatidos)=> freir(huevosBatidos,"sarten"))
// .then((tortillaCalentita) => console.log("ñam ñam",tortillaCalentita))






// cascarHuevo("Huevo 1")
// .then(
//     (huevoAbierto1)=> [huevoAbierto1])
// .then(batir)
// .then(freir)



// cascarHuevo = (huevo) => {
//     return new Promise((resolve,reject)=>{
//         if (huevo == "huevo podrido"){
//             reject("El huevo esta podrido")
//         }else{
//             console.log(huevo)
//             setTimeout(()=> resolve("toma un huevo abierto"),1000)
//         }
//     });
// }




// let horseRunningPromise = ( caballo ) => {
//     timeDone = 
//     return new Promise((res,rej)=>{
//         setTimeout(res,timeDone,console.log(caballo,timeDone));

//     })
// }


// CARRERA DE CABALLOS


// const correrCaballo = (caballo) => new Promise((resolve) => setTimeout(() => resolve({caballo,timeDone}),timeDone = parseInt(Math.random()*10000),console.log(caballo,timeDone)))




// h1 = correrCaballo("caballo1");
// h2 = correrCaballo("caballo2");
// h3 = correrCaballo("caballo3");

// horseArr = [h1,h2,h3]

// Promise.race(horseArr).then(value => {
//     console.log(value.caballo,"Ha ganado en",value.timeDone)
// })

// Promise.all(horseArr).then(()=> console.log("La carrera ha terminado"))


// const sumaUno = (numero) => new Promise((resolve)=> resolve(numero+1))

// const restarUno = async (numero) => {
//     if (numero < 0) throw new Error("No puedes sumar un numero negativo")
//     numero - 1
// }

// await solo puede estar dentro de una funcion async
 