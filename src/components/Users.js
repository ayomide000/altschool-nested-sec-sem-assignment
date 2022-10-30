import React from "react";
import Paginations from "./Paginations";
// import { useState, useEffect } from "react";
// import axios from "axios";

const Users = ({
  users,
  usersPerPage,
  paginate,
  totalPosts,
  nPages,
  currentPage,
  setCurrentPage,
  nextPage,
  prevPage,
  loading,
}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="container-fluid text-center mt-5">
        <div className="row">
          {/* <div className="col-12 col-lg-4 col-md-6"> */}
          {users.map((user) => {
            return (
              <div key={user.id} className="col-lg-4 col-sm-12 col-md-6">
                <div
                  className="card bg-dark text-center border-card border-danger"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={user.picture.large}
                    className="card-img-center rounded-circle text-center"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 class="card-title">
                      {" "}
                      Name: {user.name.title} {user.name.first} {""}{" "}
                      {user.name.last}
                    </h6>
                    <p className="card-text">Gender: {user.gender}</p>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">
                      Location: {user.location.country}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Paginations
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        usersPerPage={usersPerPage}
        totalPosts={6}
        paginate={paginate}
      />
    </>
  );
};

export default Users;
