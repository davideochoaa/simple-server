"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //inizializza il server tramite l'import di express
// `
const app = (0, express_1.default)(); //
let cnt = 0;
app.get('/', (req, res) => {
    const minus = Number(req.query.minus);
    if (Number.isInteger(minus)) {
        cnt -= minus;
    }
    else {
        cnt += 1;
    }
    console.log(req.query);
    return res.send(`
    <h1>Ciaoo!</h1>
    <p>Questo è il nostro primo server</p>
    <p> Numero di accessi : ${cnt} </p>
    `);
});
/*app.get('/greeting/:name', (req,res) => {// quando dentro mettiamo i due punti, express matcha qualunque cosa all'interno di greeting
    console.log(req.params);
    const name: string = req.params.name;
    return res.send("ciao", ${name});
});*/
app.get('/ciao', (req, res) => {
    return res.send("<h1>Questa è la pagina ciao</h1>");
});
app.get('*', (req, res) => {
    return res.status(404).send("<h1>404</h1> <p>pagina, non trovata!</p>");
});
app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000'); //se andrà a buon fine vedremmo questo messaggio sul terminale
}); // per avviare il server basta scrivere sul termina "ts-node src/server.ts"
