import React from 'react';
import './schedule.css';
import image2 from './wreath.png'
import image3 from './map.PNG'

const Schedule = () =>{
  return (
    <div className="schedulebox">
        <img className="wreath" src={image2} alt="wreath"/>
        <div className="date">
        <h1 className="text1">Friday, October 21, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">4:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">5:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Arrival & Check-In</h1>
          <h1 className="text1">If you have reserved a lakeside cabin, you will likely be arriving on Friday to start the celebration early! When you arrive at Lake Louisa State Park, let the park rangers at the entry gate know you're here for Rojas Andreoli wedding and your park admission fees have been covered. Follow park signs for the cabins, find your cabin number, settle in and get cozy. Check out the Cabin Info tab to find more things to do in and around Lake Louisa.</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">5:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">6:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Wedding Rehearsal</h1>
          <h1 className="text1">Meet the rest of the bridal party and practice what to do and what not to do during the ceremony tomorrow</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">6:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">8:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Welcome Dinner</h1>
          <h1 className="text1">Now that you're settled in to your cabins, join us for Venezuelan & Brazilian style hot dogs, live music by the fire & smores</h1>
          <h1 className="text1">Dress Code: Casual</h1>
          </div>
      </div>
      <div className="date">
        <h1 className="text1">Saturday, October 22, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">3:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">10:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Ceremony & Reception</h1>
          <h1 className="text1">We're getting married! We'd like to share a few words with everyone. Dinner, drinks, and dancing to follow!</h1>
          <h1 className="text1">Dress Code: Formal Ladies: Closed toe shoes such as sneakers or wedges recommended for your dancing comfort & to avoid dirty feet from grass and dirt</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">4:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">5:00 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Wedding Party Photoshoot</h1>
          <h1 className="text1">We'll get into cars and head over to a different spot at the park for professional photos immediately following the ceremony while the rest of the guests are in cocktail hour</h1>
          </div>
          <hr/>
        </div>
        <div className="date">
        <h1 className="text1">Sunday, October 23, 2022</h1> 
        <hr/>
        </div>
        <div className="activitybox">
          <div className="timebox">
          <h1 className="text1">11:00 PM</h1>
          <h1 className="text1">to</h1>
          <h1 className="text1">11:15 PM</h1>
          </div>
          <div className= "textbox">
          <h1 className="text1">Check-Out</h1>
          <h1 className="text1">Time to say see you later, check out of the cabins by 11am. Staying a few more days? Check out the Travel tab for things to do in the Orlando and Tampa area.</h1>
          <a className="addresslink" href="https://www.google.com/maps/dir//Lake+Louisa+State+Park,+7305+US-27,+Clermont,+FL+34714/@28.4564813,-81.7913051,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7881e7be11093:0x785daf0406cbd538!2m2!1d-81.7212648!2d28.4564992">Lake Louisa State Park, U.S. 27, Clermont, FL, USA</a>
          </div>
          <hr/>
        </div>
    </div>
  );
}
export default Schedule;