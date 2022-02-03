
<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">

<br/><br/><br/>

# Entrega 3 - Calculadora JS

Versión: 2 de Febrero de 2022

## Objetivo

Practicar con expresiones básicas, variables, asignaciones, if…else, switch…case, bucles, los tipos number, string, boolean, eventos sencillos, arrays, así como con objetos DOM y Date.

## Descripción de la práctica

En esta entrega vamos a desarrollar una aplicación web de calculadora, para ello utilizaremos HTML y JavaScript (CSS se deja opcional). La calculadora que vamos a implementar es como esta:

<p align="center">
  <img width="187" height="264" style="border: 1px solid grey;" src="https://kikeservicenow.neocities.org/Captura.PNG">
</p>

## Descargar el código del proyecto

El proyecto se descarga en el ordenador local con estos comandos:


```
$ git clone https://github.com/CORE-UPM/P3_Calculadora_JS
```
A continuación se debe acceder al directorio de trabajo y abrir el fichero index.html con el editor de la elección del alumno.

```
$ cd P3_Calculadora_JS
```

## Tareas

Para superar esta entrega, el alumno tendrá que implementar las siguientes funcionalidades:

### 1. Desarrollo de la estructura de página básica y campo input:
* Cree en el directorio del proyecto un archivo nuevo y pongale el nombre "index.html". En dicho archivo cree la estructura básica de una página HTML (html, head, body)
* Añada un h2 con la clase "cabecera" (puede usar esta clase para añadir alguna propiedad css a este h2) y texto "Calculadora de CORE"
* Añada un campo input de tipo texto y de id "pantalla" 


### 2. Operaciones unitarias:
* Añada un botón (button) que tenga el id "cuadrado" que llama a una función de nombre cuadrado() que calcula el cuadrado del número que el usuario ha escrito en el campo input y escribe el resultado en el mismo input.
  * Añada un nuevo botón a la calculadora. Este botón tendrá un id &quot;factorial&quot; y llamará a una función fact(). Dicha función calcula el factorial del número X introducido en el input y pone el resultado del cálculo en el mismo input. Factorial = X\*(X-1)\*(X-2)\*…\*3\*2\*1, (calcularlo con un bucle for)

### 3. Operaciones binarias:
Las operaciones binarias (suma, resta, multiplicación, división, resto y potencia) consisten en dos operandos, un operador y se debe pulsar el signo igual para obtener el resultado. El funcionamiento sería como el de cualquier calculadora. Se introduce un primer número, se pulsa la operación, se introduce un segundo número y se pulsa el signo igual.

Consejos para el desarrollo: Tenemos dos pulsaciones a botones. Primera, al pulsar cualquier operador binario, debe invocarse una función, que guarde en variables globales, tanto el número tecleado en el input, como un string indicando el operador pulsado (las variables globales son visibles dentro de todas las funciones del script y puedan utilizarse para pasar valores de una función a otra). Al pulsar el botón con el signo &quot;_=&quot;_ debe invocarse una nueva función que calcule el resultado, realizando la operación indicada por el operador guardado, utilizando el primer número (guardado en la variable global) y el segundo número que debe estar en el input.

  * Añada un nuevo operador binario para hacer una suma, una resta, una multiplicación y una división. Con esto aparecen 4 botones para operaciones nuevas y un botón adicional de "igual". Los botones de operaciones deben tener los ids siguientes: "suma" "resta" "multiplicacion" y "division" (estos últimos sin acento, importante). Estos botones llaman a funciones que deben tener los siguientes nombres add, sub, mul, div. Estas funciones guardan el valor del input y el operador pulsado en variables globales. El botón igual debe tener el id "igual" y llamar a una función eq() que hará el cálculo adecuado según se haya pulsado antes en sumar, restar, multiplicar o dividir y mostrará el resultado calculado en el input. La función eq() si se pulsa repetidamente no hace nada, es decir solo hace el cálculo si se ha usado antes adecuadamente una operación.


### 4. Campo informativo:

Añada al documento HTML un nuevo elemento mediante la etiqueta 	&lt;h2&gt; con identificador &quot;info&quot;, clase &quot;grande&quot;, un atributo &quot;title&quot; con valor &quot;Info sobre el número&quot; y contenido inicialmente &quot;Info sobre el número&quot;.

El contenido de dicho elemento &lt;h2&gt; se debe actualizar cada vez que se hace un cálculo en la calculadora. Su contenido debe ser &quot;Info: El resultado es menor que 100&quot;, &quot;Info: El resultado está entre 100 y 200&quot; o &quot;Info: El resultado es superior a 200&quot; según sea el resultado del cálculo que muestre el input.

