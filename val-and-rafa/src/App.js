import './App.css';
import NAVBAR from "../src/components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import RSVP from './pages/rsvp';
import Cabins from './pages/cabins';
import Schedule from './pages/schedule';
import Registry from './pages/registry';
import Travel from './pages/travel';
import QA from './pages/q-a';
import Moments from './pages/moments';
import { Container } from './components/Container';


function App() {
  const triggerText = 'RSVP';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.firstname.value);
    console.log(event.target.lastname.value);
    console.log(event.target.email.value);
    console.log(event.target.flexCheckDefault1.value);
    console.log(event.target.flexCheckDefault2.value);
    console.log(event.target.flexCheckDefault3.value);
    console.log(event.target.flexCheckDefault4.value);
    console.log(event.target.flexCheckDefault5.value);
    console.log(event.target.flexCheckDefault6.value);
    console.log(event.target.flexCheckDefault7.value);
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();

  };
  return (
    <div className="App">
      <div className="whitebackgound">
        <header>
          <h1 className='headertext'>Val & Rafa</h1>
        </header>
        <Router>
        <NAVBAR />
          <Routes>
            <Route exact path='/'element={<Home/>}/>
            <Route exact path='/RSVP'element={<RSVP/>}/>
            <Route exact path='/CABINS'element={<Cabins/>}/>
            <Route exact path='/SCHEDULE'element={<Schedule/>}/>
            <Route exact path='/REGISTRY'element={<Registry/>}/>
            <Route exact path='/TRAVEL'element={<Travel/>}/>
            <Route exact path='/Q&A'element={<QA/>}/>
            <Route exact path='/MOMENTS'element={<Moments/>}/>
          </Routes>
        </Router>
        <Container className = "popup" triggerText={triggerText} onSubmit={onSubmit} />
      </div>
    </div>
    
  );
}

export default App;
