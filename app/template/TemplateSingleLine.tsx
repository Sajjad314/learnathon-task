import { jost } from "@/utils/fonts";
import React from "react";

const TemplateSingleLine = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px 75px 30px 75px",
      }}
    >
      <p
        style={{
          fontFamily: jost.style.fontFamily,
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: "26px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "white",
        }}
      >
        Deals Du Jour: Stocking Stuffers Up to 50% Off
      </p>
    </div>
  );
};

export default TemplateSingleLine;
