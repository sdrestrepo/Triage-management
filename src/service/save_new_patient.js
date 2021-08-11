const patientRepository = require("../repository/patient-repository");

const saveANewPatient = (data) => {
    return patientRepository.save(data);
};

module.exports = {
    saveANewPatient
};



