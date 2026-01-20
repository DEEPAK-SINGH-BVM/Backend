// import { Link, Outlet, useNavigate } from "react-router-dom";

// const SuperDashboard = () => {
//   // const navigate = useNavigate();
//   //  const handleLogout = () => {
//   //    localStorage.removeItem("token");
//   //    navigate("/login");
//   //  };

//   return (
//     <div>
//       {/* <button onClick={handleLogout}>LogOut</button><br /> */}
//       Super Admin Dashboard
//       <Outlet/>
//     </div>
//   );
// };

// export default SuperDashboard;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const SuperDashboard = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [firstName, setFirstName] = useState("");
  console.log(firstName, "Name");
  const [lastName, setLastName] = useState("");
  console.log(lastName, "Name");
  const [email, setEmail] = useState("");
  console.log(email, "Email");
  const [password, setPassword] = useState("");
  console.log(password, "Password");
  const [gender, setGender] = useState("");
  console.log(gender, "gender");
  const [role, setRole] = useState("");
  const [editUser, setEditUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    role: "",
  });
  console.log("EditUser", editUser);

  const [editUserId, setEditUserId] = useState(null);
  console.log("editUser", editUser);
  const navigate = useNavigate();
  console.log("editUserId===", editUserId);

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
      console.log("response", response);
    } catch (error) {
      console.log("Error to get user", error);
    }
  };

  useEffect(() => {
    fetchUser(page);
  }, [page, limit]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:7070/users/signup", {
      firstName,
      lastName,
      email,
      password,
      gender,
      role,
    });
    console.log("response:",response);
  };

  const handleEdit = (user) => {
    setEditUserId(user._id);
    setEditUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      role: user.role,
    });
    console.log("ID:", user._id);
    console.log("Name:", user.firstName);
    console.log("Email:", user.email);
  };

  const handleUpdate = async (id) => {
    await axios.patch(`http://localhost:7070/users/${id}`, editUser);
    setEditUserId(null);
    fetchUser(page);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:7070/users/${id}`);
    fetchUser();
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <div>
        <button onClick={handleLogout} style={{fontSize:"15px", padding:"10px", backgroundColor:"lightblue", border:"none", borderRadius:"5px", cursor:"pointer"}}>LogOut</button>
        <div style={{display:"flex", justifyContent:"center"}}>
          <h2>Super DashBoard</h2>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Password : </label>
          <input
            type="text"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">user</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Super Admin</option>
          </select>
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
      </div>
      <br />
      <div id="table">
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
              <th style={{ border: "1px solid black", padding: "8px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((p) => (
              <tr key={p._id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <input
                      value={editUser.firstName}
                      onChange={(e) =>
                        setEditUser({ ...editUser, firstName: e.target.value })
                      }
                    />
                  ) : (
                    p.firstName
                  )}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <input
                      value={editUser.lastName}
                      onChange={(e) =>
                        setEditUser({ ...editUser, lastName: e.target.value })
                      }
                    />
                  ) : (
                    p.lastName
                  )}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <input
                      value={editUser.email}
                      onChange={(e) =>
                        setEditUser({ ...editUser, email: e.target.value })
                      }
                    />
                  ) : (
                    p.email
                  )}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <input
                      value={editUser.gender}
                      onChange={(e) =>
                        setEditUser({ ...editUser, gender: e.target.value })
                      }
                    />
                  ) : (
                    p.gender
                  )}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <input
                      value={editUser.role}
                      onChange={(e) =>
                        setEditUser({ ...editUser, role: e.target.value })
                      }
                    />
                  ) : (
                    p.role
                  )}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {editUserId == p._id ? (
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleUpdate(p._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                  )}
                  <button onClick={() => handleDelete(p._id)}>Delete</button>
                </td>
              </tr>
            ))}
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