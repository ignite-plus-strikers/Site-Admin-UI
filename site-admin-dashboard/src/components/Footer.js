import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col">
            &copy;{new Date().getFullYear()} | All Rights Reserved |
            Terms of Services | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
