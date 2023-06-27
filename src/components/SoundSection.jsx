import React from "react";

function SoundSection() {

  const handleLearnMore = () => {
   const element = document.querySelector("display.section");
   window.scrollTo({
    top: element?.getBoundingClientRect().bottom,
    left: 0,
    behavior: "smooth"

   })
  }

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Example</h2>
          <p className="text">Motions Graphics</p>
          <span className="description">
            Video Product | Logovideo | Animations
          </span>
          <ul className="links">
            <li>
              <button className="button">Jobs</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;