const db = require('../db.js');

exports.createOne = ({ departmentId, pictureUrl, firstName, lastName, title, email, phone, mailcode, mailingAddress, building, roomNumber }) => {
  const vals = [departmentId, pictureUrl, firstName, lastName, title, email, phone, mailcode, mailingAddress, building, roomNumber];
  return db.queryAsync(
    `INSERT INTO directories (departmentId, pictureUrl, firstName, lastName, title, email, phone, mailcode, mailingAddress, building, roomNumber)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, vals);
};

exports.findAll = async () => {
  try {
    const query = `
      SELECT 
        d.pictureUrl,
        d.firstName,
        d.lastName,
        d.title,
        d.email,
        d.phone,
        d.mailcode,
        d.mailingAddress,
        d.building,
        d.roomNumber,
        dep.departmentName
      FROM 
        directories d
      JOIN 
        departments dep
      ON 
        d.departmentId = dep.departmentId;
    `;
    const [rows] = await db.queryAsync(query);
    return rows;
  } catch (err) {
    console.error("Method not implemented", err);
    throw err;
  }
};