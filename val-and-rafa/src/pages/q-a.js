import React from 'react';
import './q-a.css'
import './home.css';
import guestfaq1 from './guestfaq1.PNG'
import guestfaq2 from './guestfaq2.PNG'

const QA = () =>{
  return (
    <div className='q-abox'>
      <h1 className='headerstext'>When is the RSVP deadline?</h1>
      <h2 className='basictext'>Please RSVP and reserve your cabin (using the Cabins tab) by August 31st so we can have an accurate headcount😊</h2>
      <h1 className='headerstext'>What’s the dress code?</h1>
      <h2 className='basictext'>Formal attire please, do not let the park bohemian vibes fool you, this is a bring your best outfit affair</h2>
      <h2 className='basictext'>Ladies – please don’t wear stiletto heels. I repeat, do not wear stiletto/pointy heels. The wedding is fully outdoors with grassy/dirt areas so please opt for chunky heels, flats, sandals or rock your long dress with platform sneakers. Whatever will allow you to stay comfy and dance the night away with us!</h2>
      <h1 className='headerstext'>Where should I park?</h1>
      <h2 className='basictext'>Each cabin has two assigned parking spaces. The ceremony and reception areas are within walking distance from all cabins.</h2>
      <h2 className='basictext'>If you’re coming in on the day of the wedding and not staying in a cabin, you can look for parking around cabins 14-16, head to the area behind cabin 17, and follow the signs towards the ceremony.</h2>
      <img className="picture" src={guestfaq1} alt="picture"/>
      <h1 className='headerstext'>Can I bring a date?</h1>
      <h2 className='basictext'>Due to budget and space limitations, we can’t afford for everyone to bring a guest of their own. Please refer to the names specifically listed on your invitation. Thank you so much for understanding!</h2>
      <h1 className='headerstext'>Are kids welcome?</h1>
      <h2 className='basictext'>We’d love to have all your little ones there, but unfortunately we’re limited by budget and space constraints. For those of you coming from out of town, please reach out to us if you need help finding a babysitter in the area. We hope you can still make it!</h2>
      <h1 className='headerstext'>What about gifts?</h1>
      <h2 className='basictext'>We are so lucky to have friends and family coming from all over the world – Brasil, Venezuela, Chile, Guatemala, England, Canada and all over the US. The most important thing is that you are able to be here to celebrate with us, and your presence is gift enough. If you still wish to give a gift, we’ve set up a honeymoon fund under the Registry tab and will gratefully accept cash contributions.</h2>
      <h1 className='headerstext'>Is the wedding indoors or outdoors?</h1>
      <h2 className='basictext'>Our wedding will be fully outdoors, but the reception will be under a tent. Mosquito repellent will be available to keep these uninvited guests away.</h2>
      <h1 className='headerstext'>What will the weather be like?</h1>
      <h2 className='basictext'>Welcome to Florida! October is less hot and less rainy than the summer months. The average temperature in October ranges from 67 – 83° Fahrenheit or 19 – 28° Celsius. The AccuWeather Gods predict we will have a beautiful sunny day on 10/22/22! </h2>
      <h2 className='basictext'>For those of you coming from out of town, October is still wonderful weather to check out the beaches, springs and other Florida things before/after the wedding.</h2>
      <img className="picture" src={guestfaq2} alt="picture"/>
      <h1 className='headerstext'>Is it okay to take pictures with our phones and cameras during the wedding?</h1>
      <h2 className='basictext'>We would love for you to take pictures and share them with us using the hashtag #valandrafa – or text them to us so we can see them when we wake up the next day 😊 </h2>
      <h2 className='basictext'>However, during the ceremony, we would love for you to be fully present with us without the distraction of electronic devices. Please keep your phones on silent, and let our professional photographer capture the magic!</h2>
      <h1 className='headerstext'>Whom should I call/text with questions? </h1>
      <h2 className='basictext'>Please reach out to Valerie or Rafa with any questions about this love party. For any last minute questions on the day of the wedding, the brother of the bride will have his phone charged and at the ready, you can reach Cesar at (813) 965 4505</h2>
      <h1 className='headerstext'>Are the ceremony and reception locations wheelchair accessible?</h1>
      <h2 className='basictext'>Lake Louisa has a golf cart and park rangers available for anyone needing assistance getting around the park, please let us know if you plan to use this service so we can help coordinate this for you. </h2>

    </div>
  );
}
export default QA;