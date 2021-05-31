var express = require('express');
var router = express.Router();
const controller = {
  campains: require('../controllers/campain')(),
  goals: require('../controllers/goal')(),
  sales: require('../controllers/sale')(),
  revenues: require('../controllers/revenues')()
};

/* GET sales by period. */
router.get('/vendas', controller.sales.get);

/* GET revenues by period. */
router.get('/faturamento', controller.revenues.get);

/* GET campains. */
router.get('/campanhas', controller.campains.get);

/* GET goals. */
router.get('/metas', controller.goals.get);

module.exports = router;
