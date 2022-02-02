/* eslint-disable no-invalid-this*/
/* eslint-disable no-undef*/
// IMPORTS
const path = require("path");
const Utils = require("./testutils");

const path_assignment = path.resolve(path.join(__dirname, "../", "sample.html"));
const URL = `file://${path_assignment.replace("%", "%25")}`;
const browser = new Browser({"waitDuration": 100, "silent": true});

// CRITICAL ERRORS
let error_critical = null;


// TESTS
describe("Sample test", function () {
    it("1(Precheck): Comprobando que existe el fichero de la entrega...", async function () {
        this.name = "";
        this.score = 0;
        this.msg_ok = `Encontrado el fichero '${path_assignment}'`;
        this.msg_err = `No se encontró el fichero '${path_assignment}'`;
        const fileexists = await Utils.checkFileExists(path_assignment);

        if (!fileexists) {
            error_critical = this.msg_err;
        }
        fileexists.should.be.equal(true);
    });

    it("2(Precheck): Comprobando que el fichero contiene HTML válido...", async function () {
        this.score = 0;
        if (error_critical) {
            this.msg_err = error_critical;
        } else {
            this.msg_ok = `El fichero '${path_assignment}' se ha parseado correctamente`;
            this.msg_err = `Error al parsear '${path_assignment}'`;
            const [error_nav] = await Utils.to(browser.visit(URL));

            if (error_nav) {
                this.msg_err = `Error al parsear '${path_assignment}': ${error_nav}`;
                error_critical = this.msg_err;
            }
        }
        should.not.exist(error_critical);
    });

    it("3: Comprobando que el fichero contiene el texto 'Esto es un fichero HTML'...", async function () {
        this.score = 10;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            const [error_nav] = await Utils.to(browser.visit(URL));

            if (error_nav) {
                this.msg_err = `Error al abrir el fichero ${path_assignment}
                Error: ${error_nav}
                Recibido: ${browser.text("body")}`;
            }
            const expected = "Esto es un fichero HTML";

            this.msg_err = "No se encuentra el texto 'Esto es un fichero HTML'";
            this.msg_ok = "La información acerca de la película se muestra correctamente";

            Utils.search(expected, browser.text("body")).should.be.equal(true);
        }
    });
});
