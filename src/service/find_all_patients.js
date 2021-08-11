const patientRepository = require('../repository/patient-repository');

const findAllPatients = (pageSize, pageNumber) => {
    return patientRepository.findAll(pageSize, pageNumber)

};

module.exports = {
    findAllPatients
};