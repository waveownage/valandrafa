import React from 'react';
import {  Link } from "react-router-dom";
import './navbar.css'
import { Container } from './ContainerLink';

const navbar= () =>{

  const triggerText = 'RSVP';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    console.log(event.target.email.value);
    console.log(event.target.flexCheckDefault1.value);
    console.log(event.target.flexCheckDefault2.value);
    console.log(event.target.flexCheckDefault3.value);
    console.log(event.target.flexCheckDefault4.value);
    console.log(event.target.flexCheckDefault5.value);
    console.log(event.target.flexCheckDefault6.value);
    console.log(event.target.flexCheckDefault7.value);
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();

  };

  return (
  <div className="bar">
    <span className="spans">
      <Link className="links" to="/">HOME</Link>
    </span>
    <span className="spans">
    <Container className = "popup" triggerText={triggerText} onSubmit={onSubmit} />
    </span>
    <span className="spans">
      <Link className="links" to="/CABINS">CABINS</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/SCHEDULE">SCHEDULE</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/THINGSTODO">THINGS TO DO</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/Q&A">GUEST FAQ</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/REGISTRY">REGISTRY</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/MOMENTS">MOMENTS</Link>
    </span>
  </div>
  );
}
export default navbar;