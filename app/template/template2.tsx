import CrossIcon from "@/assets/icons/crossIcon";
import { manrope } from "@/utils/fonts";

export default function Template2() {
  return (
    <div
      style={{
        position: "relative",
        width: "304px",
        height: "364px",
        backgroundColor: "#D6D8E1",
        boxShadow: "0px 0px 15px -2px rgba(0,0,0,0.2)",
        paddingTop: "72px",
        justifyContent: "center",
        paddingInline: "18px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          cursor: "pointer",
        }}
      >
        <CrossIcon />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: manrope.style.fontFamily,
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "center",
              color: "#212121",
            }}
          >
            Unlock 10% Off Today
          </p>
          <p
            style={{
              fontFamily: manrope.style.fontFamily,
              fontWeight: 300,
              fontSize: "14px",
              textAlign: "center",
              color: "#212121",
            }}
          >
            When you signup
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            style={{
              width: "100%" /* Fill */,
              height: "42px" /* Hug */,
              padding: "16px",
              border: "1px solid #979797" /* Assuming a solid border */,
              textAlign: "center",
              fontFamily: manrope.style.fontFamily,
              fontSize: "14px",
            }}
          />
          <button
            style={{
              width: "100%",
              height: "42px",
              textAlign: "center",
              backgroundColor: "#44DAEF",
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: manrope.style.fontFamily,
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              CONTINUE
            </span>
          </button>
          <p
            style={{
              fontFamily: manrope.style.fontFamily,
              fontSize: "10px",
              fontWeight: 400,
              lineHeight: "16px",
              color: "#212121",
            }}
          >
            Only valid for $25 kits. By providing your email address you agree
            to our <b>Terms</b> and <b>Services</b>
          </p>
        </div>
      </div>
    </div>
  );
}
