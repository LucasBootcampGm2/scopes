const globalVar = 'Welcome'


function welcome(){
  const funcionVar = "Lucas"
  console.log('Interviewing Lucas...')
  let happy = `We are happy to be able to work with you `
  setTimeout(()=>{
    happy += funcionVar
    const blockVar = `${globalVar} to GM2`
    console.log(blockVar) // En el bloque funciona
    console.log(happy)
  }, 3000)
  //console.log(blockVar) Fuera del bloque devuelve que no esta definida porque es una variable de bloque y solo esta definida dentro del setTimeout, pero happy esta declarada en la funcion, por lo que cambiara y sera devuelta correctamente en el log.
}

welcome()