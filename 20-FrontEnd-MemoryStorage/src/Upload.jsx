import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const ref = useRef();
  // console.log(file, "Image Details ");

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8000");
  //       console.log(res.data, "Response-Data");
  //       setImage(res.data);
  //     } catch (error) {
  //       console.log("Error in Fetch Images ", error);
  //     }
  //   };
  //   fetchImage();
  // }, []);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get("http://localhost:8000");
      setImage(res.data);
    };
    fetchImage()
  });

  const submit = async (e) => {
    e.preventDefault();

    // formData was built-in Object for sending img , pdf , file to server
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("http://localhost:8000", formData);
      console.log(res, "Response");
      ref.current.value = null;
    } catch (error) {
      console.log("Error in uploads file / Images");
    }
  };

  
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="file"
          ref={ref}
          // .files[0] for selecting one file 
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Uploads</button>
      </form>
      <div>
        {image.map((img) => {
          // console.log("Image", img.public_id);
          return (
            <img
              key={img.public_id}
              src={img.url}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                direction: "inherit",
                padding: "10px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Upload;