Recomendamos hacer esta funcionalidad en una función específica (de nombre por ejemplo rellenar_info) que llamemos cada vez que sea necesario, así se rellenará la información para todas las operaciones desarrolladas. No reescriba el código que hace esta funcionalidad dentro de cada método, para eso nos definimos esta nueva función y la llamamos cuando haga falta, así si la modificamos o tenemos algún error el código está bien encapsulado, está una sola vez.

### 5. Tratamiento de errores

Queremos que la calculadora sea un poco más robusta y funcione independientemente de lo que introduzca el usuario. Para ello tendremos que validar la entrada antes de hacer las operaciones y mostrar un error en caso de que lo introducido por el usuario no sea válido.

  * Implemente la funcionalidad de tratamiento de errores. Para ello debe validar la entrada del usuario antes de hacer cualquier operación. Cree una función validar() y utilícela en todas las funciones que realizan operaciones. Dicha función debe coger el valor del input y comprobar que es algo soportado por la calculadora. Si es así realiza la operación, si no es algo soportado muestra &quot;Error&quot; en el input.

  La calculadora debe soportar números enteros y decimales con el punto (positivos y negativos), y también listas de dichos números en formato CSV (separados por comas).



## Consideraciones adicionales y recomendaciones

Todas las funciones que se definan y utilicen deben utilizar la notación arrow. Todas las funciones deben tener el nombre que se ha pedido en el enunciado, si a la función de multiplicación por ejemplo la llamamos "multi" el autocorector no la encontrará y no nos dará los puntos. Lo mismo ocurre con los textos que se pide en los botones y campos informativos, Ponga exáctamente lo que se pide respetando mayúsculas y acentos.

Se recomienda añadir algún separador adicional a los grupos de botones como muestra la imagen de ejemplo de la calculadora, así como un poco de CSS para darle algo de estilo.

El texto que contienen los botones queda a elección del alumno. Es decir el botón suma podrá contener la palabra suma o el signo +, etc.

Se puede crear una función adicional "vaciar" con el contenido document.getElementById("pantalla").value = ""; y llamarla al hacer click en los botones de operaciones binarias para borrar el contenido de la pantalla antes de que el usuario escriba el segundo número para facilitar el uso de la calculadora. También podría llamar a esta función cada vez que se hace click en el campo input de id "pantalla" añadiéndoles onclick="vaciar()" en su definición. 

De cara al examen piense en qué ha aprendido y qué cosas podría modificar y controlar de la práctica. Por ejemplo añadir un botón que tras pulsarlo tres veces oculta la cabecera h2 o la pantalla. Añadir un segundo input y un botón que sirva para comparar los dos números que hay en los inputs. Un botón "añadir a la lista" que va añadiendo a un array lo que hay en la pantalla cada vez que se pulsa y muestra el contenido del array en una lista (ul-li), etc.


## Prueba de la práctica 

Para ayudar al desarrollo, se provee una herramienta de autocorrección que prueba las distintas funcionalidades que se piden en el enunciado. Para utilizar esta herramienta debes tener node.js (y npm) ([https://nodejs.org/es/](https://nodejs.org/es/)) y Git instalados. 

Para instalar y hacer uso de la [herramienta de autocorrección](https://www.npmjs.com/package/autocorector) en el ordenador local, ejecuta los siguientes comandos en el directorio del proyecto:

```
$ npm install -g autocorector     ## Instala el programa de test
$ autocorector                    ## Pasa los tests al fichero a entregar
............................      ## en el directorio de trabajo
... (resultado de los tests)
```
También se puede instalar como paquete local, en el caso de que no se dispongas de permisos en el ordenador desde el que estás trabajando:
```
$ npm install autocorector     ## Instala el programa de test
$ npx autocorector             ## Pasa los tests al fichero a entregar
............................   ## en el directorio de trabajo
... (resultado de los tests)
```

Se puede pasar la herramienta de autocorrección tantas veces como se desee sin ninguna repercusión en la calificación.

## Instrucciones para la Entrega y Evaluación.

Una vez satisfecho con su calificación, el alumno puede subir su entrega a Moodle con el siguiente comando:
```
$ autocorector --upload
```
o, si se ha instalado como paquete local:
```
$ npx autocorector --upload
```

La herramienta de autocorrección preguntará por el correo del alumno y el token de Moodle. En el enlace [https://www.npmjs.com/package/autocorector](https://www.npmjs.com/package/autocorector) se proveen instrucciones para encontrar dicho token.

