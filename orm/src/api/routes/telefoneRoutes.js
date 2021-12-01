const express = require('express');
const router = express.Router();

const telefoneControllers = require('../controllers/telefoneControllers.js');

// router.get('/', (req, res) => {
//     return res.json('Rota raiz Encontrada')
// });

router.get('/telefone', telefoneControllers.index);

router.post('/telefone', telefoneControllers.store);

router.put('/telefone/:codigo', telefoneControllers.update);

router.delete('/telefone/:codigo', telefoneControllers.delete);

module.exports = router;