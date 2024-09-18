import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  // Javascript comes here.
  //   const Name = prompt("enter your name");
  //   const age = prompt("enter your age");
  // hooks
  const [value, setValue] = useState("mary");
  const [age, setAge] = useState(10);

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <div>
      <ul>
        <li>Home {value}</li>
        <button onClick={handleNavigate}>Go to About page</button>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
