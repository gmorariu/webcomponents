import React from "react";
import {Button} from "react-bootstrap";
import './Hero.scss'

export default function Hero(props) {
    return (
      <div id={props.main_id} className="hero-area overlay" style={props.bg_video_src?{}:{backgroundImage: `url(${props.bg_image_src})` }}>
        {props.bg_video_src && <video autoPlay muted loop className="hero-video">
         <source src={props.bg_video_src} type="video/mp4"/>
        </video> }
        <div className="block">
          <h1>{props.title}</h1>
          <p className="mb-50">{props.subtitle}</p>
          <h2 className="text-primary">{props.slogan}</h2>
          <Button id={props.cta_id} href={props.cta_link} size="lg" variant="outline-primary" className="mt-5">{props.cta_label}</Button>
        </div>
      </div>
    );
}
