import React, { useEffect } from "react";

const DirectoryTableRow = ({ indexPos, item }) => {
  let { 
    lastName,
    firstName,
    title,
    phone,
    departmentName: department,
  } = item;


  return (
    <tr>
      <th scope="row">{indexPos}</th>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{title}</td>
      <td>{phone}</td>
      <td>{department}</td>
    </tr>
  )
};

const DirectoryTable = ({data}) => {
  if (!data || !Array.isArray(data)) return null;

  if (!data[0].departmentName) {
    return <div className="alert alert-warning" role="alert">Your data is missing the department name. Make sure the api is returning this in the response</div>
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Last Name</th>
          <th scope="col">First Name</th>
          <th scope="col">Title</th>
          <th scope="col">Phone</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index) => {
            return <DirectoryTableRow key={index} indexPos={index + 1} item={item} />
          })
        }
      </tbody>
    </table>
  );
};

export default DirectoryTable;