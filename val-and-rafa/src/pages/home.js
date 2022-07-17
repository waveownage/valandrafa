import React from 'react';
import image from './homepic.jpg';
import image2 from './wreath.png'
import './home.css';


let date = (new Date("Oct 22 2022")).getTime();
let today = (new Date()).getTime();
let msDay = 24 * 60 * 60 * 1000; // milliseconds per day


let days = Math.floor((today - date) / msDay) +1;
days = days * -1
let day = 7
console.log(days)

var current = new Date();
var monthcount = current.getMonth() +1
console.log(current)
var month = 0
if (monthcount === 7) {
    month = 3
    day= days - 90
}
if (monthcount === 8) {
    month = 2
    day= days - 60
}
if (monthcount === 9) {
    month = 1
    day= days - 30
}
if (monthcount === 10) {
    month = 0
}


const Home = () =>{


  return (
    <div>
      <div className="homepage">
      <img className="homephoto" src={image} alt="homephoto"/>
      <h1 className ="text6">As their friends all know, Rafa and Valerie both love to travel, and the summer of 2019 was no exception. Rafa was leaving Brasil for the US, and his friend convinced him to download Tinder in order to meet new people. Meanwhile, Valerie was leaving the US for Korea and her friend convinced her to do the same. Neither knew it at the time, but they were both about to embark on one of the biggest adventures of their lives. 
          When Valerie returned to Tampa, the universe (or Tinder?) brought her and Rafa together. The two went out on a romantic Italian dinner date, and the rest is history. They fit together so well, and found themselves falling so fast, it was hard at first to believe it was real. And yet, each moment only confirmed what they had known from the beginning, that they had finally found the person who felt like home.</h1>
      <img className="wreath" src={image2} alt="wreath"/>
      <h1 className ="text1">Come celebrate love with us!</h1>
      <h1 className ="text2">Lake Louisa</h1>
      <h1 className ="text3">Saturday, October 22, 2022</h1>
      <h1 className ="text4"> {month} months  {day} days</h1>
      
      


      </div>
    </div>
  );
}
export default Home;
