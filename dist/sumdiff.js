"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const applicazione = (0, express_1.default)();
app.get('/sum/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const sum = n1 + n2;
    return res.send(sum);
});
app.get('/diff/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.n1);
    const num2 = Number(req.params.n2);
    const diff = n1 - n2;
    return res.send(diff);
});
applicazione.listen(4000, () => {
    console.log('Web Server avviato su http://localhost:4000');
});
