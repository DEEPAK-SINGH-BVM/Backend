// import { Outlet, useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   // const navigate = useNavigate();
//   // const handleLogout = () => {
//   //   localStorage.removeItem("token");
//   //   navigate("/login");
//   // };
//   return (
//     <>
//       <div>UserDashboard</div>
//       {/* <button onClick={handleLogout}>LogOut</button> */}
//       <Outlet />
//     </>
//   );
// };

// export default UserDashboard;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const SuperDashboard = () => {
  const [user, setUser] = useState([]);
  console.log("user",user);
  
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate();

  const fetchUser = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:7070/users?page=${pageNumber}&limit=${limit}`,
        // http://localhost:7070/users?page=2&limit=5
        // /users : endPoint , ? : start a Query Parameter , page=2 : current page number , limit=5 : user as per page
      );
      // const response = await axios.get(`http://localhost:7070/users`);
      setUser(response.data.users);
      setTotalPage(response.data.totalPages);
      console.log("response", response.data);
    } catch (error) {
      console.log("Error to get user", error);
    }
  };

  useEffect(() => {
    fetchUser(page);
  }, [page, limit]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div>
        <button
          onClick={handleLogout}
          style={{
            fontSize: "15px",
            padding: "10px",
            backgroundColor: "lightblue",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          LogOut
        </button>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>User DashBoard</h2>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "larger",
        }}
      >
        <table>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                First Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Last Name
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Email
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Gender
              </th>
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((p) => {
              console.log("role", p.role);
              if (p.role === "user") {
                return (
                  <tr key={p._id}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {p.firstName}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {p.lastName}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {p.email}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {p.gender}
                    </td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>
                      {p.role}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          <br />
          <div style={{ display: "flex", gap: "14px" }}>
            <select
              value={limit}
              onChange={(e) => {
                console.log("value", e.target.value);
                setLimit(e.target.value);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <button disabled={page == 1} onClick={() => setPage(page - 1)}>
              <ChevronLeftIcon width={"15px"} />
            </button>

            <span>
              Page {page} of {totalPage}
            </span>

            <button
              disabled={page == totalPage}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRightIcon width={"15px"} />
            </button>
          </div>
        </table>
      </div>
    </div>
  );
};

export default SuperDashboard;