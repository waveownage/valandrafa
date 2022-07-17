import React from 'react';
import YouTube from 'react-youtube';
import image from './valarievenmo.PNG';
import "./cabin.css"

const cabins = () =>{

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    } }


  return (
    <div className="cabinsbox">
      <h3 className="text1">Our wedding will take place at beautiful Lake Louisa State Park. Since accommodations fill up
        far in advance, we have already rented 16 lakeside cabins for Friday and Saturday night to
        ensure that guests who want to spend more time with us and party the night away under the
        stars, can do so without a care.
        We are hosting an informal welcome dinner by the campfire on Friday evening for those guests
        staying in the cabins, with Venezuelan-Brasilian style hotdogs, s’mores and live music around
        the fire. We hope to unwind and spend time with all our favorite people together before the
        big day and give you the chance to explore all the beautiful trails, fishing, swimming, and
        kayaking that Lake Louisa has to offer!
        </h3>
        <div className="videobox">
        <YouTube
          videoId='E7JzUCci9iI'
          opts={opts}
        />
        </div>
      <div className="accommodation">
        <h1 className='title'>Accommodation Details</h1>
        <h1 className="text1">The lakeside cabins are within Lake Louisa State Park, with close access to the town and shops
        nearby. Each cabin sleeps 6 people and has 2 bathrooms, 1 bedroom with a queen bed, 1
        bedroom with 2 single beds and a pull out double bed in the living room. Please see video
        above to get a good visual of the cabins.</h1>
        <h1 className="text1">Cabins are equipped with the following amenities:</h1>
        <ul className="text1">
              <li>Central air conditioning</li>
              <li>Microwave</li>
              <li>Coffee maker</li>
              <li>Toaster</li>
              <li>Kitchen essentials</li>
              <li>Stove oven</li>
              <li>Hot water</li>
              <li>Bathtub with shower</li>
              <li>Screened porch</li>
              <li>Fire pit</li>
              <li>BBQ/Grill area</li>
        </ul>
        <h1 className='title' >Cost</h1>
        <h1 className="text1">Sleeping arrangements can be made either individually or as a group. Please be advised that
        these are shared cabins, in an effort to make accommodations as available and affordable as
        possible. If you are a small party, you may be sharing a cabin with other wedding guests. All
        prices include two nights.</h1>
        <h1 className="text1">Check-in: Friday, October 21 st @ 4pm</h1>
        <h1 className="text1">Check-out: Sunday, October 23 rd @ 11am</h1>
        <ul className="text1">
              <li>Private room (sleeps 2): $135</li>
              <li>Pull-out bed in living room (sleeps 2): $100</li>
              <li>An entire cabin (sleeps 6): $370</li>
        </ul>
        <h1 className='title'>Reserving Your Space</h1>
        <h1 className="text1">Please reserve your space by answering these questions and entering you information here:</h1>
        <h1 className="text1">Name(s) of people in your party:</h1>
        <h1 className="text1">Choice of room:</h1>
        <h1 className="text1">Will you be joining us for the welcome dinner on Friday 10/21 at 6pm by cabin 10?</h1>
        <h1 className="text1">The couple can be reimbursed directly here:</h1>
        <div className="videobox">
        <img className="venmophoto" src={image} alt="venmophoto"/>
        </div>
        <h1 className="center">Please reach out to Valerie or Rafa with any questions about the accommodations!</h1>
        <div className="videobox">
        <mark className="spectext">Submit RSPV and Cabin Reservation</mark>
        </div>
        
      </div>


    </div>
  );
}
export default cabins;