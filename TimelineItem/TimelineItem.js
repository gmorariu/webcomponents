import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import './TimelineItem.scss'

export default function TimelineItem(props) {
    return (
      <>
        <div className="d-none d-sm-flex align-items-start">
          {props.reverse_order === true &&
            <div className="me-5 d-flex flex-column justify-content-center align-items-end" >
              <h3 className="text-end">{props.title}</h3>
              <p className="text-end">{props.description}</p>
            </div>
          }
          <Image fluid roundedCircle={true} src={props.image_src} style={{maxWidth:"200px", aspectRatio:"1" , maxHeight:"200px"}}/>
          {props.reverse_order !== true &&
            <div className="ms-5 d-flex flex-column justify-content-center" >
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          }
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center d-sm-none">
          <h3 className="text-center mb-3">{props.title}</h3>
          <Image fluid roundedCircle={true} src={props.image_src} style={{maxWidth:"200px", aspectRatio:"1" , maxHeight:"200px"}}/>
          <p className="mt-4">{props.description}</p>
        </div>
      </>
    );
}
