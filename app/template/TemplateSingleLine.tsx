import CrossIcon from "@/assets/icons/crossIcon";
import { jost } from "@/utils/fonts";

const TemplateSingleLine = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px 75px",
        position: "relative",
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
