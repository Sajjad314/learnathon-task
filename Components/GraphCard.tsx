// components/LeftPanelSection.js

import React from "react";

const GraphCard = ({ title, content }: { title: String; content: String }) => {
  return (
    <div className="bg-white p-4 rounded-[10px] mb-2">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default GraphCard;
