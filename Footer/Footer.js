import React from "react";
import {Row, Col, Image} from "react-bootstrap";
import './Footer.scss'

export default function Footer(props) {
  const date = new Date().getFullYear();
    return (

      <footer id="footer" className="bg-one">
      	<div className="container">
      		<Row>
      			<Col lg={12}>
      				<div className="">
      					<div className="d-flex flex-row justify-content-center">
      						{props.social1 && <div className="social-icon">{props.social1}</div>}
      						{props.social2 && <div className="social-icon">{props.social2}</div>}
                  {props.social3 && <div className="social-icon">{props.social3}</div>}
                  {props.social4 && <div className="social-icon">{props.social4}</div>}
                  {props.social5 && <div className="social-icon">{props.social5}</div>}
      					</div>
      				</div>
      				<div className="copyright text-center">
      					<a href="/">
      						<Image src={props.logo} alt="Logo" />
      					</a>
      					<p className="mt-3">Copyright &copy; {date}. All Rights Reserved.
                  <br/> Designed &amp; Developed by <a href="https://wdttx.com" target="_"> Woodlands Digital Technologies. </a>
                </p>
      				</div>
      			</Col>
      		</Row>
      	</div>
      </footer>
    );
}
