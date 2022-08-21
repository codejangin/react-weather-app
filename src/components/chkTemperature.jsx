import React from "react";

function ChkTemperature({
  temperature,
  description,
  changeUnitHandler,
  tempUnit,
}) {
  return (
    <div className="temperature">
      <div className="temperature-section">
        <h2 className="temperature-degree">{temperature}</h2>
        <span onClick={() => changeUnitHandler(temperature, tempUnit)}>
          {tempUnit}
        </span>
      </div>
      <div className="temperature-description">{description}</div>
    </div>
  );
}

export default ChkTemperature;
