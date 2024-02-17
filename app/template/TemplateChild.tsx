import CancelVectorSVG from "@/assets/Icon/CancelVectorSVG";
import { libreBaskerville, metrophobic } from "@/utils/fonts";
import React from "react";
import imagee from "@/assets/KidInSnow.png";
import Image from "next/image";

const TemplateChild = () => {
  return (
    <div
      style={{
        width: "547px",
        // height: "346px",
        backgroundColor: "#F1F5F9",
        boxShadow: "0px 0px 15px -2px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "11px",
          right: "11px",
          cursor: "pointer",
          // color: "#212121",
        }}
      >
        <CancelVectorSVG />
      </div>
      <Image src={imagee} alt="Image"></Image>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            margin: "42px 30px 0px 30px",
          }}
        >
          <p
            style={{
              color: "#000",
              textAlign: "center",

              fontFamily: libreBaskerville.style.fontFamily,
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Welcome home.
          </p>
          <p
            style={{
              fontFamily: metrophobic.style.fontFamily,
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: "16px",
              textAlign: "center",
              margin: "25px 12px 0px 12px",
              color: "#000000",
            }}
          >
            Drop-dead elegant on the outside. Downright brilliant on the inside.
          </p>
        </div>
        <p
          style={{
            fontFamily: metrophobic.style.fontFamily,
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "16px",
            textAlign: "center",
            marginTop: "25px",
            color: "#000000",
          }}
        >
          Sign up and get <b>10% off</b> your first order.
        </p>
        <input
          type="text"
          placeholder="Email
          "
          style={{
            width: "255px" /* Fill */,
            height: "41px" /* Hug */,
            padding: "16px",

            margin: "10px 25px 10px",
          }}
        />
        <button
          style={{
            width: "255px",
            height: "46px",
            textAlign: "center",
            margin: "0px 25px 21px 25px",
            paddingTop: "16px",
            paddingBottom: "14px",
            backgroundColor: "black",
            color: "white",
            fontFamily: metrophobic.style.fontFamily,
            fontSize: "16px",
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "16px",
            letterSpacing: "3.2px",
          }}
        >
          CONTINUE
        </button>
        <p
          style={{
            fontFamily: metrophobic.style.fontFamily,
            fontSize: "8px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#AFAFAF",
            margin: "0px 41px 33px 41px",
          }}
        >
          By subscribing, you consent to receive marketing emails. updates, and
          promotions from Snowe. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default TemplateChild;
