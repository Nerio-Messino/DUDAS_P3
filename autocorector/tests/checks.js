// IMPORTS
const path = require('path');
const Utils = require('../utils/testutils');

// CRITICAL ERRORS
let error_critical = null;

// CONSTANTS
const T_TEST = 2 * 60; // Time between tests (seconds)
const browser = new Browser({waitDuration: 100, silent: true});
const path_assignment = path.resolve(path.join(__dirname, "../../index.html"));
const URL = "file://" + path_assignment.replace("%", "%25");

function assign(){
    try {
      browser.evaluate(`
        (function assign(){ 
          try { window.sq = sq; } catch (e){}
          try { window.fact = fact; } catch (e){}
          try { window.add = add; } catch (e){}
          try { window.sub = sub; } catch (e){}
          try { window.div = div; } catch (e){}
          try { window.mul = mul; } catch (e){}
          try { window.eq = eq; } catch (e){}
        })()`);
    } catch(e) {
      console.log("ERROR evaluando funciones creadas en el browser de ZombieJS", e);
    }
 }

//TESTS
describe("TEST SUITE DE LA Calculadora DE CORE", function () {
  describe('COMPROBACIONES PREVIAS', function() {
    this.timeout(T_TEST * 1000);

    it('(Precheck): Comprobando que existe el fichero de la entrega...', async function () {
        this.score = 0;
        this.msg_ok = `Encontrado el fichero '${path_assignment}'`;
        this.msg_err = `No se encontró el fichero '${path_assignment}'`;
        const fileexists = await Utils.checkFileExists(path_assignment);
        if (!fileexists) {
            error_critical = this.msg_err;
        }
        fileexists.should.be.equal(true);
    });

    it('(Precheck): Comprobando que el fichero contiene HTML válido...', async function () {
        this.score = 0;
        if (error_critical) {
            this.msg_err = error_critical;

        } else {
            this.msg_ok = `El fichero '${path_assignment}' se ha parseado correctamente`;
            this.msg_err = `Error al parsear '${path_assignment}'`;
            [error_nav, resp] = await Utils.to(browser.visit(URL));
            if (error_nav) {
                this.msg_err = `Error al parsear '${path_assignment}': ${error_nav}`;
                error_critical = this.msg_err;
            }
        }
        should.not.exist(error_critical);
    });
  });

  describe('1. ESTRUCTURA DE PAGINA Y CAMPO INPUT', function() {
    before(async function() {
      if (error_critical) {
          this.msg_err = error_critical;
          should.not.exist(error_critical);
      } else {
          [error_nav, resp] = await Utils.to(browser.visit(URL));
          if (error_nav) {
              this.msg_err = `Error al abrir el fichero ${path_assignment}
              Error: ${error_nav}
              Recibido: ${browser.text('body')}`;
          }
          assign();
        }
      });

      it('a: Comprobando que existe el h2 de clase "cabecera"...', async function () {
        this.score = 0.25;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "No se encuentra el h2 con clase 'cabecera'";
        browser.assert.element('h2.cabecera');
    });

      it('b: Comprobando que existe el input de id "pantalla"...', async function () {
          this.score = 0.25;
          this.msg_ok = `Funcionalidad comprobada correctamente`;

          this.msg_err = "No se encuentra el input con id 'pantalla'";
          browser.assert.element('input#pantalla');
      });
  });

  describe('2. OPERACIONES UNITARIAS', function() {
    before(async function() {
      if (error_critical) {
          this.msg_err = error_critical;
          should.not.exist(error_critical);
      } else {
          [error_nav, resp] = await Utils.to(browser.visit(URL));
          if (error_nav) {
              this.msg_err = `Error al abrir el fichero ${path_assignment}
              Error: ${error_nav}
              Recibido: ${browser.text('body')}`;
          }
          assign();
        }
      });

      it('a: Comprobando la funcionalidad "cuadrado"...', async function () {
        this.score = 0.5;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "No se encuentra el botón con id 'cuadrado'";
        browser.assert.element('button#cuadrado');
        this.msg_err = "El botón cuadrado no funciona correctamente";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 6));
        [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
        browser.assert.input("#pantalla", 36);
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 10));
        [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
        browser.assert.input("#pantalla", 100);

    });

    it('b: Comprobando la funcionalidad "factorial"...', async function () {
        this.score = 1;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "No se encuentra el botón con id 'factorial'";
        browser.assert.element('button#factorial');
        this.msg_err = "El botón factorial no funciona correctamente";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 6));
        [error_nav, resp] = await Utils.to(browser.click('#factorial'));
        browser.assert.input("#pantalla", 720);
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 10));
        [error_nav, resp] = await Utils.to(browser.click('#factorial'));
        browser.assert.input("#pantalla", 3628800);

    });

      it('c: Comprobando la funcionalidad "raiz"...', async function () {
          this.score = 0.5;
          this.msg_ok = `Funcionalidad comprobada correctamente`;

          this.msg_err = "No se encuentra el botón con id 'raiz'";
          browser.assert.element('button#raiz');
          this.msg_err = "El botón raiz no funciona correctamente";
          [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 9));
          [error_nav, resp] = await Utils.to(browser.click('#raiz'));
          browser.assert.input("#pantalla", 3);
          [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 25));
          [error_nav, resp] = await Utils.to(browser.click('#raiz'));
          browser.assert.input("#pantalla", 5);

      });



  });

  describe('3. OPERACIONES BINARIAS', function() {
    before(async function() {
      if (error_critical) {
          this.msg_err = error_critical;
          should.not.exist(error_critical);
      } else {
          [error_nav, resp] = await Utils.to(browser.visit(URL));
          if (error_nav) {
              this.msg_err = `Error al abrir el fichero ${path_assignment}
              Error: ${error_nav}
              Recibido: ${browser.text('body')}`;
          }
          assign();
        }
      });


    it('a: Comprobando la funcionalidad "suma"...', async function () {
        this.score = 1;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "No se encuentra el botón con id 'suma'";
        browser.assert.element('button#suma');
        this.msg_err = "No se encuentra el botón con id 'igual'";
        browser.assert.element('button#igual');
        this.msg_err = "La funcionalidad de suma no funciona correctamente";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
        [error_nav, resp] = await Utils.to(browser.click('#suma'));
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 4));
        [error_nav, resp] = await Utils.to(browser.click('#igual'));
        browser.assert.input("#pantalla", 6);

    });

    it('b: Comprobando la funcionalidad "resta"...', async function () {
      this.score = 1;
      this.msg_ok = `Funcionalidad comprobada correctamente`;

      this.msg_err = "No se encuentra el botón con id 'resta'";
      browser.assert.element('button#resta');
      this.msg_err = "No se encuentra el botón con id 'igual'";
      browser.assert.element('button#igual');
      this.msg_err = "La funcionalidad de resta no funciona correctamente";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 50));
      [error_nav, resp] = await Utils.to(browser.click('#resta'));
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 40));
      [error_nav, resp] = await Utils.to(browser.click('#igual'));
      browser.assert.input("#pantalla", 10);

  });

  it('c: Comprobando la funcionalidad "multiplicacion"...', async function () {
    this.score = 1;
    this.msg_ok = `Funcionalidad comprobada correctamente`;

    this.msg_err = "No se encuentra el botón con id 'multiplicacion'";
    browser.assert.element('button#multiplicacion');
    this.msg_err = "No se encuentra el botón con id 'igual'";
    browser.assert.element('button#igual');
    this.msg_err = "La funcionalidad de multiplicacion no funciona correctamente";
    [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
    [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
    [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 4));
    [error_nav, resp] = await Utils.to(browser.click('#igual'));
    browser.assert.input("#pantalla", 8);

});

  it('d: Comprobando la funcionalidad "division"...', async function () {
    this.score = 1;
    this.msg_ok = `Funcionalidad comprobada correctamente`;

    this.msg_err = "No se encuentra el botón con id 'division'";
    browser.assert.element('button#division');
    this.msg_err = "No se encuentra el botón con id 'igual'";
    browser.assert.element('button#igual');
    this.msg_err = "La funcionalidad de division no funciona correctamente";
    [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 40));
    [error_nav, resp] = await Utils.to(browser.click('#division'));
    [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 4));
    [error_nav, resp] = await Utils.to(browser.click('#igual'));
    browser.assert.input("#pantalla", 10);

  });
});

