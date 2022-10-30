import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import NotFound from "./components/NotFound";
import Description from "./components/Description";
import NestedPage from "./components/NestedPage";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("https://randomuser.me/api/?results=120");
      const data = await response.json();
      setUsers(data.results);
      console.log(data.results);
      setLoading(false);
    };

    getData();
  }, []);

  console.log(users);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const nPages = Math.ceil(users.length / usersPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 1) {
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="container-fluid bg-dark text-light">
      <Navbar />

      <Routes className="container-fluid">
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="description" element={<Description />} />
          <Route path="nest-page" element={<NestedPage />} />
        </Route>
        <Route
          className="container-fluid"
          path="users"
          element={
            <Users
              users={currentUsers}
              loading={loading}
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              nextPage={nextPage}
              prevPage={prevPage}
              usersPerPage={usersPerPage}
              totalPosts={users.length}
              paginate={paginate}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
