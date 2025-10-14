import React from "react";
import axios from "axios";
import { useState } from "react";

const FileUploads = () => {
  const [file, setFile] = useState(null);
  console.log(file, "FILE");

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return;

    // formData was built-in Object for sending img , pdf , file to server
    const formData = new FormData();
    // append file to formData as key value
    formData.append("file", file);
    const res = await axios.post("http://localhost:3000/uploads", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit"> Uploads</button>
      </form>
    </div>
  );
};

export default FileUploads;
