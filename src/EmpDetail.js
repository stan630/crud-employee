import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res, req) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div className="container">
        
      <div className="card-row" style={{"textAlign": "left"}}>
        {/* <div className="card-title">
            <h2>Create Employee</h2>
        </div> */}
        <div className="card-body"></div>
      

      {empdata && 
        <div className="details">
          <h2>
            The employee name is: <b>{empdata.name}</b>({empdata.id})
          </h2>
          <h3>Contact Details</h3>
          
          <h5>Address: {empdata.address}</h5>
          <h5>City: {empdata.city}</h5>
          <h5>State: {empdata.state}</h5>
          <h5>Zip: {empdata.zip}</h5>
          <h5>Phone: {empdata.phone}</h5>
          <Link className="btn btn-danger" to="/">
            {" "}
            Back to listing
          </Link>
        </div>      
        }
        </div>
        </div>
      
    </div>
  );
};

export default EmpDetail;
