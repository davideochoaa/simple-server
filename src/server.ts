import express from "express"; //inizializza il server tramite l'import di express
// `
const app = express(); //

let cnt = 0;

app.get('/', (req, res) => {
    const minus = Number(req.query.minus);
    if (Number.isInteger(minus)) {
        cnt -= minus;
    } else {
        cnt += 1;
    }
    console.log(req.query);
    return res.send(`
    <h1>Ciaoo!</h1>
    <p>Questo è il nostro primo server</p>
    <p> Numero di accessi : ${cnt} </p>
    `)
});

/*app.get('/greeting/:name', (req,res) => {// quando dentro mettiamo i due punti, express matcha qualunque cosa all'interno di greeting
    console.log(req.params);
    const name: string = req.params.name;
    return res.send("ciao", ${name});
});*/

app.get('/ciao', (req,res) => {
    return res.send("<h1>Questa è la pagina ciao</h1>")
})

app.get('*',(req,res) => {//ritornare errore 404
    return res.status(404).send("<h1>404</h1> <p>pagina, non trovata!</p>")
})
app.listen(3000, () => { //Abilita il server sulla porta 3000
    console.log('Server avviato su http://localhost:3000'); //se andrà a buon fine vedremmo questo messaggio sul terminale
});// per avviare il server basta scrivere sul termina "ts-node src/server.ts"
