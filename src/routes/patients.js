const router = require('express').Router();

const patientsController = require('../controllers/patientsController');

router.get('/patients', patientsController.list);
router.get('/patients/:id', patientsController.findById);
router.post('/patients', patientsController.save);
router.patch('/patients/:id', patientsController.update);
router.delete('/patients/:id', patientsController.deletePatient);

module.exports = router;
