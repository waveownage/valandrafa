import React from 'react';
import image from './homepic.jpg';
import image2 from './wreath.png'
import './home.css';


let date = (new Date("Oct 22 2022")).getTime();
let today = (new Date()).getTime();
let msDay = 24 * 60 * 60 * 1000; // milliseconds per day


let days = Math.floor((today - date) / msDay) +1;
console.log(days)
days = (days * -1) -1
let day = 7
console.log(days)

var current = new Date();
var monthcount = current.getMonth() +1
console.log(monthcount)
console.log(current)
console.log(days)
var month = 0
if (days >= 61) {
    month = 2
    day= days - 60
}
if (days < 60 & days > 31) {
    month = 1
    day= days - 30
}
if (days < 31){
  month = 0
  day = days
}

const Home = () =>{


  return (
    <div>
      <div className="homepage">
      <img className="homephoto" src={image} alt="homephoto"/>
      <img className="wreath" src={image2} alt="wreath"/>
      <h1 className ="headerstext1">Come celebrate love with us!</h1>
      <h1 className ="dancingtext1">Lake Louisa State Park</h1>
      <h1 className ="dancingtext1">Saturday, October 22, 2022</h1>
      <div className="timerbox">
        <div className="vertical">
        <div className="monthbox">
          <h1 className ="basictext"> {month}</h1>
        </div>
        <h1 className ="basictext">months</h1>
        </div>
        <div className="vertical">
        <div className="daybox">
          <h1 className ="basictext">{day}</h1>
        </div>
          <h1 className ="basictext">days</h1>
          </div>
      </div>
      <h1 className ="basictext1">As their friends all know, Rafa and Valerie both love to travel, and the summer of 2019 was no exception. Rafa was leaving Brasil for the US, and his friend convinced him to download Tinder in order to meet new people. Meanwhile, Valerie was leaving the US for Korea and her friend convinced her to do the same. Neither knew it at the time, but they were both about to embark on one of the biggest adventures of their lives.</h1>
      <h1 className ="basictext1">When Valerie returned to Tampa, the universe (or Tinder?) brought her and Rafa together. The two went out on a romantic Italian dinner date, and the rest is history. They fit together so well, and found themselves falling so fast, it was hard at first to believe it was real. And yet, each moment only confirmed what they had known from the beginning, that they had finally found the person who felt like home.</h1>
      
      


      </div>
    </div>
  );
}
export default Home;
