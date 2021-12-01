const express = require('express');
const router = express.Router();

const operadoraControllers = require('../controllers/operadoraControllers.js');

// router.get('/', (req, res) => {
//     return res.json('Rota raiz Encontrada')
// });

router.get('/operadora', operadoraControllers.index);

router.post('/operadora', operadoraControllers.store);

router.put('/operadora/:codigo', operadoraControllers.update);

router.delete('/operadora/:codigo', operadoraControllers.delete);

module.exports = router;