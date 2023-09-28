const express = require('express');
const app = express();
const port = 8018; 

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.get('/login2.html', (req, res) => {
res.sendFile(__dirname + '/login2.html');
});

app.get('/style.css', (req, res) => {
res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', (req, res) => {
res.sendFile(__dirname + '/script.js');
});

app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});
