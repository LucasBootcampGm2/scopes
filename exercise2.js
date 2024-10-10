let globalVar = 10;

function miFuncion(paramVar) {
  let functionVar = 20;

  if (paramVar > 0) {
    let blockVar = 30;

    function closureFunc() {
      globalVar += 1;
      functionVar += 1;
      blockVar += 1;

      console.log("globalVar:", globalVar);
      console.log("functionVar:", functionVar);
      console.log("blockVar:", blockVar);
    }
    console.log("globalVar:", globalVar);

    closureFunc();
  }
}

miFuncion(5);
closureFunc() // Como esta definida en la funcion, su scope es de funcion y no existe afuera
console.log("Final globalVar value:", globalVar);
