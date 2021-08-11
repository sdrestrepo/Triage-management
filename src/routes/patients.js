const router = require("express").Router();

const patientsController = require("../controllers/patientsController");

router.get("/", patientsController.list);
router.get("/find-by-id/:id", patientsController.findById);
router.post("/new-patient", patientsController.save);
router.patch("/update-patient/:id", patientsController.update);
router.delete("/delete-patient/:id", patientsController.deletePatient);

module.exports = router;