describe('4. CAMPO INFORMATIVO', function() {
  before(async function() {
    if (error_critical) {
        this.msg_err = error_critical;
        should.not.exist(error_critical);
    } else {
        [error_nav, resp] = await Utils.to(browser.visit(URL));
        if (error_nav) {
            this.msg_err = `Error al abrir el fichero ${path_assignment}
            Error: ${error_nav}
            Recibido: ${browser.text('body')}`;
        }
        assign();
      }
    });
  it('Comprobando la funcionalidad "Campo informativo" para valores menores que 100...', async function () {
      this.score = 0.5;
      this.msg_ok = `Funcionalidad comprobada correctamente`;

      this.msg_err = "No se encuentra campo informativo, un <h2> con id 'info', clase 'grande' el title solicitado";
      browser.assert.element('h2#info.grande[title="Info sobre el número"]');

      this.msg_err = "El campo info no funciona correctamente para un resultado menor que 100";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
      [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
      browser.assert.text("h2#info", "Info: El resultado es menor que 100");

      this.msg_err = "El campo info no funciona correctamente para un resultado menor que 100";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 4));
      [error_nav, resp] = await Utils.to(browser.click('#factorial'));
      browser.assert.text("h2#info", "Info: El resultado es menor que 100");

      this.msg_err = "El campo info no funciona correctamente para un resultado menor que 100";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
      [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 4));
      [error_nav, resp] = await Utils.to(browser.click('#igual'));
      browser.assert.text("h2#info", "Info: El resultado es menor que 100");
    });
    it('Comprobando la funcionalidad "Campo informativo" para valores entre 100 y 200...', async function () {
      this.score = 0.5;
      this.msg_ok = `Funcionalidad comprobada correctamente`;

      this.msg_err = "No se encuentra campo informativo, un <h2> con id 'info', clase 'grande' el title solicitado";
      browser.assert.element('h2#info.grande[title="Info sobre el número"]');

      this.msg_err = "El campo info no funciona correctamente para un resultado entre 100 y 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 12));
      [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
      browser.assert.text("h2#info", "Info: El resultado está entre 100 y 200");

      this.msg_err = "El campo info no funciona correctamente para un resultado entre 100 y 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 5));
      [error_nav, resp] = await Utils.to(browser.click('#factorial'));
      browser.assert.text("h2#info", "Info: El resultado está entre 100 y 200");

      this.msg_err = "El campo info no funciona correctamente para un resultado entre 100 y 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 20));
      [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 6));
      [error_nav, resp] = await Utils.to(browser.click('#igual'));
      browser.assert.text("h2#info", "Info: El resultado está entre 100 y 200");
    });
    it('Comprobando la funcionalidad "Campo informativo" para valores superiores a 200...', async function () {
      this.score = 0.5;
      this.msg_ok = `Funcionalidad comprobada correctamente`;

      this.msg_err = "No se encuentra campo informativo, un <h2> con id 'info', clase 'grande' el title solicitado";
      browser.assert.element('h2#info.grande[title="Info sobre el número"]');

      this.msg_err = "El campo info no funciona correctamente para un resultado superior a 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 20));
      [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
      browser.assert.text("h2#info", "Info: El resultado es superior a 200");

      this.msg_err = "El campo info no funciona correctamente para un resultado superior a 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 6));
      [error_nav, resp] = await Utils.to(browser.click('#factorial'));
      browser.assert.text("h2#info", "Info: El resultado es superior a 200");

      this.msg_err = "El campo info no funciona correctamente para un resultado superior a 200";
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 20));
      [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
      [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 60));
      [error_nav, resp] = await Utils.to(browser.click('#igual'));
      browser.assert.text("h2#info", "Info: El resultado es superior a 200");
    });
});



  describe('5. TRATAMIENTO DE ERRORES', function() {
    before(async function() {
      if (error_critical) {
          this.msg_err = error_critical;
          should.not.exist(error_critical);
      } else {
          [error_nav, resp] = await Utils.to(browser.visit(URL));
          if (error_nav) {
              this.msg_err = `Error al abrir el fichero ${path_assignment}
              Error: ${error_nav}
              Recibido: ${browser.text('body')}`;
          }
          assign();
        }
      });
    it('Comprobando tratamiento de errores con el cuadrado', async function () {
        this.score = 0.2;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "La funcionalidad de tratamiento de errores no funciona correctamente al usar el operador cuadrado.";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', "hola"));
        [error_nav, resp] = await Utils.to(browser.click('#cuadrado'));
        browser.assert.input("#pantalla", "Error");
    });

    it('Comprobando tratamiento de errores con el factorial', async function () {
        this.score = 0.2;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "La funcionalidad de tratamiento de errores no funciona correctamente al usar el factorial.";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', "hola"));
        [error_nav, resp] = await Utils.to(browser.click('#factorial'));
        browser.assert.input("#pantalla", "Error");
    });

    it('Comprobando tratamiento de errores con la multiplicacion', async function () {
        this.score = 0.2;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "La funcionalidad de tratamiento de errores no funciona correctamente al usar la multiplicación.";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', "hola"));
        [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
        browser.assert.input("#pantalla", "Error");
    });

    it('Comprobando tratamiento de errores con el igual', async function () {
        this.score = 0.2;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "La funcionalidad de tratamiento de errores no funciona correctamente al usar el igual.";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
        [error_nav, resp] = await Utils.to(browser.click('#multiplicacion'));
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', "hola"));
        [error_nav, resp] = await Utils.to(browser.click('#igual'));
        browser.assert.input("#pantalla", "Error");
    });

    it('Comprobando tratamiento de errores con la suma', async function () {
        this.score = 0.2;
        this.msg_ok = `Funcionalidad comprobada correctamente`;

        this.msg_err = "La funcionalidad de tratamiento de errores no funciona correctamente al usar la suma.";
        [error_nav, resp] = await Utils.to(browser.fill('#pantalla', "hola"));
        [error_nav, resp] = await Utils.to(browser.click('#suma'));
        browser.assert.input("#pantalla", "Error");
    });

      it('Comprobando la funcionalidad acumulador en la suma', async function () {
          this.score = 1;
          this.msg_ok = `Funcionalidad comprobada correctamente`;

          this.msg_err = "No se encuentra el botón con id 'suma'";
          browser.assert.element('button#suma');
          this.msg_err = "No se encuentra el botón con id 'igual'";
          browser.assert.element('button#igual');
          this.msg_err = "El acumulador no funciona correctamente al usar la suma.";
          [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 2));
          [error_nav, resp] = await Utils.to(browser.click('#suma'));
          [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 3));
          [error_nav, resp] = await Utils.to(browser.click('#suma'));
          [error_nav, resp] = await Utils.to(browser.fill('#pantalla', 8));
          [error_nav, resp] = await Utils.to(browser.click('#igual'));
          browser.assert.input("#pantalla", 13);
      });

  });


    after(async function() {
        try {
            await browser.tabs.closeAll();
        } catch(e) {}
    });
});
