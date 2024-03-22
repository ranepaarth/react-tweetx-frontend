import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CstmCircularProgressBar = ({ wordCount }) => {
  let percentage = (wordCount?.length / 200) * 100;
  console.log(percentage);
  return (
    <>
      {wordCount?.length > 0 && (
        <div style={{ width: "25px" }}>
          <CircularProgressbar
            value={percentage}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: percentage >= 100 ? "red" : "#ec4899",
              trailColor: "",
              pathTransition: 0.6,
            })}
            circleRatio={1}
          />
        </div>
      )}
    </>
  );
};

export default CstmCircularProgressBar;
