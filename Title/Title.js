import React from "react";
import './Title.scss'

export default function Title(props) {
    return (
      <div className="title text-center">
        <h2 className={props.default_text_class}>{props.regular_text} <span className="text-primary">{props.highlighted_text}</span> </h2>
        <div className="fancy-border"></div>
      </div>
    );
}
