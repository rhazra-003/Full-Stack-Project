import "./styles.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Loanform() {
  // const [data, setData] = useState({

  //   aadhar: "",
  //   panCard: "",
  //   userImg: "",
  // });

  const [data, setData] = useState([]);

  const [formData, setformData] = useState({
    name: "",
    phoneNumber: "",
  });

  const handleChangeFile = (e) => {
    const { value } = e.target;

    setData([...data, value]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serverUrl = "url";

    data.forEach((file) => {
      const formData = new FormData();

      formData.append("arrayOfFilesName", file);

      axios({
        method: "POST",
        url: serverUrl,
        data: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      }).then((res) => {
        // then print response status
        console.warn(res);
      });
    });

    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <h1>DEMO LOAN FORM </h1>
        <h3>
          Enter Your Name: <br />
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
          />
        </h3>
        <h3>
          Enter Your Phone Number: <br />
          <input
            className="input"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
          />
        </h3>
        <h3> Aadhar:</h3>
        <Button variant="contained" component="label" color="secondary">
          {" "}
          Upload a file
          <input type="file" hidden name="aadhar" onChange={handleChangeFile} />
        </Button>
        <br />
        <br />
        <br />
        <h3>Pancard</h3>
        <Button
          variant="contained"
          component="label"
          color="secondary"
          onChange={handleChange}
        >
          {" "}
          Upload a file
          <input
            type="file"
            hidden
            name="panCard"
            onChange={handleChangeFile}
          />
        </Button>
        <br />
        <br />
        <br />
        <h3>Your Pic Please!</h3>
        <Button variant="contained" component="label" color="secondary">
          {" "}
          Upload a file
          <input
            type="file"
            hidden
            name="userImg"
            onChange={handleChangeFile}
          />
        </Button>
        <br />
        <br />
        <br />
        <div style={{display:"flex",justifyContent: "center",
  alignItems: "center", padding:"30px"}}>
          <Button href="/course" variant="contained">Submit</Button>
          </div>
      </div>
    </form>
  );
}
