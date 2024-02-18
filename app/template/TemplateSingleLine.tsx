import CrossIcon from "@/assets/icons/crossIcon";
import { jost } from "@/utils/fonts/index";

const TemplateSingleLine = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px 75px",
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
        <CrossIcon stroke="#fff" />
      </div>
      <p
        style={{
          fontFamily: jost.style.fontFamily,
          fontSize: "18px",
          fontWeight: 400,
          textAlign: "center",
          color: "white",
        }}
      >
        Deals Du Jour: Stocking Stuffers Up to 50% Off
      </p>
    </div>
  );
};

export default TemplateSingleLine;
