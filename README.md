
<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">

<br/><br/><br/>

# Entrega 3 - Calculadora JS

Versión: 2 de Febrero de 2022

## Objetivo

Practicar con expresiones básicas, variables, asignaciones, if…else, switch…case, bucles, los tipos number, string, boolean, eventos sencillos, arrays, así como con objetos DOM y Date.

## Descripción de la práctica

En esta entrega vamos a desarrollar una aplicación web de calculadora. Para comenzar el desarrollo partimos de la versión básica de la calculadora, cuyo código se proporciona al alumno. Las instrucciones para obtener este código están en el siguiente apartado. Sobre éste, el alumno tendrá que implementar las operaciones que faltan, las cuales se indican en el apartado "Tareas".

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

### 1. Desarrollo de página básica y campo input:
* Cree en el directorio del proyecto un archivo nuevo y pongale el nombre "index.html". En dicho archivo cree la estructura básica de una página HTML y en el body añada un campo input de tipo texto y de id "pantalla".
* Añada un botón (button) que tenga el id "cuadrado" que llama a una función de nombre cuadrado() que calcula el cuadrado del número que el usuario ha escrito en el campo input y escribe el resultado en el mismo input.

### 2. Operaciones unitarias:
  * Añada un nuevo botón a la calculadora. Este botón tendrá un id &quot;factorial&quot; y llamará a una función fact(). Dicha función calcula el factorial del número X introducido en el input y pone el resultado del cálculo en el mismo input. Factorial = X\*(X-1)\*(X-2)\*…\*3\*2\*1, (calcularlo con un bucle for)

### 3. Operaciones binarias:
Las operaciones binarias (suma, resta, multiplicación, división, resto y potencia) consisten en dos operandos, un operador y se debe pulsar el signo igual para obtener el resultado. El funcionamiento sería como el de cualquier calculadora. Se introduce un primer número, se pulsa la operación, se introduce un segundo número y se pulsa el signo igual.

Consejos para el desarrollo: Tenemos dos pulsaciones a botones. Primera, al pulsar cualquier operador binario, debe invocarse una función, que guarde en variables globales, tanto el número tecleado en el input, como un string indicando el operador pulsado (las variables globales son visibles dentro de todas las funciones del script y puedan utilizarse para pasar valores de una función a otra). Al pulsar el botón con el signo &quot;_=&quot;_ debe invocarse una nueva función que calcule el resultado, realizando la operación indicada por el operador guardado, utilizando el primer número (guardado en la variable global) y el segundo número que debe estar en el input.

  * Añada un nuevo operador binario para hacer una multiplicación y otro para hacer una suma (el resto de operadores binarios se dejan opcionales). Con esto aparecen 3 botones nuevos. El primero debe tener id &quot;multiplicacion&quot; y llamar a una función mul() que como se ha explicado guarda el valor del input y el operador (en este caso multiplicación) en variables globales. El segundo debe tener el id &quot;suma&quot; y llamar a la función add() que guardará también lo necesario. El tercero debe tener el id &quot;igual&quot; y llamar a la función eq() que hará el cálculo adecuado según se haya pulsado antes en multiplicar o sumar y mostrará el resultado calculado en el input. La función eq() si se pulsa repetidamente no hace nada, es decir solo hace el cálculo si se ha usado antes la multiplicación o la suma.

### 4. Operaciones en formato CSV (Comma Separated Values)

La calculadora debe incluir operaciones con varios operandos en formato CSV, es decir valores separados por comas, por ejemplo &quot;5,7,9,1&quot;.

  * Añada un nuevo botón 'sumatorio' tiene que tener un id &quot;sumatorio&quot; y llamar a una función sumatorio() que calcula la suma de los elementos introducidos en el input. Para un input relleno con &quot;5,7,9,1&quot; al hacer click en el botón &quot;sumatorio&quot; el input pasaría a tener el valor 22 (la suma de todos los números 5+7+9+1).


### 5. Campo informativo:

Añada al documento HTML un nuevo elemento mediante la etiqueta 	&lt;h2&gt; con identificador &quot;info&quot;, clase &quot;grande&quot;, un atributo &quot;title&quot; con valor &quot;Info sobre el número&quot; y contenido inicialmente &quot;Info sobre el número&quot;.

El contenido de dicho elemento &lt;h2&gt; se debe actualizar cada vez que se hace un cálculo en la calculadora. Su contenido debe ser &quot;Info: El resultado es menor que 100&quot;, &quot;Info: El resultado está entre 100 y 200&quot; o &quot;Info: El resultado es superior a 200&quot; según sea el resultado del cálculo que muestre el input.

Recomendamos hacer esta funcionalidad en una función específica (de nombre por ejemplo rellenar_info) que llamemos cada vez que sea necesario, así se rellenará la información para todas las operaciones desarrolladas.

### 6. Tratamiento de errores

Queremos que la calculadora sea un poco más robusta y funcione independientemente de lo que introduzca el usuario. Para ello tendremos que validar la entrada antes de hacer las operaciones y mostrar un error en caso de que lo introducido por el usuario no sea válido.

  * Implemente la funcionalidad de tratamiento de errores. Para ello debe validar la entrada del usuario antes de hacer cualquier operación. Cree una función validar() y utilícela en todas las funciones que realizan operaciones. Dicha función debe coger el valor del input y comprobar que es algo soportado por la calculadora. Si es así realiza la operación, si no es algo soportado muestra &quot;Error&quot; en el input.

  La calculadora debe soportar números enteros y decimales con el punto (positivos y negativos), y también listas de dichos números en formato CSV (separados por comas).



## Consideraciones adicionales y recomendaciones

Todas las funciones que se definan y utilicen deben utilizar la notación arrow.

Se recomienda añadir algún separador adicional a los grupos de botones como muestra la imagen de ejemplo de la calculadora, así como un poco de CSS para darle algo de estilo.

El texto que contienen los botones queda a elección del alumno. Es decir el botón suma podrá contener la palabra suma o el signo +, etc.


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

