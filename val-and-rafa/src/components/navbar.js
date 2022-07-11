import React from 'react';
import {  Link } from "react-router-dom";
import './navbar.css'
import { Container } from './Container';

const navbar= () =>{
  return (
  <div className="bar">
    <span className="spans">
      <Link className="links" to="/">HOME</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/CABINS">CABINS</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/SCHEDULE">SCHEDULE</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/REGISTRY">REGISTRY</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/TRAVEL">TRAVEL</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/Q&A">Q&A</Link>
    </span>
    <span className="spans">
      <Link className="links" to="/MOMENTS">MOMENTS</Link>
    </span>
  </div>
  );
}
export default navbar;