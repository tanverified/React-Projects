import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTourHandle }) {
  const [showInfo, setShowInfo] = useState(false);

  const infoHandle = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showInfo ? info : `${info.substring(0, 200)} ...`}
          <button onClick={infoHandle}>{showInfo ? "read less" : "read more"}</button>
        </p>
        <button className="delete-btn" onClick={() => removeTourHandle(id)}>
          Not interested
        </button>
      </footer>
    </div>
  );
}

export default Tour;
