import React, { useState, useContext, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Alert } from "react-bootstrap";
import './ContactForm.scss'

export default function ContactForm(props) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "subject") {
      setSubject(e.target.value);
    }
    if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  }

  const sendMessage = async () => {
    const data = {"customer-id": props.customer_id, "name": name, "email": email, "subject": subject, "message": message}
    try {
      const response = await fetch('https://api.wdttx.com/prod/contact-us', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      const r = await response.json();
      console.log(r)
      if (r['statusCode'] === 200) {
        console.log('done');
        setMessageSent(true);
        /*$(".contact-form").fadeTo("slow", 1, function () {
          $("#contact-form").resetForm();
          $(".success-ms").slideDown("slow");
          $("#cf-submit").slideUp("slow");
        });*/
      } else {
        setHasError(true);
        console.log('error');
        /*$("#contact-form").fadeTo("slow", 1, function () {
          $(".error-ms").slideDown("slow");
        });*/
      }
    } catch (error) {
      setHasError(true);
      //onError(error);
    }
  }

  return (
    <div className="contact-form">
      <Form id="contact-form">

        <Form.Group className="py-1">
          <Form.Control
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            isInvalid={name !== null && name.length === 0}
            onChange={handleChange}
            id="name"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your name
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="py-1">
          <Form.Control
            type="email"
            placeholder="Your Email"
            name="email"
            value={email}
            isInvalid={email !== null && email.length === 0}
            onChange={handleChange}
            id="email"
          />
          <Form.Control.Feedback type="invalid">
            Please provide your email so we know how to reach you
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="py-1">
          <Form.Control
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            isInvalid={subject !== null && subject.length === 0}
            onChange={handleChange}
            id="subject"
          />
          <Form.Control.Feedback type="invalid">
            Please write the reason to contact us here
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="py-1">
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Message"
            name="message"
            value={message}
            isInvalid={message !== null && message.length === 0}
            onChange={handleChange}
            id="message"
          />
          <Form.Control.Feedback type="invalid">
            Please write your message to us here
          </Form.Control.Feedback>
        </Form.Group>

        <Alert variant="success" show={messageSent}>
          Thank you. Your message was delivered successfuly. We will contact you as soon as possible.
        </Alert>

        <Alert variant="success" show={hasError}>
          Sorry, don't know what happened. Please try again later.
        </Alert>

        {messageSent===false && <Button
          id="link_send_message"
          size="lg"
          variant="primary"
          className="mt-5"
          onClick={()=>{sendMessage()}}
        >Submit</Button>}



      </Form>
    </div>
  );
}
