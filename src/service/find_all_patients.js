const patientRepository = require('../repository/patient-repository');

const findAllPatients = (pageSize, pageNumber) => patientRepository.findAll(pageSize, pageNumber);

module.exports = {
  findAllPatients,
};
