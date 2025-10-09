// what is axios
// Axios is used to connect frontend to backend so you can easily send, receive, and manipulate data.

import React, { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    const getRepo = async () => {
      const response = await axios.get("http://localhost:7050");
      // console.log(response);

      const myRepo = response.data;
      // console.log(myRepo,'myrepo');

      setRepo(myRepo);
    };
    getRepo();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {repo.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.des}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
