import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";

const FileUploads = () => {
  const [file, setFile] = useState(null);
  // get Image
  const [images, setImages] = useState([]);

  // useEffect
  useEffect(() => {
    getImages();
  }, []);
  const getImages = async () => {
    const res = await axios.get("http://localhost:3000/getMultipleFiles");
    setImages(res.data);
  };
  const ref = useRef();
  console.log(file, "FILE");

  const submit = async (e) => {
    e.preventDefault();
    // only work on multiple file 
    // if (file.length === 0) {
    //   alert("Select File");
    // }
    // console.log(file.length, "FILE Length");
    // formData was built-in Object for sending img , pdf , file to server
    const formData = new FormData();
    // uploading multiple Fields
    // for (let i = 0; i < file.length; i++)a {
    //   formData.append("multipleFiles", file[i]);
    //   console.log("I", file[i]);
    // }

    // uploading single Image
    //

    formData.append("file", file);
    // append file to formData as key value
    // formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:3000/uploads", formData);
      // to remove input value after uploading img
      ref.current.value = null;
      // refresh Image after upload
      getImages();
    } catch (error) {
      console.log("Error in file uploading ");
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
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Uploads</button>
      </form>

      <div style={{ display: "flex" }}>
        {images.map((img) => {
          console.log("Image-Name", img.name);
          return (
            <div key={img.name}>
              <img
                src={img.url}
                alt={img.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FileUploads;
