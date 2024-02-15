import React from "react";
import imagee from "../../assets/KidInSnow.png";
import Image from "next/image";
import CancelVectorSVG from "@/assets/Icon/CancelVectorSVG";
import TickSignSVG from "@/assets/Icon/TickSignSVG";
import stylegirl from "@/assets/StyleGirl.png";

const page = () => {
  return (
    <div className=" bg-white flex flex-col">
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
                  style={{
                    fontFamily: "Libre Baskerville, serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    lineHeight: "35px",
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
                By subscribing, you consent to receive marketing emails.
                updates, and promotions from Snowe. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row bg-white">
        <div className=" m-10 mr-20">
          <div
            style={{
              backgroundColor: "black",
              padding: "30px 75px 30px 75px",
            }}
          >
            <p
              style={{
                fontFamily: "Jost",
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
        </div>
        <div className=" m-10 mr-20">
          <div
            style={{
              backgroundColor: "#CDFCFF",
              padding: "55px 67px 55px 67px",
            }}
          >
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
                  fontFamily: "DM Serif Display",
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
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
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
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
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
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "8px" }}
                >
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
                    fontFamily: "DM Sans",
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
        </div>
      </div>
      <div className="flex flex-row bg-white">
        <div className=" m-10 mr-20">
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
                    fontFamily: "Inria Sans",
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
                    fontFamily: "Libre Bodoni",
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
                    fontFamily: "Inria Sans",
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
                      fontFamily: "Inria Sans",
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
                    fontFamily: "Inria Sans",
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
        </div>
      </div>
    </div>
  );
};

export default page;
