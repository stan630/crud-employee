import React from "react"
import { useEffect } from "react"

const EmpListing = () =>{
    useEffect (() => {
        fetch("http://localhost:8000/employee").then((res,req) => {
            return res.json()
        }).then((resp) => {
            console.log(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    },[])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <table className="table table-border">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    )
}

export default EmpListing