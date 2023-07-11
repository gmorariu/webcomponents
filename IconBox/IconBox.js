import React from "react";
import {Button} from "react-bootstrap";
import './IconBox.scss'

export default function IconBox(props) {
    return (
      <div id={props.main_id} href={props.cta_link} className="icon-box-block">
        <div className="icon-box">
          {props.icon}
        </div>
        <div className="content text-center">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          {props.cta_label && <Button id={props.main_id} href={props.cta_link} size="lg" variant="outline-primary" className="mt-5">{props.cta_label}</Button>}
        </div>
      </div>
    );
}
