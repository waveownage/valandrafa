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
