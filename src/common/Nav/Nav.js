import React, { useState } from "react";
import styles from "./Nav.module.css";
import { getUserInfo } from "../../utils/userInfo";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import Icon from "../components/icon/Icon";
import profileImg from "../../assets/images/profile.jpeg";

const Nav = () => {
  const username = getUserInfo();
  const currentDate = moment().format("ddd, DD MMM YYYY");
  const dropdown = [];
  const [searchPlace, setSearchPlace] = useState({});
  const [degree, setDegree] = useState(false);
  const {
    conatiner,
    userInfoStyle,
    searchStyle,
    tempStyle,
    leftStyle,
    rightStyle,
    iconStyle,
  } = styles;
  return (
    <div className={conatiner}>
      {/* user Info */}
      <div className={leftStyle}>
        <img src={profileImg} alt="profile" />
        <div className={userInfoStyle}>
          <p>Hi, {username}</p>
          {currentDate}
        </div>
      </div>
      <div className={rightStyle}>
        {/* search */}
        <div className={searchStyle}>
          <FontAwesomeIcon icon={faSearch} className={iconStyle} />
          <input name="search" placeholder="Search city or pincode" />
        </div>
        {/* F/C */}
        <Switch
          className={tempStyle}
          checked={degree}
          onChange={() => setDegree((prev) => !prev)}
          offColor="#2f2e39"
          onColor="#2f2e39"
          onHandleColor="#cfebee"
          offHandleColor="#cfebee"
          checkedIcon={<Icon text="C°" />}
          checkedHandleIcon={<Icon text="F°" not />}
          uncheckedIcon={<Icon text="F°" />}
          uncheckedHandleIcon={<Icon text="C°" not />}
        />
      </div>
    </div>
  );
};

export default Nav;
