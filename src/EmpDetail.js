import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/employee/"+empid)
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
      {empdata && 
        <h1>
          The employee name is: {empdata.name} ({empdata.id})
        </h1>
      }
    </div>
  );
};

export default EmpDetail;
