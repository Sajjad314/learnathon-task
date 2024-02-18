import React from "react";
import Image from "next/image";
import stylegirl from "@/assets/StyleGirl.png";
import { inriaSans, libreBodoni } from "@/utils/fonts/index";
import CrossIcon from "@/assets/icons/crossIcon";

const TemplateStyleGirl = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        boxShadow: "0px 0px 15px -2px rgba(0,0,0,0.2)",
        backgroundColor: "#E9E9E9",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          cursor: "pointer",
        }}
      >
        <CrossIcon />
      </div>
      <div
        style={{
          padding: "70px 29px 68px 29px",
          display: "flex",
          flexDirection: "column",
          gap: "26px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: inriaSans.style.fontFamily,
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "14.39px",
              color: "#7B7B7B",
              marginBottom: "8px",
            }}
          >
            Limited time offer
          </p>
          <p
            style={{
              fontFamily: libreBodoni.style.fontFamily,
              fontWeight: 700,
              fontSize: "41px",
              lineHeight: "51.25px",
              color: "black",
              marginBottom: "0px",
            }}
          >
            Get 15% off
          </p>
          <p
            style={{
              fontFamily: inriaSans.style.fontFamily,
              fontWeight: 300,
              fontSize: "12px",
              lineHeight: "14.39px",
              color: "#7B7B7B",
            }}
          >
            Use your unique coupon code on checkout <br />
            page:{" "}
            <span
              style={{
                fontFamily: inriaSans.style.fontFamily,
                fontWeight: 700,
                fontSize: "12px",
                lineHeight: "14.39px",
                color: "black",
              }}
            >
              Style15
            </span>
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#000000",
            width: "154px",
            height: "35px",
          }}
        >
          <span
            style={{
              fontFamily: inriaSans.style.fontFamily,
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "16.79px",
              color: "white",
            }}
          >
            Shop now
          </span>
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#F1F1F1",
          padding: "31px 11px 0px 11px",
        }}
      >
        {/* <img src="../../assets/StyleGirl.png" alt="styled girl" /> */}
        <Image src={stylegirl} alt="stylegirl"></Image>
      </div>
    </div>
  );
};

export default TemplateStyleGirl;
