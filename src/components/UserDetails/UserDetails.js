import React, { useState } from "react";
import styles from "./UserDetails.module.css";
import Card from "../../common/components/Card/Card";
import { setUserInfo } from "../../utils/userInfo";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { container, inputbox, submitButton, inputName } = styles;
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (name.length == 0) return;
    setUserInfo(name);
    navigate("/weather");
  };
  return (
    <Card className={container}>
      <div className={inputbox}>
        <label className="" htmlFor="name">
          Enter Your Full Name
        </label>
        <input
          name="name"
          id="name"
          className={inputName}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target?.value)}
        />
        <button type="submit" onClick={handleSubmit} className={submitButton}>
          Save
        </button>
      </div>
    </Card>
  );
};

export default UserDetails;
