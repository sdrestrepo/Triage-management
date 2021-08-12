const patientRepository = require('../repository/patient-repository');

const saveANewPatient = (data) => patientRepository.save(data);

module.exports = {
  saveANewPatient,
};
