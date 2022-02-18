import React, { useState, useRef } from "react";

const Form = ({ setUserData }) => {
  const name = useRef();
  const age = useRef();
  const address = useRef();
  const department = useRef();
  const salary = useRef();
  const marital = useRef();
  const profile = useRef();
  const showProfile = useRef();

  const [isValid, setIsValid] = useState(true);
  const [showImg, setShowImg] = useState(false);

  const error = {
    color: "red",
  };
  const makeForm = {
    display: "flex",
  };
  const makeSpan = {
    width: "50%",
  };
  const makeImage = {
    maxheight: "200px",
    maxWidth: "200px",
  };

  const imageHandler = (e) => {
    if (profile.current.value) {
      console.log("show image");
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          showProfile.current.src = reader.result;
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setShowImg(true);
    } else {
      console.log("remove image");
      setShowImg(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.current.value ||
      !age.current.value ||
      !address.current.value ||
      department.current.value === "none" ||
      !salary.current.value ||
      !profile.current.value
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const data = {
        name: name.current.value,
        age: age.current.value,
        address: address.current.value,
        department: department.current.value,
        salary: salary.current.value,
        marital: marital.current.checked,
        profile: profile.current.value,
      };
      setUserData((prev) => [...prev, data]);
    }
  };
  return (
    <div style={makeForm}>
      <form onSubmit={handleSubmit} style={makeSpan}>
        <h3>Employee Details:</h3>
        {!isValid && <h5 style={error}>Please enter all Details:</h5>}
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">Name: </label>
              </td>
              <td>
                <input type="text" id="name" ref={name} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="age">Age: </label>
              </td>
              <td>
                <input type="number" id="age" ref={age} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address">Address: </label>
              </td>
              <td>
                <input type="text" id="address" ref={address} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="department">Department: </label>
              </td>
              <td>
                <select name="department" id="department" ref={department}>
                  <option value="none">Select one</option>
                  <option value="front">Front End</option>
                  <option value="back">Back End</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="salary">Salary</label>
              </td>
              <td>
                <input type="number" id="salary" ref={salary} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="maritalStatus">MaritalStatus: </label>
              </td>
              <td>
                <input
                  type="radio"
                  id="married"
                  name="maritalStatus"
                  ref={marital}
                  defaultChecked
                />
                <label htmlFor="married">Married</label>
                <input type="radio" id="single" name="maritalStatus" />
                <label htmlFor="Single">Single</label>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="profile">Profile Picture: </label>
              </td>
              <td>
                <input
                  type="file"
                  src=""
                  alt=""
                  ref={profile}
                  accept="image/*"
                  onChange={imageHandler}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {showImg && (
        <div style={makeSpan}>
          <img alt={"Your Profile"} style={makeImage} ref={showProfile}></img>
        </div>
      )}
    </div>
  );
};

export default Form;
