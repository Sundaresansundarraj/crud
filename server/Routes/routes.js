const express = require('express');
const router = express.Router();
const myController = require('../Controller/myController');

router.post('/data', myController.createData);
router.get('/data', myController.getAllData);
router.put('/data/:id', myController.updateData);
router.delete('/data/:id', myController.deleteData);

module.exports = router;
