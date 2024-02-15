import React from "react";
import imagee from "../../assets/KidInSnow.png";
import Image from "next/image";
import CancelVectorSVG from "@/assets/Icon/CancelVectorSVG";
import { libreBaskerville } from "@/utils/fonts";

const page = () => {
  return (
    <div className="flex flex-row bg-white">
      <div className=" m-10 mr-20">
        <div
          style={{
            position: "relative",
            width: "304px",
            height: "364px",
            backgroundColor: "#D2FBE726",
            //   textAlign: "center",
            paddingTop: "72px",
            //   display: "flex",
            //   flexDirection: "column",
            justifyContent: "center",
            paddingInline: "18px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              cursor: "pointer",
              margin: "8px",
              color: "#212121",
            }}
          >
            X
          </div>
          <div
            style={{
              marginBottom: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "27.32px",
                textAlign: "center",
                color: "#212121",
                marginBottom: "16px",
              }}
            >
              Unlock 10% Off Today
            </p>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#212121",
              }}
            >
              When you signup
            </p>
          </div>
          <input
            type="text"
            placeholder="EMAIL ADDRESS
          "
            style={{
              width: "100%" /* Fill */,
              height: "42px" /* Hug */,
              padding: "16px",
              border: "1px solid #979797" /* Assuming a solid border */,
              gap: "8px",
              textAlign: "center",
              marginBottom: "16px",
            }}
          />
          <button
            style={{
              width: "100%",
              height: "42px",
              textAlign: "center",
              marginBottom: "16px",
              gap: "8px",
              backgroundColor: "#44DAEF",
            }}
          >
            <span
              style={{
                color: "white",
                font: "Marope",
                fontWeight: 600,
              }}
            >
              CONTINUE
            </span>
          </button>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "16px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#212121",
            }}
          >
            Only valid for $25 kits. By providing your email address you agree
            to our <b>Terms</b> and <b>Services</b>
          </p>
        </div>
      </div>
      <div className=" m-10">
        <div
          style={{
            width: "547px",
            height: "346px",
            backgroundColor: "#F1F5F9",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "11px",
              right: "11px",
              cursor: "pointer",
              color: "#212121",
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
                margin: "0px 30px 0px 30px",
              }}
            >
              <p
                className={`${libreBaskerville.className}`}
                style={{
                  // fontFamily: "'Libre Baskerville', serif",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Welcome home.
              </p>
              <p
                style={{
                  fontFamily: "Metropolis, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  textAlign: "center",
                  marginTop: "25px",
                }}
              >
                Drop-dead elegant on the outside. Downright brilliant on the
                inside.
              </p>
            </div>
            <p
              style={{
                fontFamily: "Metropolis, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                lineHeight: "16px",
                textAlign: "center",
                marginTop: "30px",
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
                height: "42px",
                textAlign: "center",
                margin: "0px 25px 21px 25px",

                backgroundColor: "black",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "Metropolis, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                }}
              >
                CONTINUE
              </span>
            </button>
            <p
              style={{
                fontFamily: "Metropolis, sans-serif",
                fontSize: "8px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#AFAFAF",
                margin: "0px 41px 0px 41px",
              }}
            >
              By subscribing, you consent to receive marketing emails. updates,
              and promotions from Snowe. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
