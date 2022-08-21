import React from "react";

function InitLoading({ isLoading }) {
  return (
    <div className="loading" style={{ display: isLoading ? "block" : "none" }}>
      Fetching data ...
    </div>
  );
}

export default InitLoading;
