import axios from "axios";
import { useState, useRef } from "react";

const FileUploads = () => {
  const [file, setFile] = useState(null);

  const ref = useRef();
  console.log(file, "FILE");

  const submit = async (e) => {
    e.preventDefault();
    if (file.length === 0) {
      alert("Select File");
    }
    console.log(file.length, "FILE Length");

    // formData was built-in Object for sending img , pdf , file to server
    const formData = new FormData();
    // uploading multiple Fields
    for (let i = 0; i < file.length; i++) {
      formData.append("multipleFiles", file[i]);
      console.log("I",file[i]);
    }
    // append file to formData as key value
    // formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3000/uploadMultipleSingleField",formData,);
      // to remove input value after uploading img
      ref.current.value = null;
    } catch (error) {
      console.log("Error in Upload File ");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="file"
          multiple
          ref={ref}
          // e.target.files for File
          onChange={(e) => setFile(e.target.files)}
        />
        <button type="submit">Uploads</button>
      </form>
    </div>
  );
};

export default FileUploads;
