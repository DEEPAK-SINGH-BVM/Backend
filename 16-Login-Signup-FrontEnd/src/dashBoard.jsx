import { useState, useEffect } from "react";
import axios from "axios";

const dashBoard = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [limit , setLimit] = useState(5);

  const fetchUser = async (pageNumber) => {
    try {
      const response = await axios.get(
        `http://localhost:7070/users?page=${pageNumber}&limit=${limit}`
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
  }, [page,limit]);
  return (
    <div>
      <h2>DashBoard</h2>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {user.map((p) => (
            <tr key={p._id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {p.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {p.email}
              </td>
            </tr>
          ))}
        </tbody>
        <div>
          <select value={limit} onChange={(e)=>
            {
            console.log("value",e.target.value);  
            setLimit((e.target.value))
            }
          }>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <button disabled={page == 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          <span>
            Page {page} of {totalPage}
          </span>

          <button
            disabled={page == totalPage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </table>
    </div>
  );
};

export default dashBoard;
