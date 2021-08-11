const pool = require("../connection");
const Patient = require("../model/patient");

findAll = (pageNumber, pageSize) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM patients ORDER BY priority ASC, entry_time ASC LIMIT ?, ?",
      [pageNumber, pageSize],
      (error, rows) => {
        if (error) {
          return reject(error);
        }
        const result = rows.map(
          (row) =>
            new Patient(
              row.id,
              row.name,
              row.lastName,
              row.identification,
              row.priority,
              row.entry_time
            )
        );
        return resolve(result);
      }
    );
  });
};

findById = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM patients WHERE id = ?", [id], (error, rows) => {
      if (error) {
        return reject(error);
      }
      if (rows == undefined || rows.length == 0) {
        return resolve(undefined);
      }
      const result = new Patient(
        rows[0].id,
        rows[0].name,
        rows[0].lastName,
        rows[0].identification,
        rows[0].priority,
        rows[0].entry_time
      );
      return resolve(result);
    });
  });
};

save = (data) => {
  return new Promise((resolve, reject) => {
    pool.query("INSERT INTO patients set ?", [data], (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
};

update = async (id, newData) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE patients SET ? WHERE id = ?",
      [newData, id],
      (error, rows) => {
        if (error) {
          return reject(error);
        }
        return resolve("The patient has been update");
      }
    );
  });
};

deletePatient = async (id) => {
  return new Promise((resolve, reject) => {
    pool.query("DELETE FROM patients WHERE id = ?", [id], (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve("The patient has been deleted");
    });
  });
};

module.exports = {
  findAll,
  save,
  update,
  deletePatient,
  findById,
};
