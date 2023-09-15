import React from "react";
import "./Button.scss";

export default function Button({text, className, href,onClick, newTab}) {
  return (
    <div className={className}>
      <a className="main-button" onClick={onClick} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
