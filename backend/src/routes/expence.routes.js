const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expence.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);

router.post('/addExpenses', expenseController.addExpence);
router.delete('/deleteExpence/:id', expenseController.deleteExpense);
router.put('/editExpence/:id', expenseController.editExpence);
router.get('/readExpence/:id', expenseController.readExpence);
router.get('/allExpence', expenseController.allExpence);
router.get('/readExpenceByTwoDates', expenseController.readExpenceByTwoDates);
router.get('/readExpenceByDate', expenseController.readExpenceByDate);


module.exports = router;