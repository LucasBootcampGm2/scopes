# Scopes y Closures en JavaScript

## 1. Scopes

### Objetivos

- Declarar una variable global llamada `globalVar`.
- Declarar una función que contenga variables de bloque y de función:
  - `blockVar`: variable de bloque (usando `let` o `const`).
  - `functionVar`: variable de función (usando `let` o `const`).
- No se permite el uso de `var`.

### Instrucciones

1. Declara la variable `globalVar` de manera global.
2. Dentro de una función, declara las variables `blockVar` y `functionVar` con los alcances correspondientes:
   - Usa `let` o `const` para ambas variables.
3. Commitea los cambios y sube el código a GitHub. La prolijidad de los commits será evaluada.

---

## 2. Closures

### Objetivos

- Definir una variable global.
- Crear una función que acepte un parámetro (llamado `paramVar`).
- Dentro de esa función, declarar una variable local de función (llamada `functionVar`).
- Declarar otro bloque de código (como un bucle o sentencia `if`) dentro de la función, que contenga una variable de bloque.
- Dentro de este bloque, crear una función anidada (closure) que modifique y acceda a las variables de los diferentes niveles de scope:
  - Variable global.
  - Variable de función (`functionVar`).
  - Variable de bloque.

### Instrucciones

1. Define una variable global.
2. Crea una función que acepte un parámetro `paramVar` y que declare una variable `functionVar`.
3. Dentro de la función, incluye un bloque (bucle o `if`) y declara una variable de bloque.
4. Dentro de ese bloque, crea una función anidada (closure) que acceda y modifique las variables en los diferentes niveles de scope.
5. Commitea los cambios y sube el código a GitHub. La prolijidad de los commits será evaluada.
