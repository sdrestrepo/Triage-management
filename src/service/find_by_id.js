const patientRepository = require('../repository/patient-repository');

const findById = (id) => patientRepository.findById(id);

module.exports = {
  findById,
};
