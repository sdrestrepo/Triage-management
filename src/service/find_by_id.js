const patientRepository = require('../repository/patient-repository');

const findById = (id) => {
    return patientRepository.findById(id);

};

module.exports = {
    findById
};