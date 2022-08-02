import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';



export const Form = ({ onSubmit }) => {




    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);

    let text = ''
    const names = React.useRef();
    const email = React.useRef();
    let namesf = ''
    let emailf = ''

      let option1f = ''
      let option2f = ''
      let option3f = ''
      let option4f = ''
      let whyf = ''

    const templateParams = {
      names : 'n/a',
      emails : 'n/a',
      option1 : 'n/a',
      option2 : 'n/a',
      option3 : 'n/a',
      option4 : 'n/a',
      why : 'n/a'
    }

    

    const navigate = useNavigate();


    function refresh() {
      console.log(email.current.value)
      namesf = names.current.value
      emailf = email.current.value
      if(checked2 === true){
        option1f = 'Absolutely! I wouldnt miss it for the world'
      }
      if(checked3 === true){
        option2f = 'Sorry, I cant make it'
      }
      if(checked === true){
        option3f = 'Yes! Cant wait to dance the night away under the stars and wake up to coffee by the lake'
      }
      if(checked4 === true){
        option4f = 'No. I will arrange my own accommodations outside of the park'
      }
      
      if(checked === true) {
        console.log(emailf)
        templateParams.names = namesf;
        templateParams.emails = emailf;
        templateParams.option1 = option1f;
        templateParams.option2 = option2f;
        templateParams.option3 = option3f;
        templateParams.option4 = option4f;
        templateParams.why = whyf;
        console.log(emailf)
        console.log(templateParams)
        emailjs.send('service_9yjaola', 'template_asmcegp', templateParams,'K7Zb46aXMbT_Miz-F')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
        alert("Thank you for the RSVP!!! Please fill out your cabin reservations as well!")
        navigate("/CABINS")
        window.scrollTo(0, 0);
        setTimeout(() => {
        window.location.reload(true)} , 2000);

      }
      else {
        window.scrollTo(0, 0);
        templateParams.names = namesf;
        templateParams.emails = emailf;
        templateParams.option1 = option1f;
        templateParams.option2 = option2f;
        templateParams.option3 = option3f;
        templateParams.option4 = option4f;
        templateParams.why = whyf;
        console.log(templateParams)
        console.log(emailf)
        emailjs.send('service_9yjaola', 'template_asmcegp', templateParams,'K7Zb46aXMbT_Miz-F')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
        alert("Thank you for the RSVP!!!")
        setTimeout(() => {
        window.location.reload(true)}, 2000);
      }
    }


  
    return (
    <form onSubmit={onSubmit}>
        <div className="rsvptext">
        <h1 className="dancingtext1">Val & Rafa</h1>
        <h1 className="dancingtext1">Lake Louisa</h1>
        <h1 className="dancingtext1">Sat, October 22, 2022</h1>
        <h1 className="Headerstext">Enter your name and email to RSVP.</h1>
        </div>
      <div className="form-group">
        <label  className="Headerstext" htmlFor="name">List Names of Party Members</label>
        <input ref={names} className="form-control" id="firstname" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          ref={email}
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      
        <h1 className="text1">Will you be able to join our love party?</h1>
      <div className="form-check">
        <input  defaultChecked={checked2} onChange={() => setChecked2(!checked2)} className="form-check-input" type="checkbox" value="Absolutely! I wouldn't miss it for the world" id="flexCheckDefault1"/>
        <label className="form-check-label" for="flexCheckDefault">
        Absolutely! I wouldn't miss it for the world
        </label>
        </div>
        <div className="form-check">
        <input  defaultChecked={checked3} onChange={() => setChecked3(!checked3)} className="form-check-input" type="checkbox" value="Sorry, I can't make it" id="flexCheckDefault2"/>
        <label className="form-check-label" for="flexCheckDefault">
        Sorry, I can't make it
        </label>
        </div>
        <div className="form-group">
        <input
          type="apology"
          className="form-control"
          id="apology"
          placeholder="Why Not? *optional*"
        />
        </div>

        <h1 className="text1">Will you be reserving a lakeside cabin and staying in the park?</h1>
      <div className="form-check">
        <input  defaultChecked={checked} onChange={() => setChecked(!checked)} className="form-check-input" type="checkbox" value="Yes! Can't wait to dance the night away under the stars and wake up to coffee by the lake" id="flexCheckDefault3"/>
        <label className="form-check-label" for="flexCheckDefault">
        Yes! Can't wait to dance the night away under the stars and wake up to coffee by the lake
        </label>
        </div>
        <div className="form-check">
        <input defaultChecked={checked4} onChange={() => setChecked4(!checked4)} className="form-check-input" type="checkbox" value="No. I will arrange my own accommodations outside of the park" id="flexCheckDefault4"/>
        <label className="form-check-label" for="flexCheckDefault">
        No. I will arrange my own accommodations outside of the park
        </label>
        </div>
      <div className="form-group">
        <div className="box2">
        <button onClick={refresh}
          className="form-control btn btn-success" type="submit">
          Submit
        </button>
        </div>
      </div>
    </form>
  );
};
export default Form;