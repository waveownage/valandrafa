import React from 'react';
import './schedule.css';
import image2 from './wreath.png'


const Schedule = () =>{
  return (
    <div className="schedulebox">
        <img className="wreath" src={image2} alt="wreath"/>
        <div className="date">
        <h1 className="headerstext">Friday, October 21, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="headerstext">4:00 PM</h1>
          <h1 className="headerstext">to</h1>
          <h1 className="headerstext">5:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="headerstext">Arrival & Check-In</h1>
          <h1 className="basictext1">If you have reserved a lakeside cabin, you will likely be arriving on Friday to start the celebration early! When you arrive at Lake Louisa State Park, let the park rangers at the entry gate know you're here for Rojas Andreoli wedding and your park admission fees have been covered. Follow park signs for the cabins, find your cabin number, settle in and get cozy. </h1>
          <h1 className="basictext1">Getting in early? Check out the “Things To Do” tab to read about more activities in Lake Louisa and the Central Florida area.</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="headerstext">6:00 PM</h1>
          <h1 className="headerstext">to</h1>
          <h1 className="headerstext">8:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="headerstext">Welcome Dinner</h1>
          <h1 className="basictext1">Now that you're settled in to your cabins, join us by cabin 10 for Venezuelan-Brasilian style hot dogs, live music by the fire & s’mores</h1>
          <h1 className="headerstext">Dress Code: Casual</h1>
          </div>
          <hr/>
        </div>
      <div className="date">
        <h1 className="headerstext">Saturday, October 22, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="headerstext">Morning</h1>
          </div>
          <div className= "textbox">
          <h1 className="basictext1">Free time to explore the park and get ready for the party. Check out the “Things To Do” tab to read about more activities in Lake Louisa and find nearby grocery stores, restaurants and shops</h1>
          </div>
          <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="headerstext">3:00 PM</h1>
          <h1 className="headerstext">to</h1>
          <h1 className="headerstext">10:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="headerstext">Ceremony & Reception</h1>
          <h1 className="basictext1">We're getting married! The ceremony will start at 3pm (that’s 2:30pm in Hispanic time), followed by cocktail hour & appetizers at 4pm and dinner around 6pm</h1>
          <h1 className="basictext1">Dress Code: Formal</h1>
          <h1 className="basictext1">Ladies: Keep in mind the park includes grass and dirt areas. Closed toe shoes such as sneakers, flats or wedges recommended to avoid dirty feet and sinking into the ground, and also because we hope to see everyone out on the dance floor all night long</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
        <div className="date">
        <h1 className="headerstext">Sunday, October 23, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="headerstext">10:30 AM</h1>
          <h1 className="headerstext">to</h1>
          <h1 className="headerstext">11:00 AM</h1>
          </div>
          <div className= "textbox">
          <h1 className="headerstext">Check-Out</h1>
          <h1 className="basictext1">Time to say see you later, check out of the cabins by 11am. Staying a few more days? Check out the “Things To Do” tab to read about more activities in Lake Louisa, Orlando and the Tampa Bay area</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
    </div>
  );
}
export default Schedule;