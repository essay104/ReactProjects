import React from "react";
import "./Viewer.css";

const Viewer = ({ img, title, text }) => {
  console.log(img, title, text);
  return (
    <div className="Viewer">
      <section>
        <div className="viewer-top">
          <div className="img_wrapper">
            <img src={img} alt="img" />
          </div>
          <h4>{title}</h4>
        </div>
        <div className="viewer-bottom">
          <p>{text}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
