let globalVar2 = 10;

function miFuncion(paramVar) {
  let functionVar = 20;

  if (paramVar > 0) {
    let blockVar = 30;

    function closureFunc() {
      globalVar2 += 1;
      functionVar += 1;
      blockVar += 1;

      console.log("globalVar:", globalVar2);
      console.log("functionVar:", functionVar);
      console.log("blockVar:", blockVar);
    }

    closureFunc();
  }
}

miFuncion(5);

console.log("Final globalVar value:", globalVar);
