const globalVar = "Lucas";

function welcome() {
  console.log("Interviewing Lucas...");
  let funcionVar = `We are happy to be able to work with you `;
  setTimeout(() => {
    funcionVar += globalVar;
    const blockVar = `Welcome to GM2`;
    console.log(blockVar); // En el bloque funciona
    console.log(funcionVar);
  }, 3000);
  //console.log(blockVar) Fuera del bloque devuelve que no esta definida porque es una variable de bloque y solo esta definida dentro del setTimeout, pero functionVar esta declarada en la funcion, por lo que cambiara y sera devuelta correctamente en el log.
}

welcome();
