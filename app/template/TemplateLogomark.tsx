import TickSignSVG from "@/assets/Icon/TickSignSVG";
import CrossIcon from "@/assets/icons/crossIcon";
import { dmSerifDisplay, dmSans } from "@/utils/fonts/index";
import React from "react";

const TemplateLogomark = () => {
  return (
    <div
      style={{
        backgroundColor: "#CDFCFF",
        padding: "55px 67px 55px 67px",
        boxShadow: "0px 0px 15px -2px rgba(0,0,0,0.2)",

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
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            font: "DM Sans",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "26.04px",
            color: "#282828",
          }}
        >
          Logomark
        </p>
        <p
          style={{
            fontFamily: dmSerifDisplay.style.fontFamily,
            fontSize: "32px",
            fontWeight: 400,
            lineHeight: "44px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#212121",
            boxShadow: "0px 4px 20px 0px #0000000D",
          }}
        >
          Shipping Worldwide
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TickSignSVG />
            <p
              style={{
                font: "DM Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#212121",
              }}
            >
              Take advantage of our reduced international shipping rates
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TickSignSVG />
            <p
              style={{
                font: "DM Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#212121",
              }}
            >
              Shop in your localized currency
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
            <TickSignSVG />
            <p
              style={{
                font: "DM Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "22px",
                color: "#212121",
              }}
            >
              Pay duties and taxes at checkout for a guaranteed price
            </p>
          </div>
        </div>
        <button
          style={{
            borderRadius: "4px",
            padding: "11px 32px 11px 32px",
            gap: "8px",
            backgroundColor: "#212121",
          }}
        >
          <span
            style={{
              fontFamily: dmSans.style.fontFamily,
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "20.83px",
              color: "white",
            }}
          >
            Continue to Shop
          </span>
        </button>
      </div>
    </div>
  );
};

export default TemplateLogomark;
