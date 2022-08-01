import React from 'react';


export const Form = ({ onSubmit }) => {
    const [checked, setChecked] = React.useState(false);


    function refresh() {
      if(checked == true) {
        window.location='valandrafa.com/CABINS'
      }
      else {
        window.location.reload(false)
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
        <input className="form-control" id="firstname" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      
        <h1 className="text1">Will you be able to join our love party?</h1>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Absolutely! I wouldn't miss it for the world" id="flexCheckDefault1"/>
        <label className="form-check-label" for="flexCheckDefault">
        Absolutely! I wouldn't miss it for the world
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Sorry, I can't make it" id="flexCheckDefault2"/>
        <label className="form-check-label" for="flexCheckDefault">
        Sorry, I can't make it
        </label>
        </div>

        <h1 className="text1">Will you be reserving a lakeside cabin and staying in the park?</h1>
      <div className="form-check">
        <input defaultChecked={checked} onChange={() => setChecked(!checked)} className="form-check-input" type="checkbox" value="Yes! Can't wait to dance the night away under the stars and wake up to coffee by the lake" id="flexCheckDefault3"/>
        <label className="form-check-label" for="flexCheckDefault">
        Yes! Can't wait to dance the night away under the stars and wake up to coffee by the lake
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="No. I will arrange my own accommodations outside of the park" id="flexCheckDefault4"/>
        <label className="form-check-label" for="flexCheckDefault">
        No. I will arrange my own accommodations outside of the park
        </label>
        </div>

        <h1 className="text1">Will you be joining us for a welcome dinner on Friday 10/21 at 6pm by the cabins?</h1>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Yes! Venezuelan & Brazilian hots dogs, live music by the fire and smores sound great!" id="flexCheckDefault5"/>
        <label className="form-check-label" for="flexCheckDefault">
        Yes! Venezuelan & Brazilian hots dogs, live music by the fire and smores sound great!
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="No, I can't be there Friday but will be there Saturday 10/22 for the ceremony & reception starting at 3pm (that's 2:30pm Latin time" id="flexCheckDefault6"/>
        <label className="form-check-label" for="flexCheckDefault">
        No, I can't be there Friday but will be there Saturday 10/22 for the ceremony & reception starting at 3pm (that's 2:30pm Latin time
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