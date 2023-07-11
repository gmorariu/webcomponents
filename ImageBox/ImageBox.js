import React from "react";
import {Button, Image} from "react-bootstrap";
import './ImageBox.scss'

export default function ImageBox(props) {
    return (

      <div id={props.main_id} href={props.cta_link}  className="image-box-block" >
      {/**/}
        <div class="image-box-overlay" style={{backgroundImage: `url(${props.image_src})` }}/>
        <div class="image-box-overlay image-box-darker-bg" />
        <div className="image-box-overlay content text-center">
          <h2 className="mt-5">{props.title}</h2>
          <p className="">{props.description}</p>
          {props.cta_label &&
            <Button
              id={props.main_id}
              href={props.cta_link}
              variant="primary"
              className="mb-4 position-absolute bottom-0 translate-middle-x"
            >
              {props.cta_label}
            </Button>}
        </div>
      </div>
    );
}
