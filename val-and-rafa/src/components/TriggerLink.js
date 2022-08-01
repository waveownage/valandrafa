import React from 'react';
import './navbar.css'

const TriggerLink = ({ triggerText, buttonRef, showModal }) => {
  return (
    <a className="links"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </a>
  );
};
export default TriggerLink;