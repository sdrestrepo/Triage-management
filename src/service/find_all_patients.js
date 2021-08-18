const patientRepository = require('../repository/patient-repository');

const findAllPatients = (pageSize, pageNumber) => {
  const result = patientRepository.findAll(pageSize, pageNumber);
  return result;
};
module.exports = {
  findAllPatients,
};
