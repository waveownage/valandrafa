import React from 'react';
import './home.css';
import image from './valarievenmo.PNG'
import image2 from './honeymoon.PNG'
import './registry.css'

const Registry = () =>{

  return (
    <div className="registrybox">
    <img className="venmophoto" src={image} alt="venmophoto"/>
    <img className="venmophoto" src={image2} alt="venmophoto"/>
    </div>
  );
}
export default Registry;