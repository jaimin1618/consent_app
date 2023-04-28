import React from "react";
import BgImage from "../media/bg.jpg";
import { Typography } from "@mui/material";

const Main = () => {
  return (
    <div
      className=" bg-gray-1000 h-screen flex justify-content-between"
      style={{ backgroundColor: "#282930" }}
    >
      <div
        className="box-left"
        style={{
          flex: 2,
          marginTop: "20px",
          marginLeft: "30px",
          marginRight: "30px",
          borderRadius: 30,
          backgroundImage: `url(${require("../media/bg.jpg").default})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content for the left box */}
        <img
          src={BgImage}
          alt="background"
          style={{ width: "100%", height: "100%", borderRadius: 30 }}
        />
      </div>
      <div
        className="box-right"
        style={{
          flex: 3,
          marginTop: "20px",
          marginRight: "30px",
          backgroundColor: "#1D1D1D",
          borderRadius: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        
        <Typography
          sx={{
            fontSize: "5rem",
            color: "whitesmoke",
            textAlign: "center",
            background: "linear-gradient(to right, #8A2BE2, #DA70D6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            opacity: "0.8",
            letterSpacing: ".2rem",
            fontWeight: "bold",
          }}
        >
         DOCONSENTWEB3
        </Typography>
        <Typography
          sx={{
            fontSize: "4rem",
            color: "whitesmoke",
            textAlign: "center",
            fontFamily: "Derby",
          }}
        >
          Secure file storage using blockchain
        </Typography>
        
       

        
      </div>
    </div>
  );
};

export default Main;
