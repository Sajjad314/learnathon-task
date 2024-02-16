import React from "react";
import Image from "next/image";
import stylegirl from "@/assets/StyleGirl.png";
import { inria_sans, libre_bodoni } from "@/utils/fonts";

const TemplateStyleGirl = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#E9E9E9",
      }}
    >
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
              fontFamily: inria_sans.style.fontFamily,
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
              fontFamily: libre_bodoni.style.fontFamily,
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
              fontFamily: inria_sans.style.fontFamily,
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
                fontFamily: inria_sans.style.fontFamily,
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
              fontFamily: inria_sans.style.fontFamily,
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
