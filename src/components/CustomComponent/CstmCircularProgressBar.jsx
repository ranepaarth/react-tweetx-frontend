import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CstmCircularProgressBar = ({ wordCount }) => {
  const calcPercentage = (wordCount) => (wordCount?.length / 200) * 100;
  const setText = (wordCount) => {
    let textCount;
    let temp = -10;
    if (wordCount?.length >= 200) {
      textCount = 210 - wordCount?.length;
      ++temp;
    }
    return textCount;
  };

  const text = setText(wordCount);

  const percentage = calcPercentage(wordCount);
  return (
    <div className="">
      {wordCount?.length > 0 && (
        <div style={{ width: "1.8rem" }}>
          <CircularProgressbar
            value={percentage}
            strokeWidth={12}
            styles={{
              path: {
                stroke: percentage >= 80 ? "red" : "#ec4899",
              },
              text: {
                fontSize: "40px",
                fontWeight:"bold",
                fill: "red",
                backgroundColor:"black"
              },
              background: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
              },
            }}
            circleRatio={1}
            text={text}
          />
        </div>
      )}
    </div>
  );
};

export default CstmCircularProgressBar;
