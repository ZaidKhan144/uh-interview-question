import React, { useEffect } from "react";

const DirectoryGridItem = ({ indexPos, item }) => {
  let { 
    pictureUrl,
    lastName,
    firstName,
    title,
    phone,
    departmentName,
    departmentId,
    building,
    email,
    mailcode,
    mailingAddress,
    roomNumber,
  } = item;




  return (
    <div className="col">
      <div className="card h-100">
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{firstName} {lastName}</h2>
          <p className="card-text">{title}
            <br/><a href={`https://www.uh.edu/search/directory/offices.php?mod=content_offices&amp;dpt=${departmentId}`}>{departmentName}</a>
            <br/><a href={`mailto:${email}`}>{email}</a>
            <br/><a href={`tel:${phone}`}>{phone}</a></p>
          <p className="card-text">Mailcode: {mailcode}
          <br/>Mailing Address: {mailingAddress}
          <br/>Building: {building}
          <br/>Room #: {roomNumber}</p>
        </div>
      </div>
    </div>
  )
};

const DirectoryGrid = ({data}) => {
  if (!data || !Array.isArray(data)) return null;

  if (!data[0].departmentName) {
    return <div className="alert alert-warning" role="alert">Your data is missing the department name. Make sure the api is returning this in the response</div>
  }

  return (
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 mb-5">
      {
        data.map((item, index) => {
          return <DirectoryGridItem key={index} indexPos={index + 1} item={item} />
        })
      }
    </div>
  );
};

export default DirectoryGrid;