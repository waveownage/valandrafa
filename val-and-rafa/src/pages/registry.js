import React from 'react';
import './home.css';
import image from './registry1.jpg'
import image2 from './rafavenmo.PNG'
import './registry.css'

const Registry = () =>{

  return (
    <div className="registrybox">
      <h1 className="basictext1">We are so lucky to have friends and family coming from all over the world – Brasil, Venezuela, Chile, Guatemala, England, Vienna, Cambodia, Canada and all over the US. The most important thing is that you are able to be here to celebrate with us, and your presence is gift enough.</h1>
      <h1 className="basictext1">If you still wish to give a gift, we’ve set up a honeymoon fund below and will gratefully accept cash contributions.</h1>
      <h1 className="headerstext">Honeymoon Fund</h1>
      <h1 className="basictext1">We have dreamed of a romantic getaway to the Maldives for years (I mean, who hasn't?), and we can't think of a better time to make this happen than our honeymoon – which we’re planning for January 2023. Your gift will help us make this dream a reality 😊 Please direct your contributions to Rafa’s venmo</h1>
      <img className="regphoto" src={image} alt="venmophoto"/>
      <a className="fix"href="https://venmo.com/code?user_id=3233782152822784144&created=1659881150" target="_blank" rel="noreferrer">
      <img className="fix"className="venmophoto" src={image2} alt="venmophoto"/>
      </a>
      <a className="addresslink" href="https://venmo.com/code?user_id=3233782152822784144&created=1659881150" target="_blank" rel="noreferrer">
            Click Here To Be Taken To Venmo For Contributions.
          </a>
    </div>
  );
}
export default Registry;