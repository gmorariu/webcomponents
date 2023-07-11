import React from "react";
import {Button, Image} from "react-bootstrap";
import './ImageBoxV2.scss'

export default function ImageBoxV2(props) {
    return (

      <div id={props.main_id} className="image-v2-box-block" >
        <div className="image-v2-box-overlay">
          <div className="d-flex flex-column h-100">
            <div class="image-v2-box-bg" style={{backgroundImage: `url(${props.image_src})` }}>
              <div class="image-v2-box-cta">
                {props.cta_label &&
                <Button
                  id={props.main_id}
                  href={props.cta_link}
                  target={props.external_link?"_":""}
                  variant="primary"
                  className="position-absolute top-50 start-50 translate-middle"
                >
                  {props.cta_label}
                </Button>}
              </div>
            </div>
            <h3 className="text-start mx-3 mt-2">{props.title}</h3>
            <p className="text-start mx-3">{props.description}</p>
          </div>
        </div>
      </div>
    );
}
