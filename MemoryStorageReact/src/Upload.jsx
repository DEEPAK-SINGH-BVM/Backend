import { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const ref = useRef();
  console.log(file, "Image Details ");

  useEffect(() => {
    try {
      const fetchImage = async () => {
        const res = await axios.get("http://localhost:8000");
        console.log(res.data, "Response-Data");
        setImage(res.data);
      };
      fetchImage();
    } catch (error) {
      console.log("Error in Fetch Images ", error);
    }
  }, []);
  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("http://localhost:8000", formData);
      console.log(res, "Response");
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
          ref={ref}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Uploads</button>
      </form>
      <div>
        {image.map((img) => {
          console.log("Image", img.public_id);
          return(
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
          )
        })}
      </div>
    </div>
  );
};

export default Upload;
