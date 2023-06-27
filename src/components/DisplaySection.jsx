import React from "react";

function DisplaySection({ triggerPreview }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">Example</h2>
      <p className="text">Web Interfaces</p>
      <span className="description">This is a my job Web designer</span>
      <button className="button" onClick={triggerPreview}>
        Try me
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
