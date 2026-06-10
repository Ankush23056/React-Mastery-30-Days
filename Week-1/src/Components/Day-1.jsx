// Intro , Prop, Components

import Card from "./Card";

// import React from "react";


const Day1 = () => {
  return (
    <>
      <h2 className="profile-title">User Settings</h2>  {/* class is className */}
      {/* <img src="avatar.png" /> closing tags */}

      <Card name="Ankush Kumar" age={22} role="FrontEnd" />
      <Card name="Rohan" age={25} role="BackEnd" />

    </>
  );
};

export default Day1;
