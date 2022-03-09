import React from "react";
import ReactDOM from "react-dom";
import Moment from "react-moment";


function CurrentDateTime() {
  return (
    <div className="dataTime">
      <Moment id="currentDate" format="LLLL" interval={1000} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CurrentDateTime />, rootElement);

export default CurrentDateTime;