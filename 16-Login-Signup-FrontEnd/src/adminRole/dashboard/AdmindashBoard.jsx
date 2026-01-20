// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/solid";
// const AdmindashBoard = () => {
//   const [user, setUser] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPage, setTotalPage] = useState(1);
//   const [limit, setLimit] = useState(5);
//   const [editUser, setEditUser] = useState({ name: "", email: "" });
//   console.log("EditUser", editUser);



//   const [editUserId, setEditUserId] = useState(null);
//   console.log("editUser", editUser);
//   const navigate = useNavigate();
//   console.log("editUserId===", editUserId);

//   const fetchUser = async (pageNumber) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:7070/users?page=${pageNumber}&limit=${limit}`
//         // http://localhost:7070/users?page=2&limit=5
//         // /users : endPoint , ? : start a Query Parameter , page=2 : current page number , limit=5 : user as per page
//       );
//       // const response = await axios.get(`http://localhost:7070/users`);
//       setUser(response.data.users);
//       setTotalPage(response.data.totalPages);
//       console.log("response", response);
//     } catch (error) {
//       console.log("Error to get user", error);
//     }
//   };

//   useEffect(() => {
//     fetchUser(page);
//   }, [page, limit]);

//   const handleEdit = (user) => {
//     setEditUserId(user._id);
//     setEditUser({ name: user.name, email: user.email });
//     console.log("ID:", user._id);
//     console.log("Name:", user.name);
//     console.log("Email:", user.email);
//   };

//   const handleUpdate = async (id) => {
//     await axios.patch(`http://localhost:7070/users/${id}`, editUser);
//     setEditUserId(null);
//     fetchUser(page);
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:7070/users/${id}`);
//     fetchUser();
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };
//   return (
//     <div>
//       <div>
//         <h2>DashBoard</h2>
//         <button onClick={handleLogout}>LogOut</button>
//       </div>
//       <br />
//       <table>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
//             <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
//             <th style={{ border: "1px solid black", padding: "8px" }}>
//               Action
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {user.map((p) => (
//             <tr key={p._id}>
//               <td style={{ border: "1px solid black", padding: "8px" }}>
//                 {editUserId == p._id ? (
//                   <input
//                     value={editUser.name}
//                     onChange={(e) =>
//                       setEditUser({ ...editUser, name: e.target.value })
//                     }
//                   />
//                 ) : (
//                   p.name
//                 )}
//               </td>
//               <td style={{ border: "1px solid black", padding: "8px" }}>
//                 {editUserId == p._id ? (
//                   <input
//                     value={editUser.email}
//                     onChange={(e) =>
//                       setEditUser({ ...editUser, email: e.target.value })
//                     }
//                   />
//                 ) : (
//                   p.email
//                 )}
//               </td>
//               <td style={{ border: "1px solid black", padding: "8px" }}>
//                 {editUserId == p._id ? (
//                   <button
//                     style={{ marginRight: "5px" }}
//                     onClick={() => handleUpdate(p._id)}
//                   >
//                     Save
//                   </button>
//                 ) : (
//                   <button
//                     style={{ marginRight: "5px" }}
//                     onClick={() => handleEdit(p)}
//                   >
//                     Edit
//                   </button>
//                 )}
//                 <button onClick={() => handleDelete(p._id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <br />
//         <div style={{ display: "flex", gap: "14px" }}>
//           <select
//             value={limit}
//             onChange={(e) => {
//               console.log("value", e.target.value);
//               setLimit(e.target.value);
//             }}
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={25}>25</option>
//             <option value={50}>50</option>
//           </select>
//           <button disabled={page == 1} onClick={() => setPage(page - 1)}>
//             {/* Prev */}
//             <ChevronLeftIcon width={"15px"} />
//           </button>

//           <span>
//             Page {page} of {totalPage}
//           </span>

//           <button
//             disabled={page == totalPage}
//             onClick={() => setPage(page + 1)}
//           >
//             {/* Next */}
//             <ChevronRightIcon width={"15px"} />
//           </button>
//         </div>
//       </table>
//     </div>
//   );
// };

// export default AdmindashBoard;
import { Outlet, useNavigate } from "react-router-dom"; 

const AdmindashBoard = () => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };
  return (
    <>
      <div>AdmindashBoard</div>
      {/* <button onClick={handleLogout}>LogOut</button> */}
      <Outlet/>
    </>
  );
};

export default AdmindashBoard;
