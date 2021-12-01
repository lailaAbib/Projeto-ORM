const express = require('express');
const http = require('http');

const operadoraRoutes = require('./api/routes/operadoraRoutes.js');
const telefoneRoutes = require('./api/routes/telefoneRoutes.js')

require('./database/indexDb.js');

const app = express();

app.set('porta', 3336);
app.set('url', 'http://localhost:');

app.use(express.json());

app.use(operadoraRoutes);
app.use(telefoneRoutes);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});