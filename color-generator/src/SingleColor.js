import React, { useState, useEffect } from "react";

const SingleColor = ({ weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const hexValue = `#${hex}`;
  
  function invertHex(hexCode) {
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && (
        <p style={{ color: invertHex(hexValue) }} className="alert">
          copied to clipboard
        </p>
      )}
    </article>
  );
};

export default SingleColor;
