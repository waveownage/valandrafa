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
    console.log(event.target.name.value);
    console.log(event.target.email.value);
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
